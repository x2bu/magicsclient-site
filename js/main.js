(function () {
  const downloadList = document.getElementById("download-list");
  const changelogList = document.getElementById("changelog-list");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function renderDownloads() {
    if (!RELEASES.length) {
      downloadList.innerHTML =
        '<p class="empty-state">No builds published yet — check back soon.</p>';
      return;
    }

    downloadList.innerHTML = RELEASES.map((r) => {
      const primary = r.primary ? "btn-primary" : "btn-secondary";
      return `
        <div class="card">
          <div class="card-info">
            <h3>v${r.version}</h3>
            <p class="meta">${r.loader || "Fabric"} · MC ${r.mcVersion || "?"} · ${r.size || ""}</p>
          </div>
          <a class="btn ${primary}" href="${r.url}" rel="noopener noreferrer">Download</a>
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
      const notes = c.notes.map((n) => `<li>${n}</li>`).join("");
      return `
        <div class="card changelog-entry">
          <div class="card-info">
            <h3>v${c.version} <span class="meta">${c.date || ""}</span></h3>
            <ul>${notes}</ul>
          </div>
        </div>
      `;
    }).join("");
  }

  renderDownloads();
  renderChangelog();
})();
