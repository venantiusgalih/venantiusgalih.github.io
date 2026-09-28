(() => {
	const themeToggle = document.querySelector("#theme-toggle");
	const themeLabel = themeToggle?.querySelector(".theme-toggle-label");

	if (!themeToggle || !themeLabel) {
		return;
	}

	const themeStorageKey = "site-theme";
	const storedTheme = localStorage.getItem(themeStorageKey);
	const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	let isDark = storedTheme === "dark" || (storedTheme !== "light" && systemPrefersDark);

	const updateTheme = () => {
		document.documentElement.dataset.theme = isDark ? "dark" : "light";
		const nextMode = isDark ? "light" : "dark";

		themeToggle.setAttribute("aria-pressed", String(isDark));
		themeToggle.setAttribute("aria-label", `Switch to ${nextMode} mode`);
		themeToggle.title = `Switch to ${nextMode} mode`;
		themeLabel.textContent = `${nextMode[0].toUpperCase()}${nextMode.slice(1)} mode`;
	};

	updateTheme();
	themeToggle.addEventListener("click", () => {
		isDark = !isDark;
		localStorage.setItem(themeStorageKey, isDark ? "dark" : "light");
		updateTheme();
	});
})();
