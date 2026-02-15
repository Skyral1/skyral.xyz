document.addEventListener("DOMContentLoaded", () => {
	console.log(
		"%c Hello Skyral! ",
		"background: #38bdf8; color: #0f172a; font-weight: bold; padding: 4px; border-radius: 4px;",
	);

	const langBtn = document.getElementById("langBtn");
	const langDropdown = document.getElementById("langDropdown");

	// Toggle dropdown
	if (langBtn) {
		langBtn.addEventListener("click", (e) => {
			e.stopPropagation();
			langDropdown.classList.toggle("show");
			const expanded = langDropdown.classList.contains("show");
			langBtn.setAttribute("aria-expanded", expanded);
		});

		// Fermer si clic ailleurs
		document.addEventListener("click", (e) => {
			if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
				langDropdown.classList.remove("show");
				langBtn.setAttribute("aria-expanded", "false");
			}
		});
	}

	// Gestion du clic sur une langue (redirection native via <a href>)
	const langOptions = document.querySelectorAll(".lang-option");
	langOptions.forEach((option) => {
		option.addEventListener("click", () => {
			const lang = option.getAttribute("data-lang");
			// Sauvegarder la préférence (optionnel)
			localStorage.setItem("preferred_language", lang);
		});
	});
});
