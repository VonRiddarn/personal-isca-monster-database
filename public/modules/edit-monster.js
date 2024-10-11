import { InputType, MonsterAlignment, MonsterAttribute, MonsterColor } from "./enums.js";
import { utilities } from "./utilities.js";

export {
	openMonsterEditorOnCard,
};

let nextUniqueId = 0;

function generateInputAndReplace(elementToReplace, inputType, labelText, dropDownEnum)
{
	// TODO: Convert P-tag to label later.
	const span = document.createElement("span");
	const label = document.createElement("label");
	label.textContent = labelText;

	let el = null;
	let value = elementToReplace.textContent;
	
	if(value.includes(":"))
		value = value.split(":")[1].trim();

	switch(inputType)
	{
		case InputType.Text:
			el = document.createElement("input");
			el.setAttribute("value", value);
			el.setAttribute("type", "text");
		break;
		case InputType.Dropdown:
			el = utilities.generateRawDropDownFromEnum(dropDownEnum);
			el.setAttribute("value", value);
		break;
		case InputType.Numeric:
			el = document.createElement("input");
			el.setAttribute("value", value);
			el.setAttribute("type", "number");
		break;
	}

	const eid = `label-id-connector-${nextUniqueId}`;
	el.id = eid;
	label.setAttribute("for", eid)
	nextUniqueId++;

	span.appendChild(label);
	span.appendChild(el);

	elementToReplace.parentElement.replaceChild(span, elementToReplace);
	return span;
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

	generateInputAndReplace(aliasElement, InputType.Text, "Name:", null);
	generateInputAndReplace(alignmentElement, InputType.Dropdown, "Alignment:", MonsterAlignment);
	generateInputAndReplace(colorElement, InputType.Dropdown, "Color: ", MonsterColor);

	for (let i = 0; i < attributeElements.length; i++) 
	{
		generateInputAndReplace(attributeElements[i], InputType.Numeric, utilities.getObjectKeynameFromIndex(monsterObject.stats, i), null);
	}
}