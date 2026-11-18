/* Dr. Raavi Deepthi portfolio interactions — vanilla JavaScript only. */
(function () {
  "use strict";

  var root = document.documentElement;
  var themeToggle = document.getElementById("theme-toggle");
  var menuToggle = document.getElementById("menu-toggle");
  var navigation = document.getElementById("primary-navigation");
  var printButton = document.getElementById("print-profile");
  var yearNode = document.getElementById("current-year");

  function updateThemeButton(theme) {
    if (!themeToggle) return;
    var nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
    themeToggle.setAttribute("title", "Switch to " + nextTheme + " theme");
  }

  // Persist the visitor's theme choice, but do not fail if browser storage is unavailable.
  if (themeToggle) {
    updateThemeButton(root.dataset.theme || "light");
    themeToggle.addEventListener("click", function () {
      var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      updateThemeButton(nextTheme);
      try {
        localStorage.setItem("deepthi-theme", nextTheme);
      } catch (error) {
        // The theme still applies for this page view when storage is restricted.
      }
    });
  }

  // Mobile navigation exposes its expanded state to assistive technology.
  function closeMenu() {
    if (!navigation || !menuToggle) return;
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
      var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });
  }

  // Publication filtering changes visibility only; all records remain indexable in source HTML.
  var filterButtons = document.querySelectorAll("[data-filter]");
  var publicationItems = document.querySelectorAll(".publication-item[data-category]");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.dataset.filter;
      filterButtons.forEach(function (candidate) {
        var selected = candidate === button;
        candidate.classList.toggle("is-active", selected);
        candidate.setAttribute("aria-pressed", String(selected));
      });
      publicationItems.forEach(function (item) {
        item.hidden = filter !== "all" && item.dataset.category !== filter;
      });
    });
  });

  // Let visitors create a personal PDF from the current portfolio without shipping a stale CV.
  if (printButton) {
    printButton.addEventListener("click", function () {
      window.print();
    });
  }

  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  // Reveal animations are progressive enhancement and respect the reduced-motion setting.
  var revealTargets = document.querySelectorAll(
    ".section-heading, .timeline-item, .postdoc-panel, .research-card, .publication-feature, .publication-item, .education-item, .recognition-card, .contact-panel"
  );
  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reducedMotion) {
    revealTargets.forEach(function (element) {
      element.classList.add("js-reveal");
    });

    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });

    revealTargets.forEach(function (element) {
      observer.observe(element);
    });
  }

  // Export is optional: xlsx.js loads SheetJS only after an explicit visitor action.
  var exportButton = document.getElementById("export-publications");
  if (exportButton) {
    exportButton.addEventListener("click", function () {
      var records = Array.from(publicationItems).map(function (item) {
        var heading = item.querySelector("h3");
        var detail = item.querySelector("p");
        var kind = item.querySelector(".publication-type");
        var year = item.querySelector(".publication-year");
        return {
          Year: year ? year.textContent.trim() : "",
          Type: kind ? kind.textContent.trim() : "",
          Title: heading ? heading.textContent.trim() : "",
          Details: detail ? detail.textContent.trim() : ""
        };
      });

      if (window.DeepthiXLSX && typeof window.DeepthiXLSX.exportRecords === "function") {
        window.DeepthiXLSX.exportRecords(records, "Dr-Raavi-Deepthi-Publications");
      } else {
        downloadCsv(records, "Dr-Raavi-Deepthi-Publications.csv");
      }
    });
  }

  // Local CSV fallback if the optional XLSX helper fails to load.
  function downloadCsv(records, filename) {
    if (!records.length) return;
    var columns = Object.keys(records[0]);
    var quote = function (value) {
      return '"' + String(value == null ? "" : value).replace(/"/g, '""') + '"';
    };
    var csv = [columns.map(quote).join(",")].concat(
      records.map(function (record) {
        return columns.map(function (column) { return quote(record[column]); }).join(",");
      })
    ).join("\r\n");

    var blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.hidden = true;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }
})();