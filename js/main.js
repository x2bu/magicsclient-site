(function () {
  const downloadList = document.getElementById("download-list");
  const changelogList = document.getElementById("changelog-list");
  const featureGrid = document.getElementById("feature-grid");
  const heroBadges = document.getElementById("hero-badges");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Escape user-editable strings before injecting as HTML.
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function renderBadges() {
    if (!heroBadges || typeof REQUIREMENTS === "undefined") return;
    const items = [
      REQUIREMENTS.minecraft && ["MC", REQUIREMENTS.minecraft],
      REQUIREMENTS.loader && ["Loader", REQUIREMENTS.loader],
      REQUIREMENTS.java && ["Java", REQUIREMENTS.java],
    ].filter(Boolean);
    heroBadges.innerHTML = items
      .map(([k, v]) => `<span class="badge">${esc(k)} <b>${esc(v)}</b></span>`)
      .join("");
  }

  function renderFeatures() {
    if (!featureGrid || typeof FEATURES === "undefined") return;
    if (!FEATURES.length) {
      featureGrid.closest(".section").hidden = true;
      return;
    }
    featureGrid.innerHTML = FEATURES.map((f) => `
      <div class="feature">
        <div class="feature-icon" aria-hidden="true">${esc(f.icon || "•")}</div>
        <h3>${esc(f.title)}</h3>
        <p>${esc(f.text)}</p>
      </div>
    `).join("");
  }

  function renderDownloads() {
    if (!RELEASES.length) {
      downloadList.innerHTML =
        '<p class="empty-state">No builds published yet — check back soon.</p>';
      return;
    }

    downloadList.innerHTML = RELEASES.map((r) => {
      const primary = r.primary ? "btn-primary" : "btn-secondary";
      const latest = r.primary ? ' <span class="meta">latest</span>' : "";
      const title = r.name ? esc(r.name) : `v${esc(r.version)}`;
      const metaBits = [
        r.name && r.version ? `v${r.version}` : null,
        r.loader || "Fabric",
        r.mcVersion ? `MC ${r.mcVersion}` : null,
        r.size || null,
      ].filter(Boolean).map(esc).join(" · ");
      // `download` only takes effect for same-origin files; ignored cross-origin.
      const dl = /^https?:/i.test(r.url) ? "" : " download";
      return `
        <div class="card">
          <div class="card-info">
            <h3>${title}${latest}</h3>
            <p class="meta">${metaBits}</p>
          </div>
          <a class="btn ${primary}" href="${esc(r.url)}"${dl} rel="noopener noreferrer">Download</a>
        </div>
      `;
    }).join("");
  }

  function renderChangelog() {
    if (!CHANGELOG.length) {
      changelogList.innerHTML = '<p class="empty-state">No changelog entries yet.</p>';
      return;
    }

    changelogList.innerHTML = CHANGELOG.map((c) => {
      const notes = c.notes.map((n) => `<li>${esc(n)}</li>`).join("");
      return `
        <div class="card changelog-entry">
          <div class="card-info">
            <h3>v${esc(c.version)} <span class="meta">${esc(c.date || "")}</span></h3>
            <ul>${notes}</ul>
          </div>
        </div>
      `;
    }).join("");
  }

  // Copy-to-clipboard buttons (e.g. the mods folder path).
  function wireCopyButtons() {
    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const target = document.querySelector(btn.dataset.copy);
        if (!target) return;
        try {
          await navigator.clipboard.writeText(target.textContent.trim());
          const original = btn.textContent;
          btn.textContent = "Copied!";
          btn.classList.add("copied");
          setTimeout(() => {
            btn.textContent = original;
            btn.classList.remove("copied");
          }, 1500);
        } catch (e) {
          /* clipboard unavailable — ignore */
        }
      });
    });
  }

  // Reveal sections as they scroll into view.
  function wireReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) return; // leave content visible
    els.forEach((el) => el.classList.add("reveal-init"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }

  renderBadges();
  renderFeatures();
  renderDownloads();
  renderChangelog();
  wireCopyButtons();
  wireReveal();
})();
