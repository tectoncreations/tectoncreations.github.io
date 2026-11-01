(function () {
  var data = window.GRIP_STRIPS;
  var root = document.querySelector("[data-finder]");
  if (!data || !root) return;

  var input = root.querySelector("#laptop-search");
  var list = root.querySelector("#laptop-results");
  var pick = root.querySelector("#finder-pick");
  var status = root.querySelector("#finder-status");
  var count = root.querySelector("#finder-count");
  var active = -1;
  var matches = [];
  var selectedId = "";
  var limit = 18;

  if (count) {
    count.innerHTML = "<strong>" + data.laptops.length + "</strong> verified laptops, fit tested and validated";
  }

  function text(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function label(laptop) {
    return laptop.name + (laptop.detail ? " (" + laptop.detail + ")" : "");
  }

  function haystack(laptop) {
    return (laptop.manufacturer + " " + laptop.name + " " + laptop.detail).toLowerCase();
  }

  function search(query) {
    var tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];
    var order = {};
    data.manufacturers.forEach(function (name, index) { order[name] = index; });
    return data.laptops.filter(function (laptop) {
      var source = haystack(laptop);
      return tokens.every(function (token) { return source.indexOf(token) !== -1; });
    }).sort(function (a, b) {
      var brand = (order[a.manufacturer] || 0) - (order[b.manufacturer] || 0);
      if (brand) return brand;
      return label(a).localeCompare(label(b));
    });
  }

  function closeList() {
    list.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    active = -1;
  }

  function setActive(index) {
    var options = list.querySelectorAll("[role='option']");
    if (!options.length) return;
    active = (index + options.length) % options.length;
    options.forEach(function (option, i) {
      option.classList.toggle("is-active", i === active);
      if (i === active) option.scrollIntoView({ block: "nearest" });
    });
    input.setAttribute("aria-activedescendant", options[active].id);
  }

  function renderList() {
    var shown = matches.slice(0, limit);
    if (!shown.length) {
      list.innerHTML = "<div class=\"finder-more\">No matching laptops. Try a model name, or browse the manufacturers below.</div>";
      list.hidden = false;
      input.setAttribute("aria-expanded", "true");
      status.textContent = "No matching laptops.";
      return;
    }
    var html = "";
    var brand = "";
    var optionIndex = 0;
    shown.forEach(function (laptop) {
      if (laptop.manufacturer !== brand) {
        if (brand) html += "</div>";
        brand = laptop.manufacturer;
        html += "<div role=\"group\" aria-label=\"" + text(brand) + "\"><div class=\"finder-brand\">" + text(brand) + "</div>";
      }
      html += "<div class=\"finder-option\" role=\"option\" id=\"laptop-opt-" + optionIndex + "\" data-index=\"" + optionIndex + "\">" +
        "<span>" + text(label(laptop)) + "</span>" +
        "<span class=\"finder-option-meta\">Group " + laptop.group + " · " + text(laptop.color) + "</span></div>";
      optionIndex += 1;
    });
    html += "</div>";
    if (matches.length > shown.length) {
      html += "<div class=\"finder-more\">Showing " + shown.length + " of " + matches.length + ". Keep typing to narrow the list.</div>";
    }
    list.innerHTML = html;
    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
    status.textContent = matches.length + " matching laptops.";
    active = -1;
  }

  function showLaptop(laptop) {
    var group = data.groups[String(laptop.group)];
    var colors = group ? group.colors : [];
    var swatches = colors.map(function (color, index) {
      var chosen = color === laptop.color;
      return "<li class=\"strip" + (chosen ? " is-chosen" : "") + "\">" +
        "<span class=\"swatch swatch-" + color.toLowerCase() + "\" aria-hidden=\"true\"></span>" +
        "<span class=\"strip-name\">" + text(color) + (chosen ? " · recommended" : "") + "</span>" +
        "<span class=\"strip-rank\">" + (index === 0 ? "Thinnest" : index === colors.length - 1 ? "Thickest" : "") + "</span>" +
        "</li>";
    }).join("");
    pick.hidden = false;
    pick.innerHTML =
      "<p class=\"finder-kicker\">" + text(laptop.manufacturer) + "</p>" +
      "<h2>" + text(label(laptop)) + "</h2>" +
      "<p class=\"finder-fit\">Use <strong>Group " + laptop.group + " · " + text(laptop.color) + "</strong>. Each wing uses " + data.stripsPerWing + " strips of that color.</p>" +
      "<p class=\"finder-scale-label\">" + text(group.name) + " strips, thin to thick</p>" +
      "<ol class=\"strip-scale\">" + swatches + "</ol>" +
      "<p class=\"finder-adjust\">If the wing is too loose, try the next thicker strip in this group. If it is too tight, try the next thinner strip.</p>" +
      "<a class=\"finder-chart\" href=\"" + text(laptop.chart) + "\">View the full " + text(laptop.manufacturer) + " chart</a>";
    selectedId = laptop.manufacturer + "|" + label(laptop);
  }

  function choose(index) {
    var laptop = matches[index];
    if (!laptop) return;
    input.value = laptop.manufacturer + " " + label(laptop);
    closeList();
    showLaptop(laptop);
    status.textContent = "Showing Grip Strips for " + label(laptop) + ".";
  }

  input.addEventListener("input", function () {
    var query = input.value;
    selectedId = "";
    pick.hidden = true;
    matches = search(query);
    if (!query.trim()) {
      closeList();
      status.textContent = "";
      return;
    }
    renderList();
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (list.hidden) {
        matches = search(input.value);
        if (matches.length) renderList();
      }
      setActive(active + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive(active < 0 ? 0 : active - 1);
    } else if (event.key === "Enter" && !list.hidden && matches.length) {
      event.preventDefault();
      choose(active >= 0 ? active : 0);
    } else if (event.key === "Escape") {
      closeList();
    }
  });

  list.addEventListener("mousedown", function (event) {
    var option = event.target.closest("[role='option']");
    if (!option) return;
    event.preventDefault();
    choose(Number(option.getAttribute("data-index")));
  });

  document.addEventListener("click", function (event) {
    if (!root.contains(event.target)) closeList();
  });
})();
