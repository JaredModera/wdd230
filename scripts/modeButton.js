const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Dark")) {
		main.style.background = "#371f1f";
		main.style.color = "#fff";
		modeButton.textContent = "Ligth";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
		modeButton.textContent = "Dark";
	}
});
