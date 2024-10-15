import { InputType, MonsterAlignment, MonsterAttribute, MonsterColor } from "./enums.js";
import { monsterList } from "./monster-list.js";
import { renderer } from "./renderer.js";
import { utilities } from "./utilities.js";

export {
	openMonsterEditorOnCard,
	closeMonsterEditorOnCard,
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
			el.value = value;
			el.setAttribute("type", "text");
		break;
		case InputType.Dropdown:
			el = utilities.generateRawDropDownFromEnum(dropDownEnum);
			el.value = value; // Could technically be bad input if something is changed at runtime :shrug:
		break;
		case InputType.Numeric:
			el = document.createElement("input");
			el.value = value;
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

// Returns true or false depending on if the form could be created.
function closeMonsterEditorOnCard(articleElement, monsterObject, saveChanges)
{
	// Type check to get auto complete
	if(!(articleElement instanceof HTMLElement))
	{
		console.warn(`${articleElement} is NOT of type HTMLElement. Aborting!`);
		return false;
	}

	articleElement.className = "monster-card";

	if(!saveChanges)
	{
		renderer.cardRenderer.replace(articleElement, monsterObject);
		return monsterObject;
	}

	const mockMonster = {};
	mockMonster.uid = monsterObject.uid;
	mockMonster.stats = {};

	const sections = articleElement.querySelectorAll("section");

	const aliasElement = sections[0].children[0].querySelector("input");
	mockMonster.alias = saveChanges ? aliasElement.value : monsterObject.alias;

	const alignmentElement = sections[0].children[1].querySelector("select");
	mockMonster.alignment = saveChanges ? alignmentElement.value : monsterObject.alignment;
	
	const colorElement = sections[0].children[2].querySelector("select");
	mockMonster.color = saveChanges ? colorElement.value : monsterObject.color;

	const attributeSpans = articleElement.querySelector("ul").children;

	for (let i = 0; i < attributeSpans.length; i++) 
	{
		const attributeElement = attributeSpans[i].querySelector("input");
		const attributeName = attributeSpans[i].querySelector("label").innerHTML;
		mockMonster.stats[attributeName] = saveChanges ? attributeElement.value : monsterObject.stats[attributeName];
	}

	// Apply to object
	const monArr = monsterList.getMonsters();
	const mon = monArr.find((monster) => monster.uid === mockMonster.uid);

	for (const key in mon) 
	{
    	mon[key] = mockMonster[key];
  	}

	renderer.cardRenderer.replace(articleElement, mockMonster);
	return mockMonster;
}