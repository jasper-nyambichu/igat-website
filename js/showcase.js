/**
 * showcase.js — IGAT Club Showcase Page Renderer
 * Reads from js/siteData.js and builds all image sections dynamically.
 *
 * Sections managed:
 *  1. Egekabu Gallery Grid   (#egekabu-gallery)
 *  2. Leadership Events      (#leadership-events)
 *  3. Featured Talents       (#featured-talents)
 *
 * To update any image or content: edit js/siteData.js only.
 */

(function () {
  function render() {
    const data = window.SITE_DATA || {};

    // ── 1. Egekabu Gallery Grid ─────────────────────────────
    const egekabuContainer = document.getElementById("egekabu-gallery");
    if (egekabuContainer && data.egekabuGallery && data.egekabuGallery.length) {
      const images = data.egekabuGallery;
      // Split into 3 columns of 2
      const cols = [images.slice(0, 2), images.slice(2, 4), images.slice(4, 6)];

      egekabuContainer.innerHTML = cols.map((col) => `
        <div class="gallery-column">
          ${col.map((img) => `
            <div class="egekabu-card${img.size === "tall" ? " tall" : ""}">
              <img
                src="${img.src}"
                alt="${img.alt}"
                class="gallery-img"
                onerror="this.src='images/placeholder.jpg'"
              />
              <div class="card-overlay">
                <span class="vintage-caption">${img.caption}</span>
              </div>
            </div>
          `).join("")}
        </div>
      `).join("");
    }

    // ── 2. Leadership / ARISE Events ──────────────────────────
    const leadershipContainer = document.getElementById("leadership-events");
    if (leadershipContainer && data.leadershipEvents && data.leadershipEvents.length) {
      leadershipContainer.innerHTML = data.leadershipEvents.map((ev) => `
        <div class="col-lg-4 col-md-6">
          <div class="leadership-card h-100 d-flex flex-column">
            <div class="leadership-img-container">
              <img
                src="${ev.src}"
                class="leadership-img"
                alt="${ev.alt}"
                onerror="this.src='images/placeholder.jpg'"
              />
              <div class="leadership-badge">${ev.badge}</div>
            </div>
            <div class="leadership-content d-flex flex-column flex-grow-1">
              <h3 class="leadership-title">${ev.title}</h3>
              <p class="leadership-theme">${ev.theme}</p>

              <div class="leadership-details mb-4">
                ${ev.date ? `
                <div class="leadership-detail">
                  <i class="fas fa-calendar-alt"></i>
                  <span><strong>Date:</strong> ${ev.date}</span>
                </div>` : ""}
                ${ev.time ? `
                <div class="leadership-detail">
                  <i class="fas fa-clock"></i>
                  <span><strong>Time:</strong> ${ev.time}</span>
                </div>` : ""}
                ${ev.venue ? `
                <div class="leadership-detail">
                  <i class="fas fa-map-marker-alt"></i>
                  <span><strong>Venue:</strong> ${ev.venue}</span>
                </div>` : ""}
                ${ev.description ? `<p class="small text-muted mt-2">${ev.description}</p>` : ""}
              </div>

              <div class="featured-speaker mt-auto${ev.footerNote ? " mb-3" : ""}">
                <h5 class="speaker-name">${ev.speakerName}</h5>
                <p class="speaker-role">${ev.speakerRole}</p>
                <p class="speaker-description small mb-0">${ev.speakerBio}</p>
              </div>

              ${ev.footerNote ? `
              <div class="reservation-info text-center mt-auto">
                ${ev.footerNote}
              </div>` : ""}
            </div>
          </div>
        </div>
      `).join("");
    }

    // ── 3. Featured Talents ────────────────────────────────────
    const talentsContainer = document.getElementById("featured-talents");
    if (talentsContainer && data.featuredTalents && data.featuredTalents.length) {
      talentsContainer.innerHTML = data.featuredTalents.map((talent) => `
        <div class="col-md-6 col-lg-4">
          <div class="talent-card h-100 d-flex flex-column">
            <div class="talent-img-container">
              <img
                src="${talent.src}"
                class="talent-img"
                alt="${talent.alt}"
                onerror="this.src='images/placeholder.jpg'"
              />
              <div class="talent-category">${talent.category}</div>
            </div>
            <div class="talent-card-body d-flex flex-column flex-grow-1">
              <h4 class="talent-name">${talent.name}</h4>
              <p class="talent-role">${talent.role}</p>
              <p class="talent-description text-muted">${talent.description}</p>
              <div class="mt-auto">
                <a href="${talent.profileLink || "#"}" class="btn btn-outline-primary w-100 rounded-pill">
                  View Profile <i class="fas fa-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `).join("");
    }
  }

  // Run on DOMContentLoaded to ensure containers exist
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render(); // DOM already ready (script loaded at bottom of body)
  }
})();