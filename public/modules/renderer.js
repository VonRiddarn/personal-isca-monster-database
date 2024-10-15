import { getFilteredMonsterArray } from "./filtered-search.js";
import { utilities } from "./utilities.js";
import { MonsterColor, MonsterAttribute, InputType, MonsterAlignment } from "./enums.js";
import { monsterList } from "./monster-list.js";
import { openMonsterEditorOnCard, closeMonsterEditorOnCard } from "./edit-monster.js";

export {
	renderer
}

// Find form
const addMonsterForm = document.getElementById("add-monster").querySelector("form");
// Filter form
const filteredSearchForm = document.getElementById("filtered-search").querySelector("form");

const main = document.querySelector("main");

let currentArray = null;

/*
Depreciated!
Reason: Overengineering.
We will instead make assumptions of our objects.
function generateConvertableElement(parentElement, elementType, textContent, className)
{
	const el = parentElement.appendChild(document.createElement(elementType));
	el.textContent = textContent;
	el.className = className;
}*/

function toggleButtonSpans(isEditing, deleteEditSpan, saveCancelSpan)
{
	if(isEditing)
	{
		deleteEditSpan.setAttribute("style", "visibility: hidden;");
		saveCancelSpan.removeAttribute("style");
		return;
	}

	deleteEditSpan.removeAttribute("style");
	saveCancelSpan.setAttribute("style", "visibility: hidden;");

}

function generateCardContent(card, monster)
{
	const deleteEditSpan = card.appendChild(document.createElement("span"));

	deleteEditSpan.appendChild(utilities.generateButton("Delete", null)).addEventListener('click', (e) =>
	{
		e.preventDefault();
		monsterList.deleteMonster(monster.uid);
		card.remove();
		console.log(`--- MONSTER REMOVED ---`);
		console.log(monster);
		console.log("--- ---")
	});
	
	deleteEditSpan.appendChild(utilities.generateButton("Edit", null)).addEventListener('click', (e) =>
	{
		e.preventDefault();
		toggleButtonSpans(true, deleteEditSpan, saveCancelSpan);
		openMonsterEditorOnCard(card, monster);
	});

	// Profile
	const cardProfile = card.appendChild(document.createElement("section"));

	// Profile stuff
	cardProfile.appendChild(document.createElement("h3")).textContent = `${monster.alias}`;
	cardProfile.appendChild(document.createElement("p")).textContent = `Alignment: ${monster.alignment}`;
	cardProfile.appendChild(document.createElement("p")).textContent = `Color: ${ monster.color }`;

	// Stats
	const cardStats = card.appendChild(document.createElement("section")).appendChild(document.createElement("ul"));

	for (const stat in monster.stats) 
	{
		const statElement = cardStats.appendChild(document.createElement("li"));
		statElement.textContent = `${stat}: ${monster.stats[stat]}`;
	}

	const saveCancelSpan = card.appendChild(document.createElement("span"));
	saveCancelSpan.setAttribute("style", "visibility: hidden;");


	saveCancelSpan.appendChild(utilities.generateButton("Save", null)).addEventListener('click', (e) =>
	{
		e.preventDefault();
		toggleButtonSpans(false, deleteEditSpan, saveCancelSpan);
		const newMonster = closeMonsterEditorOnCard(card, monster, true);
		console.log("----- MONSTER CHANGED -----")
		console.log(monster);
		console.log("-- TO --");
		console.log(newMonster);
		console.log("----- ----- -----");

	});

	saveCancelSpan.appendChild(utilities.generateButton("Cancel", null)).addEventListener('click', (e) =>
	{
		e.preventDefault();
		closeMonsterEditorOnCard(card, monster, false);
		toggleButtonSpans(false, deleteEditSpan, saveCancelSpan);
	});
}

const renderer = 
{
	cardRenderer : 
	{
		renderAll(monsterArr, forceRenderAll = false) 
		{
			let monsters = forceRenderAll ? monsterArr : getFilteredMonsterArray(monsterArr);
			main.innerHTML = "";

			for (const monster of monsters) 
			{
				// Initialize card
				const card = main.appendChild(document.createElement("article"));
				card.className = "monster-card";
				card.id = `monster-card-${monster.uid}`;

				generateCardContent(card, monster);
			}

			currentArray = monsterArr;

		},
		replace(card, newMonsterObject)
		{
			card.innerHTML = "";
			generateCardContent(card, newMonsterObject);
		},
	},

	formRenderer : 
	{

		addMonster: 
		{
			/**
			 * Can be used to clear the form.
			 */
			renderForm() 
			{
				// Clean slate
				addMonsterForm.innerHTML = "";

				// Generate inputs
				addMonsterForm.appendChild(utilities.generateDropDownFromEnum(MonsterColor, "Color", "add-monster-color"));
				for (const el of utilities.generateNumericInputFieldsFromEnum(MonsterAttribute, "add-monster-attribute")) 
				{	
					addMonsterForm.appendChild(el);
				}

				// Create submit button
				addMonsterForm.appendChild(utilities.generateButton("Add monster", "add-monster-form-submit")).addEventListener('click', (e) =>
				{
					e.preventDefault();
					console.log(`Created monster with ID: ${nextMonsterId}`);
					nextMonsterId++;
				});
			},
		},

		filters:
		{

			/**
			 * Can be used to clear the form.
			 */
			renderForm() 
			{

				// Clean slate
				filteredSearchForm.innerHTML = "";

				// Generate inputs
				filteredSearchForm.appendChild(utilities.generateDropDownFromEnum(MonsterAlignment, "Alignment", "filtered-search-alignment", true));
				filteredSearchForm.appendChild(utilities.generateDropDownFromEnum(MonsterColor, "Color", "filtered-search-color", true));

				for (const el of utilities.generateNumericInputFieldsFromEnum(MonsterAttribute, "filtered-search-attribute", true)) 
				{
					filteredSearchForm.appendChild(el);
				}

				// Create submit button
				filteredSearchForm.appendChild(utilities.generateButton("Search", "filtered-search-form-submit")).addEventListener('click', (e) =>
				{
					e.preventDefault();
					renderer.cardRenderer.renderAll(monsterList.getMonsters(true));
					//renderer.formRenderer.filters.renderForm();
				});
			},
		},
	},
};

// Initialize forms
renderer.formRenderer.addMonster.renderForm();
renderer.formRenderer.filters.renderForm();