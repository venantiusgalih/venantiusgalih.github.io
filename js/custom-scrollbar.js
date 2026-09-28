(() => {
    const root = document.documentElement;
    const idleDelay = 1500;
    let idleTimer;

    const hideScrollbar = () => {
        window.clearTimeout(idleTimer);
        root.classList.remove("scrollbar-active");
    };

    const showScrollbar = () => {
        root.classList.add("scrollbar-active");
        window.clearTimeout(idleTimer);
        idleTimer = window.setTimeout(hideScrollbar, idleDelay);
    };

    document.addEventListener("pointermove", showScrollbar, { passive: true });
    document.addEventListener("pointerdown", showScrollbar, { passive: true });
    document.addEventListener("wheel", showScrollbar, { passive: true });
    document.addEventListener("touchmove", showScrollbar, { passive: true });
    document.addEventListener("keydown", showScrollbar);
    window.addEventListener("scroll", showScrollbar, { passive: true });
    window.addEventListener("focus", showScrollbar);
    window.addEventListener("blur", hideScrollbar);
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            hideScrollbar();
        }
    });
})();