export {};

const sidebarButton = document.querySelector("#toggle-sidebar-button");
sidebarButton.textContent = "OPEN MENU";

sidebarButton.addEventListener('click', (e) => {

	const isOpen = sidebarButton.className.includes("isopen");

	sidebarButton.textContent = isOpen ? "OPEN MENU" : "CLOSE MENU"; // Inverted because we are checking what the button is WHEN pressed
	sidebarButton.className = isOpen ? "" : "isopen";

	document.querySelector("aside").style.zIndex = `${isOpen ? -1 : 1}`;

});