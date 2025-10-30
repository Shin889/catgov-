<script>
document.addEventListener("DOMContentLoaded", () => {
  // Use 1024px so tablets are treated like mobile (accordion behavior)
  const TOUCH_BREAKPOINT = 1024;

  function closeAllAccordions() {
    document.querySelectorAll(".barangay-modal.open, .profile-modal.open").forEach(m => m.classList.remove("open"));
  }

  function setupHandlers() {
    document.querySelectorAll(".hover-target").forEach(target => {
      const modal = target.querySelector(".barangay-modal, .profile-modal");

      // Clone to remove old listeners
      const newTarget = target.cloneNode(true);
      target.parentNode.replaceChild(newTarget, target);
    });

    // Re-query after replacing nodes
    document.querySelectorAll(".hover-target").forEach(target => {
      const modal = target.querySelector(".barangay-modal, .profile-modal");
      if (!modal) return;

      // Hover for real desktops only
      target.addEventListener("mouseenter", () => {
        if (window.innerWidth > TOUCH_BREAKPOINT) modal.classList.add("visible-desktop");
      });
      target.addEventListener("mouseleave", () => {
        if (window.innerWidth > TOUCH_BREAKPOINT) modal.classList.remove("visible-desktop");
      });

      // Tap/Click accordion for mobile + tablet
      target.addEventListener("click", (e) => {
        if (window.innerWidth <= TOUCH_BREAKPOINT) {
          e.stopPropagation();
          const isOpen = modal.classList.contains("open");
          closeAllAccordions();
          if (!isOpen) modal.classList.add("open");
        }
      });

      // Prevent modal click from bubbling
      modal.addEventListener("click", (e) => e.stopPropagation());
    });
  }

  // Close all when clicking outside (touch devices)
  document.addEventListener("click", () => {
    if (window.innerWidth <= TOUCH_BREAKPOINT) closeAllAccordions();
  });

  // Rebuild handlers on resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.querySelectorAll(".barangay-modal, .profile-modal").forEach(m => {
        m.classList.remove("visible-desktop");
        if (window.innerWidth > TOUCH_BREAKPOINT) m.classList.remove("open");
      });
      setupHandlers();
    }, 150);
  });

  setupHandlers();
});


</script>