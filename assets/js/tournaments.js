(() => {
  const storageKey = 'tournaments-v1';
  const basePath = '/tournaments';
  const listPanel = document.querySelector('#tournaments-list');
  const newPanel = document.querySelector('#tournaments-new');
  const detailPanel = document.querySelector('#tournaments-detail');
  const listContainer = document.querySelector('#tournament-list');
  const listEmpty = document.querySelector('#tournament-empty');
  const form = document.querySelector('#tournament-form');
  const playerFields = document.querySelector('#player-fields');
  const tournamentSize = document.querySelector('#tournament-size');
  const tournamentType = document.querySelector('#tournament-type');
  const tournamentName = document.querySelector('#tournament-name');
  const formError = document.querySelector('#tournament-error');
  const detailName = document.querySelector('#detail-name');
  const detailMeta = document.querySelector('#detail-meta');
  const bracketView = document.querySelector('#bracket-view');
  const standingsTable = document.querySelector('#standings-table');
  const participantDetail = document.querySelector('#participant-detail');
  const participantName = document.querySelector('#participant-name');
  const participantForm = document.querySelector('#participant-form');
  const participantEdit = document.querySelector('#participant-edit');
  const participantError = document.querySelector('#participant-error');
  const participantMatches = document.querySelector('#participant-matches');
  const upcomingMatches = document.querySelector('#upcoming-matches');
  const completedMatches = document.querySelector('#completed-matches');
  const matchesEmpty = document.querySelector('#matches-empty');
  let activeTournament = null;
  let activeParticipant = null;

  if (!listPanel || !newPanel || !detailPanel) {
    return;
  }

  const getTournaments = () => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || [];
    } catch (error) {
      return [];
    }
  };

  const saveTournaments = (tournaments) => {
    localStorage.setItem(storageKey, JSON.stringify(tournaments));
  };

  const slugify = (value) =>
    value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const getRoute = () => {
    const path = window.location.pathname.replace(/\/+$/, '');
    const hash = window.location.hash.replace('#', '').trim();
    if (path !== basePath && path !== `${basePath}/index.html`) {
      return { view: 'list' };
    }
    if (hash === 'new') {
      return { view: 'new' };
    }
    if (hash) {
      return { view: 'detail', slug: hash };
    }
    return { view: 'list' };
  };

  const showPanel = (panel) => {
    [listPanel, newPanel, detailPanel].forEach((section) => {
      section.hidden = section !== panel;
    });
  };

  const renderPlayerFields = () => {
    const count = Math.max(2, Number.parseInt(tournamentSize.value, 10) || 2);
    tournamentSize.value = count;
    playerFields.innerHTML = '';
    for (let i = 0; i < count; i += 1) {
      const field = document.createElement('label');
      field.className = 'tournaments__field';
      field.innerHTML = `
        <span class="tournaments__label">Player ${i + 1}</span>
        <input type="text" required placeholder="Player ${i + 1}" />
      `;
      playerFields.appendChild(field);
    }
  };

  const getSeedMap = (tournament) => {
    if (tournament.seeds) {
      return tournament.seeds;
    }
    return tournament.players.reduce((acc, player, index) => {
      acc[player] = index + 1;
      return acc;
    }, {});
  };

  const sortBySeed = (players, seedMap) =>
    [...players].sort((a, b) => {
      const seedDiff = seedMap[a] - seedMap[b];
      if (seedDiff !== 0) {
        return seedDiff;
      }
      return a.localeCompare(b);
    });

  const createSeededPairs = (players, seedMap) => {
    const ordered = sortBySeed(players, seedMap);
    if (ordered.length % 2 !== 0) {
      ordered.push('Bye');
    }
    const pairs = [];
    for (let i = 0; i < ordered.length / 2; i += 1) {
      pairs.push([ordered[i], ordered[ordered.length - 1 - i]]);
    }
    return pairs;
  };

  const buildMatchesFromPairs = (pairs, round, startingId = 1) => {
    const matches = [];
    let matchId = startingId;
    pairs.forEach(([player1, player2]) => {
      if (player2 === 'Bye') {
        matches.push({
          id: matchId,
          round,
          player1,
          player2: 'Bye',
          score1: 1,
          score2: 0,
          status: 'complete',
        });
      } else {
        matches.push({
          id: matchId,
          round,
          player1,
          player2,
          score1: null,
          score2: null,
          status: 'pending',
        });
      }
      matchId += 1;
    });
    return { matches, nextMatchId: matchId };
  };

  const createMatches = (type, players, seedMap) => {
    if (type === 'round robin') {
      const matches = [];
      let matchId = 1;
      let round = 1;
      for (let i = 0; i < players.length; i += 1) {
        for (let j = i + 1; j < players.length; j += 1) {
          matches.push({
            id: matchId,
            round,
            player1: players[i],
            player2: players[j],
            score1: null,
            score2: null,
            status: 'pending',
          });
          matchId += 1;
          round += 1;
        }
      }
      return matches;
    }

    const pairs = createSeededPairs(players, seedMap);
    return buildMatchesFromPairs(pairs, 1).matches;
  };

  const createSwissPairs = (tournament) => {
    const seedMap = getSeedMap(tournament);
    const opponents = tournament.matches.reduce((acc, match) => {
      if (match.player2 === 'Bye') {
        return acc;
      }
      acc[match.player1] = acc[match.player1] || new Set();
      acc[match.player2] = acc[match.player2] || new Set();
      acc[match.player1].add(match.player2);
      acc[match.player2].add(match.player1);
      return acc;
    }, {});

    const standings = computeStandings(tournament);
    const groups = standings.reduce((acc, row) => {
      const key = row.points;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(row.player);
      return acc;
    }, {});

    const pointBuckets = Object.keys(groups)
      .map(Number)
      .sort((a, b) => b - a);

    const pairs = [];
    let carryOver = null;

    pointBuckets.forEach((points) => {
      const group = groups[points] || [];
      if (carryOver) {
        group.push(carryOver);
        carryOver = null;
      }
      const ordered = sortBySeed(group, seedMap);
      while (ordered.length > 1) {
        const player = ordered.shift();
        const opponentSet = opponents[player] || new Set();
        let opponentIndex = ordered.length - 1;
        while (opponentIndex >= 0 && opponentSet.has(ordered[opponentIndex])) {
          opponentIndex -= 1;
        }
        if (opponentIndex < 0) {
          opponentIndex = ordered.length - 1;
        }
        const opponent = ordered.splice(opponentIndex, 1)[0];
        pairs.push([player, opponent]);
      }
      if (ordered.length === 1) {
        carryOver = ordered.pop();
      }
    });

    if (carryOver) {
      pairs.push([carryOver, 'Bye']);
    }

    return pairs;
  };

  const getWinner = (match) => {
    if (match.player2 === 'Bye') {
      return match.player1;
    }
    const score1 = Number(match.score1);
    const score2 = Number(match.score2);
    if (Number.isNaN(score1) || Number.isNaN(score2)) {
      return null;
    }
    if (score1 === score2) {
      return null;
    }
    return score1 > score2 ? match.player1 : match.player2;
  };

  const ensureNextRound = (tournament) => {
    if (tournament.type === 'round robin') {
      return;
    }
    const rounds = tournament.matches.reduce((acc, match) => {
      acc.add(match.round);
      return acc;
    }, new Set());
    const latestRound = Math.max(...Array.from(rounds));
    const latestMatches = tournament.matches.filter((match) => match.round === latestRound);
    if (latestMatches.length === 0) {
      return;
    }
    const allComplete = latestMatches.every((match) => match.status === 'complete');
    if (!allComplete) {
      return;
    }
    const nextRound = latestRound + 1;
    const alreadyExists = tournament.matches.some((match) => match.round === nextRound);
    if (alreadyExists) {
      return;
    }
    const nextMatchId = Math.max(0, ...tournament.matches.map((match) => match.id)) + 1;
    if (tournament.type === 'swiss') {
      const pairs = createSwissPairs(tournament);
      const { matches } = buildMatchesFromPairs(pairs, nextRound, nextMatchId);
      tournament.matches.push(...matches);
      return;
    }
    const winners = latestMatches.map(getWinner).filter(Boolean);
    if (winners.length < 2) {
      return;
    }
    const seedMap = getSeedMap(tournament);
    const pairs = createSeededPairs(winners, seedMap);
    const { matches } = buildMatchesFromPairs(pairs, nextRound, nextMatchId);
    tournament.matches.push(...matches);
  };

  const computeStandings = (tournament) => {
    const standings = tournament.players.reduce((acc, player) => {
      acc[player] = { player, wins: 0, losses: 0, draws: 0, points: 0 };
      return acc;
    }, {});

    tournament.matches
      .filter((match) => match.status === 'complete')
      .forEach((match) => {
        if (match.player2 === 'Bye') {
          standings[match.player1].wins += 1;
          standings[match.player1].points += 1;
          return;
        }
        const score1 = Number(match.score1);
        const score2 = Number(match.score2);
        if (Number.isNaN(score1) || Number.isNaN(score2)) {
          return;
        }
        if (score1 === score2) {
          standings[match.player1].draws += 1;
          standings[match.player2].draws += 1;
          standings[match.player1].points += 0.5;
          standings[match.player2].points += 0.5;
        } else if (score1 > score2) {
          standings[match.player1].wins += 1;
          standings[match.player2].losses += 1;
          standings[match.player1].points += 1;
        } else {
          standings[match.player2].wins += 1;
          standings[match.player1].losses += 1;
          standings[match.player2].points += 1;
        }
      });

    return Object.values(standings).sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      if (b.wins !== a.wins) {
        return b.wins - a.wins;
      }
      return a.player.localeCompare(b.player);
    });
  };

  const renderStandings = (tournament) => {
    const standings = computeStandings(tournament);
    const rows = standings
      .map(
        (row) => `
        <tr>
          <td>
            <button class="tournaments__link" type="button" data-player="${row.player}">
              ${row.player}
            </button>
          </td>
          <td>${row.wins}</td>
          <td>${row.losses}</td>
          <td>${row.draws}</td>
          <td>${row.points}</td>
        </tr>
      `,
      )
      .join('');

    standingsTable.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Draws</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  };

  const renderParticipant = (tournament, player) => {
    if (!participantDetail || !participantName || !participantMatches || !participantEdit) {
      return;
    }
    if (!player || !tournament.players.includes(player)) {
      participantDetail.hidden = true;
      activeParticipant = null;
      return;
    }
    activeParticipant = player;
    participantDetail.hidden = false;
    participantName.textContent = player;
    participantEdit.value = player;
    participantError.textContent = '';

    const matches = tournament.matches
      .filter((match) => match.player1 === player || match.player2 === player)
      .sort((a, b) => a.round - b.round);

    if (matches.length === 0) {
      participantMatches.innerHTML = '<p class="tournaments__empty">No matches yet.</p>';
      return;
    }

    participantMatches.innerHTML = matches
      .map((match) => {
        const opponent = match.player1 === player ? match.player2 : match.player1;
        const scoreline =
          match.status === 'complete'
            ? `${match.score1 ?? '-'} - ${match.score2 ?? '-'}`
            : 'Scheduled';
        const playerScore =
          match.status === 'complete'
            ? match.player1 === player
              ? match.score1
              : match.score2
            : null;
        const opponentScore =
          match.status === 'complete'
            ? match.player1 === player
              ? match.score2
              : match.score1
            : null;
        const displayScore =
          match.status === 'complete' ? `${playerScore ?? '-'} - ${opponentScore ?? '-'}` : scoreline;
        return `
          <div class="tournaments__participant-match">
            <div class="tournaments__participant-opponent">
              <span>Round ${match.round}</span>
              <span>vs ${opponent}</span>
            </div>
            <div class="tournaments__participant-score">${displayScore}</div>
          </div>
        `;
      })
      .join('');
  };

  const renameParticipant = (tournament, oldName, newName) => {
    const trimmed = newName.trim();
    if (!trimmed) {
      return 'Please enter a valid name.';
    }
    if (trimmed.toLowerCase() === 'bye') {
      return 'The name "Bye" is reserved.';
    }
    if (oldName === trimmed) {
      return '';
    }
    if (tournament.players.includes(trimmed)) {
      return 'That name is already taken.';
    }

    tournament.players = tournament.players.map((player) => (player === oldName ? trimmed : player));
    if (tournament.seeds && tournament.seeds[oldName]) {
      const seedValue = tournament.seeds[oldName];
      delete tournament.seeds[oldName];
      tournament.seeds[trimmed] = seedValue;
    }
    tournament.matches.forEach((match) => {
      if (match.player1 === oldName) {
        match.player1 = trimmed;
      }
      if (match.player2 === oldName) {
        match.player2 = trimmed;
      }
    });
    return '';
  };

  const renderBracket = (tournament) => {
    if (!bracketView) {
      return;
    }
    if (tournament.type === 'round robin') {
      bracketView.innerHTML = '<p class="tournaments__bracket-empty">Bracket view is available for elimination formats.</p>';
      return;
    }
    const rounds = tournament.matches.reduce((acc, match) => {
      acc[match.round] = acc[match.round] || [];
      acc[match.round].push(match);
      return acc;
    }, {});
    const roundNumbers = Object.keys(rounds)
      .map(Number)
      .sort((a, b) => a - b);
    if (roundNumbers.length === 0) {
      bracketView.innerHTML = '<p class="tournaments__bracket-empty">Bracket will appear once matches are created.</p>';
      return;
    }
    bracketView.innerHTML = roundNumbers
      .map((round) => {
        const matchesHtml = rounds[round]
          .map(
            (match) => `
            <div class="tournaments__bracket-match">
              <span>${match.player1}<strong>${match.score1 ?? '-'}</strong></span>
              <span>${match.player2}<strong>${match.score2 ?? '-'}</strong></span>
            </div>
          `,
          )
          .join('');
        return `
          <div class="tournaments__bracket-round">
            <h4>Round ${round}</h4>
            ${matchesHtml}
          </div>
        `;
      })
      .join('');
  };

  const renderMatches = (tournament) => {
    const upcoming = tournament.matches.filter((match) => match.status === 'pending');
    const completed = tournament.matches.filter((match) => match.status === 'complete');

    matchesEmpty.hidden = upcoming.length > 0;
    upcomingMatches.innerHTML = '';
    completedMatches.innerHTML = '';

    upcoming.forEach((match) => {
      const matchEl = document.createElement('div');
      matchEl.className = 'tournaments__match';
      matchEl.innerHTML = `
        <div class="tournaments__match-header">
          <span>Round ${match.round}</span>
          <span>Match #${match.id}</span>
        </div>
        <div class="tournaments__scoreline">
          <strong>${match.player1}</strong>
          <input type="number" min="0" placeholder="Score" />
          <span>vs</span>
          <input type="number" min="0" placeholder="Score" />
          <strong>${match.player2}</strong>
          <button class="tournaments__button tournaments__button--ghost" type="button">Save score</button>
        </div>
      `;

      const [score1, score2, button] = matchEl.querySelectorAll('input, button');
      button.addEventListener('click', () => {
        const scoreValue1 = Number(score1.value);
        const scoreValue2 = Number(score2.value);
        if (Number.isNaN(scoreValue1) || Number.isNaN(scoreValue2)) {
          return;
        }
        match.score1 = scoreValue1;
        match.score2 = scoreValue2;
        match.status = 'complete';
        ensureNextRound(tournament);
        persistTournament(tournament);
        renderTournament(tournament.slug);
      });
      upcomingMatches.appendChild(matchEl);
    });

    completed.forEach((match) => {
      const matchEl = document.createElement('div');
      matchEl.className = 'tournaments__match';
      matchEl.innerHTML = `
        <div class="tournaments__match-header">
          <span>Round ${match.round}</span>
          <span>Match #${match.id}</span>
        </div>
        <div class="tournaments__scoreline">
          <strong>${match.player1}</strong>
          <span>${match.score1}</span>
          <span>vs</span>
          <span>${match.score2}</span>
          <strong>${match.player2}</strong>
        </div>
      `;
      completedMatches.appendChild(matchEl);
    });
  };

  const persistTournament = (tournament) => {
    const tournaments = getTournaments();
    const index = tournaments.findIndex((entry) => entry.slug === tournament.slug);
    if (index >= 0) {
      tournaments[index] = tournament;
    } else {
      tournaments.push(tournament);
    }
    saveTournaments(tournaments);
  };

  const renderList = () => {
    const tournaments = getTournaments();
    listContainer.innerHTML = '';
    listEmpty.hidden = tournaments.length > 0;

    tournaments.forEach((tournament) => {
      const card = document.createElement('div');
      card.className = 'tournaments__card';
      card.innerHTML = `
        <h3>${tournament.name}</h3>
        <div class="tournaments__meta">
          <span>${tournament.type}</span>
          <span>${tournament.players.length} players</span>
          <span>Created ${new Date(tournament.createdAt).toLocaleDateString()}</span>
        </div>
        <a class="tournaments__button tournaments__button--ghost" href="${basePath}/#${tournament.slug}">View tournament</a>
      `;
      listContainer.appendChild(card);
    });
  };

  const renderTournament = (slug) => {
    const tournament = getTournaments().find((entry) => entry.slug === slug);
    if (!tournament) {
      activeTournament = null;
      detailName.textContent = 'Tournament not found';
      detailMeta.textContent = 'Create a new tournament to get started.';
      standingsTable.innerHTML = '';
      upcomingMatches.innerHTML = '';
      completedMatches.innerHTML = '';
      matchesEmpty.hidden = false;
      if (participantDetail) {
        participantDetail.hidden = true;
      }
      return;
    }
    activeTournament = tournament;
    detailName.textContent = tournament.name;
    detailMeta.textContent = `${tournament.type} · ${tournament.players.length} players`;
    renderBracket(tournament);
    renderStandings(tournament);
    renderMatches(tournament);
    renderParticipant(tournament, activeParticipant);
  };

  const setupForm = () => {
    renderPlayerFields();
    tournamentSize.addEventListener('change', renderPlayerFields);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      formError.textContent = '';
      const name = tournamentName.value.trim();
      const type = tournamentType.value;
      const count = Number.parseInt(tournamentSize.value, 10);
      if (!name || !count || count < 2) {
        formError.textContent = 'Please provide a valid name and at least two players.';
        return;
      }
      const players = Array.from(playerFields.querySelectorAll('input'))
        .map((input) => input.value.trim())
        .filter(Boolean);
      if (players.length !== count) {
        formError.textContent = 'Please enter every player name.';
        return;
      }
      const slug = slugify(name);
      if (!slug) {
        formError.textContent = 'Please enter a valid tournament name.';
        return;
      }
      const existing = getTournaments().some((entry) => entry.slug === slug);
      if (existing) {
        formError.textContent = 'A tournament with this name already exists.';
        return;
      }

      const seeds = players.reduce((acc, player, index) => {
        acc[player] = index + 1;
        return acc;
      }, {});

      const tournament = {
        name,
        slug,
        type,
        players,
        seeds,
        matches: createMatches(type, players, seeds),
        createdAt: new Date().toISOString(),
      };
      ensureNextRound(tournament);
      persistTournament(tournament);
      window.location.href = `${basePath}/#${slug}`;
    });
  };

  const renderRoute = () => {
    const route = getRoute();
    if (route.view === 'list') {
      showPanel(listPanel);
      renderList();
    } else if (route.view === 'new') {
      showPanel(newPanel);
      setupForm();
    } else if (route.view === 'detail') {
      showPanel(detailPanel);
      renderTournament(route.slug);
    }
  };

  if (standingsTable) {
    standingsTable.addEventListener('click', (event) => {
      const target = event.target.closest('[data-player]');
      if (!target || !activeTournament) {
        return;
      }
      renderParticipant(activeTournament, target.getAttribute('data-player'));
    });
  }

  if (participantForm) {
    participantForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!activeTournament || !activeParticipant) {
        return;
      }
      const error = renameParticipant(activeTournament, activeParticipant, participantEdit.value);
      if (error) {
        participantError.textContent = error;
        return;
      }
      participantError.textContent = '';
      persistTournament(activeTournament);
      renderTournament(activeTournament.slug);
    });
  }

  window.addEventListener('hashchange', renderRoute);
  renderRoute();
})();
