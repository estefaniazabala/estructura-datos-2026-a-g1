document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".section-tabs button");
  const panels = document.querySelectorAll(".panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.panel;
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(target)?.classList.add("active");
    });
  });

  if (tabs.length && panels.length) tabs[0].click();

  const sideLinks = document.querySelectorAll(".sidebar nav a[data-section]");
  const syncSidebar = () => {
    const activePanel = document.querySelector(".panel.active");
    const id = activePanel?.id || "doc";
    sideLinks.forEach((a) => a.classList.toggle("active", a.dataset.section === id));
  };

  sideLinks.forEach((a) => {
    a.addEventListener("click", (e) => {
      const btn = document.querySelector(`.section-tabs button[data-panel="${a.dataset.section}"]`);
      if (btn) {
        e.preventDefault();
        btn.click();
        syncSidebar();
      }
    });
  });

  tabs.forEach((tab) => tab.addEventListener("click", syncSidebar));
});