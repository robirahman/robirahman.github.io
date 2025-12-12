---
layout: page
title: Travel
permalink: /travel/
description: Password-protected travel maps
nav: true
nav_order: 6
---

<style>
.travel-lock {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, rgba(12, 92, 145, 0.08), rgba(32, 201, 151, 0.08));
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.travel-lock-card {
  background: #fff;
  padding: 1.75rem;
  border-radius: 14px;
  max-width: 460px;
  width: 100%;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
}

.travel-lock h2 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.travel-lock p {
  margin-top: 0;
  color: #555;
}

.travel-lock form {
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.travel-lock input[type="password"] {
  flex: 1 1 220px;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 1px solid #d0d7de;
  font-size: 1rem;
}

.travel-lock button {
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 10px;
  background: #0c5c91;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.travel-lock button:hover,
.travel-lock button:focus {
  background: #0a4f7b;
  transform: translateY(-1px);
}

.travel-lock .travel-feedback {
  margin-top: 0.75rem;
  color: #b00020;
  min-height: 1.25em;
}

.travel-lock .travel-note {
  background: #f7f9fb;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #444;
}

.travel-hidden {
  display: none !important;
}

.travel-content {
  margin-top: 2.25rem;
}

.travel-content h2 {
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.travel-map-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.travel-map-card {
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.04);
}

.travel-map-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
}

.travel-map-card figcaption {
  margin-top: 0.75rem;
  text-align: center;
  color: #555;
  font-size: 0.95rem;
}
</style>

<div id="travel-lock" class="travel-lock">
  <div class="travel-lock-card">
    <h2>Unlock travel maps</h2>
    <p>Enter the password we shared to see where I've been.</p>
    <form id="travel-password-form">
      <label class="sr-only" for="travel-password">Travel map password</label>
      <input id="travel-password" name="password" type="password" placeholder="Password" autocomplete="current-password" required />
      <button type="submit">Unlock</button>
    </form>
    <div id="travel-feedback" class="travel-feedback" aria-live="polite"></div>
    <div class="travel-note">
      The page will remember that you entered the correct password on this device so you do not have to unlock it again next time.
    </div>
  </div>
</div>

<div id="travel-content" class="travel-content travel-hidden">
  <p>This is a quick look at where I've been.</p>
  <div class="travel-map-grid">
    <figure class="travel-map-card">
      <img src="{{ '/assets/Highlighted US states map.svg' | relative_url }}" alt="Highlighted map of the United States showing visited states." loading="lazy" />
      <figcaption>Where I've been across the United States.</figcaption>
    </figure>
    <figure class="travel-map-card">
      <img src="{{ '/assets/Highlighted world countries map.svg' | relative_url }}" alt="Highlighted world map showing visited countries." loading="lazy" />
      <figcaption>Countries I've visited around the world.</figcaption>
    </figure>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const PASSWORD_HASH = "7703ae1976ddbe96ed84ab2c23bfbdd3ec22278b94ad8ad0fc67ab4260039510"; // sha256 of the travel password ("wanderlust")
    const lock = document.getElementById("travel-lock");
    const content = document.getElementById("travel-content");
    const form = document.getElementById("travel-password-form");
    const feedback = document.getElementById("travel-feedback");
    const passwordInput = document.getElementById("travel-password");

    const showContent = () => {
      lock.classList.add("travel-hidden");
      content.classList.remove("travel-hidden");
    };

    const hasher = async (value) => {
      const encoder = new TextEncoder();
      const data = encoder.encode(value);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    };

    const unlockFromStorage = () => {
      const saved = window.localStorage.getItem("travel-page-unlocked");
      if (saved === PASSWORD_HASH) {
        showContent();
        return true;
      }
      return false;
    };

    unlockFromStorage();

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      feedback.textContent = "";

      try {
        const value = passwordInput.value.trim();
        if (!value) {
          feedback.textContent = "Please enter the password to continue.";
          return;
        }

        const hash = await hasher(value);
        if (hash === PASSWORD_HASH) {
          window.localStorage.setItem("travel-page-unlocked", PASSWORD_HASH);
          showContent();
          feedback.textContent = "";
          passwordInput.value = "";
        } else {
          feedback.textContent = "Incorrect password. Please try again.";
        }
      } catch (error) {
        console.error("Error validating password", error);
        feedback.textContent = "Something went wrong. Please try again.";
      }
    });
  });
</script>
