import { InputType } from "./enums.js";

export {
	openMonsterEditorOnCard,
};

function generateInputAndReplace(elementToReplace, inputType, dropDownEnum)
{
	const el = null;

	switch(inputType)
	{
		case InputType.Text:
			el = document.createAttribute("input");
			el.setAttribute("value", elementToReplace.textContent);
			el.setAttribute("type", "text");
		break;
		case InputType.Dropdown:
			el = document.createAttribute("select");

			el.setAttribute("value", elementToReplace.split(":")[1].trim());
	}

	el.setAttribute("value", h3.textContent);
	el.setAttribute("type", "text");
}

// Returns true or false depending on if the form could be created.
function openMonsterEditorOnCard(articleElement, monsterObject)
{
	// Type check to get auto complete
	if(!(articleElement instanceof HTMLElement))
	{
		console.warn(`${articleElement} is NOT of type HTMLElement. Aborting!`);
		return false;
	}

	const aliasElement = articleElement.querySelector("section h3");
	const alignmentElement = articleElement.querySelector("section p");
	const colorElement = articleElement.querySelectorAll("section p")[1];
	const attributeElements = articleElement.querySelector("ul").children;

	const aliasInputField = document.createElement("input");
	const alignmentInput = document.createAttribute("input");
	//nameInput.setAttribute("type", "text");
	//nameInput.setAttribute("value", h3.textContent);

	//h3.parentElement.replaceChild(nameInput, h3);

}