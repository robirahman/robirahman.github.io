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
  const standingsTable = document.querySelector('#standings-table');
  const upcomingMatches = document.querySelector('#upcoming-matches');
  const completedMatches = document.querySelector('#completed-matches');
  const matchesEmpty = document.querySelector('#matches-empty');

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
    if (path === basePath || path === `${basePath}/index.html`) {
      return { view: 'list' };
    }
    if (path === `${basePath}/new`) {
      return { view: 'new' };
    }
    if (path.startsWith(`${basePath}/`)) {
      const slug = path.slice(basePath.length + 1);
      return { view: 'detail', slug };
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

  const createMatches = (type, players) => {
    const matches = [];
    let matchId = 1;

    const createPairings = (pairPlayers, round) => {
      const pairs = [...pairPlayers];
      if (pairs.length % 2 !== 0) {
        pairs.push('Bye');
      }
      for (let i = 0; i < pairs.length; i += 2) {
        const player1 = pairs[i];
        const player2 = pairs[i + 1];
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
      }
    };

    if (type === 'round robin') {
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

    createPairings(players, 1);
    return matches;
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
          <td>${row.player}</td>
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
        <a class="tournaments__button tournaments__button--ghost" href="${basePath}/${tournament.slug}">View tournament</a>
      `;
      listContainer.appendChild(card);
    });
  };

  const renderTournament = (slug) => {
    const tournament = getTournaments().find((entry) => entry.slug === slug);
    if (!tournament) {
      detailName.textContent = 'Tournament not found';
      detailMeta.textContent = 'Create a new tournament to get started.';
      standingsTable.innerHTML = '';
      upcomingMatches.innerHTML = '';
      completedMatches.innerHTML = '';
      matchesEmpty.hidden = false;
      return;
    }
    detailName.textContent = tournament.name;
    detailMeta.textContent = `${tournament.type} · ${tournament.players.length} players`;
    renderStandings(tournament);
    renderMatches(tournament);
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

      const tournament = {
        name,
        slug,
        type,
        players,
        matches: createMatches(type, players),
        createdAt: new Date().toISOString(),
      };
      persistTournament(tournament);
      window.location.href = `${basePath}/${slug}`;
    });
  };

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
})();
