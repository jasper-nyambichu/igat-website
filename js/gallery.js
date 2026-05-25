/**
 * gallery.js — IGAT Club Gallery
 * Uses local data from siteData.js (no API calls)
 * To add/update gallery items: edit the "gallery" array in js/siteData.js
 */

(function () {
  const container = document.getElementById("gallery");
  if (!container) return;

  const items = (window.SITE_DATA && window.SITE_DATA.gallery) || [];

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted">No gallery items yet. Add them in js/siteData.js</p>
      </div>`;
    return;
  }

  container.innerHTML = items.map((item) => `
    <div class="col-md-6 col-lg-4 gallery-item">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-img-top position-relative">
          <img
            src="${item.image || ""}"
            class="img-fluid w-100"
            alt="${item.name || "Gallery image"}"
            onerror="this.src='images/placeholder.jpg'"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">${item.name || ""}</h5>
          <p class="card-text">${item.info || ""}</p>
          ${item.link ? `
          <a
            href="${item.link}"
            class="btn btn-sm btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#videoModal1"
          >Watch Video</a>` : ""}
        </div>
      </div>
    </div>
  `).join("");
})();