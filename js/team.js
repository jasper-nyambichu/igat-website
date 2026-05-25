/**
 * team.js — IGAT Club Team
 * Uses local data from siteData.js by default.
 * To update team members: edit the "team" array in js/siteData.js
 *
 * OPTIONAL API FALLBACK:
 * If you ever want to re-enable the API, set USE_API = true below.
 * The API will only be used if local team data is empty.
 */

(function () {
  const USE_API = false; // Set true to fall back to API when local team is empty
  const API_URL = "https://igat-admin.vercel.app/api/team";

  const container = document.getElementById("team");
  if (!container) return;

  const localTeam = (window.SITE_DATA && window.SITE_DATA.team) || [];

  if (localTeam.length > 0) {
    renderTeam(localTeam, false);
  } else if (USE_API) {
    fetchFromAPI();
  } else {
    container.innerHTML = `
      <div class="col-12 text-center py-4">
        <p class="text-muted">Team members coming soon.</p>
      </div>`;
  }

  function renderTeam(team, isApiData) {
    container.innerHTML = team.map((member) => {
      // Support both local data format and PocketBase API format
      const photo = isApiData
        ? `https://igat.fly.dev/api/files/${member.collectionId}/${member.id}/${member.photo}`
        : (member.photo || "images/placeholder.jpg");

      return `
        <div class="col-md-4 mb-4">
          <div class="card border-0 shadow-sm h-100">
            <img
              src="${photo}"
              class="card-img-top"
              alt="${member.name || "Team member"}"
              onerror="this.src='images/placeholder.jpg'"
            />
            <div class="card-body text-center">
              <h5 class="card-title">${member.name || ""}</h5>
              <p class="text-muted">${member.position || ""}</p>
              <p class="card-text">${member.info || "A dedicated member of the IGAT Club team."}</p>
              <div class="d-flex justify-content-center">
                ${member.email ? `
                <a href="mailto:${member.email}" class="btn btn-sm btn-outline-primary me-2">
                  <i class="fas fa-envelope"></i>
                </a>` : ""}
                ${member.phone ? `
                <a href="tel:+254${member.phone}" class="btn btn-sm btn-outline-primary">
                  <i class="fas fa-phone"></i>
                </a>` : ""}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  function fetchFromAPI() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => renderTeam(data.data || [], true))
      .catch(() => {
        container.innerHTML = `
          <div class="col-12 text-center py-4">
            <p class="text-muted">Team information currently unavailable.</p>
          </div>`;
      });
  }
})();