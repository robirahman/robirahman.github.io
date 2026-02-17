---
layout: page
title: Tournaments
permalink: /tournaments/
---

<link rel="stylesheet" href="/assets/css/tournaments.css">

<div class="tournaments" data-tournaments-root>
  <section id="tournaments-list" class="tournaments__panel" hidden>
    <header class="tournaments__header">
      <div>
        <h2>Live tournaments</h2>
        <p>Create, manage, and update brackets in real time.</p>
      </div>
      <a class="tournaments__button" href="/tournaments/#new">Create new tournament</a>
    </header>

    <div id="tournament-list" class="tournaments__grid"></div>
    <p id="tournament-empty" class="tournaments__empty">No tournaments yet. Create one to get started.</p>

  </section>

  <section id="tournaments-new" class="tournaments__panel" hidden>
    <header class="tournaments__header">
      <div>
        <h2>Create a new tournament</h2>
        <p>Choose a format, add players, and generate the initial matchups.</p>
      </div>
      <a class="tournaments__button tournaments__button--ghost" href="/tournaments/">Back to tournaments</a>
    </header>

    <form id="tournament-form" class="tournaments__form">
      <label class="tournaments__field">
        <span class="tournaments__label">Tournament name</span>
        <input id="tournament-name" type="text" required placeholder="Summer Chess Open" />
      </label>

      <div class="tournaments__row">
        <label class="tournaments__field">
          <span class="tournaments__label">Tournament type</span>
          <select id="tournament-type" required>
            <option value="single elimination">Single elimination</option>
            <option value="double elimination">Double elimination</option>
            <option value="round robin">Round robin</option>
            <option value="swiss">Swiss</option>
          </select>
        </label>

        <label class="tournaments__field">
          <span class="tournaments__label">Number of players</span>
          <input id="tournament-size" type="number" min="2" max="64" value="8" required />
        </label>

        <label class="tournaments__field" id="tournament-rounds-field" hidden>
          <span class="tournaments__label">Number of rounds</span>
          <input id="tournament-rounds" type="number" min="1" max="16" value="3" required />
        </label>
      </div>

      <div>
        <h3>Players</h3>
        <div id="player-fields" class="tournaments__players"></div>
      </div>

      <button class="tournaments__button" type="submit">Create tournament</button>
      <p id="tournament-error" class="tournaments__error" role="alert"></p>
    </form>

  </section>

  <section id="tournaments-detail" class="tournaments__panel" hidden>
    <header class="tournaments__header">
      <div>
        <h2 id="detail-name">Tournament</h2>
        <p id="detail-meta"></p>
      </div>
      <div class="tournaments__actions">
        <a class="tournaments__button tournaments__button--ghost" href="/tournaments/">All tournaments</a>
        <a class="tournaments__button" href="/tournaments/#new">New tournament</a>
      </div>
    </header>

    <section class="tournaments__section">
      <h3>Bracket overview</h3>
      <div id="bracket-view" class="tournaments__bracket"></div>
    </section>

    <section class="tournaments__section">
      <h3>Current standings</h3>
      <div class="tournaments__table" id="standings-table"></div>
    </section>

    <section class="tournaments__section" id="participant-detail" hidden>
      <div class="tournaments__participant">
        <div class="tournaments__participant-header">
          <div>
            <h3>Participant details</h3>
            <p id="participant-name" class="tournaments__participant-meta"></p>
          </div>
        </div>
        <form id="participant-form" class="tournaments__participant-form">
          <label class="tournaments__field">
            <span class="tournaments__label">Edit name</span>
            <input id="participant-edit" type="text" required />
          </label>
          <button class="tournaments__button" type="submit">Save name</button>
          <p id="participant-error" class="tournaments__error" role="alert"></p>
        </form>
        <div class="tournaments__participant-history">
          <h4>Match history</h4>
          <div id="participant-matches" class="tournaments__participant-matches"></div>
        </div>
      </div>
    </section>

    <section class="tournaments__section">
      <h3>Upcoming matchups</h3>
      <div id="upcoming-matches" class="tournaments__matches"></div>
      <p id="matches-empty" class="tournaments__empty">No upcoming matches.</p>
    </section>

    <section class="tournaments__section">
      <h3>Completed results</h3>
      <div id="completed-matches" class="tournaments__matches"></div>
    </section>

  </section>
</div>

<script src="/assets/js/tournaments.js"></script>
