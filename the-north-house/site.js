/* Optional enhancements only; every page works without this file. */
document.addEventListener("DOMContentLoaded", function () {
  var y = document.querySelector("[data-year]"); if (y) y.textContent = new Date().getFullYear();
  var cur = document.querySelector('.switcher a[aria-current="page"]'); if (cur) { var ul = cur.closest("ul"); ul.scrollLeft = cur.offsetLeft - (ul.clientWidth - cur.offsetWidth) / 2; }
  var d = document.querySelector(".nav-menus");
  if (d) {
    document.addEventListener("keydown", function (ev) { if (ev.key === "Escape" && d.open) { d.open = false; d.querySelector("summary").focus(); } });
    document.addEventListener("click", function (ev) { if (d.open && !d.contains(ev.target)) d.open = false; });
  }
});
