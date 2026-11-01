(function () {
  document.querySelectorAll("[data-chart]").forEach(function (root) {
    var carousel = root.querySelector(".chart-carousel");
    var track = root.querySelector(".chart-track");
    var slides = Array.prototype.slice.call(root.querySelectorAll(".chart-slide"));
    var prev = root.querySelector(".chart-prev");
    var next = root.querySelector(".chart-next");
    var dots = Array.prototype.slice.call(root.querySelectorAll(".chart-dot"));
    var currentEl = root.querySelector(".chart-current");
    var totalEl = root.querySelector(".chart-total");
    var full = root.querySelector(".chart-fullsize");
    var index = 0;

    if (!carousel || !track || !slides.length) return;
    if (totalEl) totalEl.textContent = String(slides.length);
    carousel.classList.add("is-ready");

    if (slides.length > 1) {
      if (prev) prev.hidden = false;
      if (next) next.hidden = false;
      var pager = root.querySelector(".chart-pagination");
      var counter = root.querySelector(".chart-counter");
      if (pager) pager.hidden = false;
      if (counter) counter.hidden = false;
    }

    function linkFor(i) {
      var anchor = slides[i].querySelector("a");
      return anchor ? anchor.getAttribute("href") : "";
    }

    function update() {
      track.style.transform = "translateX(-" + index * 100 + "%)";
      dots.forEach(function (dot, i) {
        var active = i === index;
        dot.classList.toggle("active", active);
        if (active) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      slides.forEach(function (slide, i) {
        var active = i === index;
        slide.inert = !active;
        var anchor = slide.querySelector("a");
        if (anchor) anchor.tabIndex = active ? 0 : -1;
      });
      if (currentEl) currentEl.textContent = String(index + 1);
      if (full) {
        full.href = linkFor(index);
        full.textContent = slides.length > 1
          ? "Open full-size chart (page " + (index + 1) + ")"
          : "Open full-size chart";
      }
    }

    function go(i) {
      index = (i + slides.length) % slides.length;
      update();
    }

    if (prev) prev.addEventListener("click", function () { go(index - 1); });
    if (next) next.addEventListener("click", function () { go(index + 1); });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { go(i); });
    });

    var startX = 0;
    var startY = 0;
    track.addEventListener("touchstart", function (e) {
      startX = e.changedTouches[0].screenX;
      startY = e.changedTouches[0].screenY;
    }, { passive: true });
    track.addEventListener("touchend", function (e) {
      var dx = startX - e.changedTouches[0].screenX;
      var dy = startY - e.changedTouches[0].screenY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx > 0 ? index + 1 : index - 1);
    }, { passive: true });

    carousel.tabIndex = 0;
    carousel.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1); }
    });

    update();
  });
})();
