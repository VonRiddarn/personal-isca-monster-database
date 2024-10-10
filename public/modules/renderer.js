import { getFilteredMonsterArray } from "./filtered-search.js";
import { utilities } from "./utilities.js";
import { MonsterColor, MonsterAttribute, InputType, MonsterAlignment } from "./enums.js";
import { monsterList } from "./monster-list.js";

export {
	renderer
}

// Find form
const addMonsterForm = document.getElementById("add-monster").querySelector("form");
// Filter form
const filteredSearchForm = document.getElementById("filtered-search").querySelector("form");

const main = document.querySelector("main");

function generateConvertableElement(parentElement, elementType, textContent, className)
{
	const el = parentElement.appendChild(document.createElement(elementType));
	el.textContent = textContent;
	el.className = className;
}

const renderer = 
{
	cardRenderer : 
	{
		renderCards(monsterArr, forceRenderAll = false) 
		{
			let monsters = forceRenderAll ? monsterArr : getFilteredMonsterArray(monsterArr);
			main.innerHTML = "";

			for (const monster of monsters) 
			{
				// Initialize card
				const card = main.appendChild(document.createElement("article"));
				card.className = "monster-card";
				card.id = `monster-card-${monster.uid}`;

				utilities.generateButton(card, "Delete", `monster-delete-${monster.uid}`).addEventListener('click', (e) => 
				{
					e.preventDefault();
					this.renderCards(monsterList.deleteMonster(monster.uid));
					console.log(`--- MONSTER REMOVED ---`);
					console.log(monster);
					console.log("--- ---")
				});

				// Profile
				const cardProfile = card.appendChild(document.createElement("section"));

				// Profile stuff
				generateConvertableElement(cardProfile, "h3", `${monster.alias}`, `${InputType.TextField}`);
				generateConvertableElement(cardProfile, "p", `Alignment: ${monster.alignment}`, `${InputType.Dropdown} enum-MonsterAlignment`);
				generateConvertableElement(cardProfile, "p", `Color: ${monster.color}`, `${InputType.Dropdown} enum-MonsterColor`);

				// Stats
				const cardStats = card.appendChild(document.createElement("section")).appendChild(document.createElement("ul"));

				for (const stat in monster.stats) 
				{
					const statElement = cardStats.appendChild(document.createElement("li"));
					statElement.className = `${InputType.Numeric} attribute-name-${stat} attribute-value-${monster.stats[stat]}`;
					statElement.textContent = `${stat}: ${monster.stats[stat]}`;
				}

			}


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
				utilities.generateDropDownFromEnum(addMonsterForm, MonsterColor, "Color", "add-monster-color");
				utilities.generateNumericInputFieldsFromEnum(addMonsterForm, MonsterAttribute, "add-monster-attribute");

				// Create submit button
				utilities.generateButton(addMonsterForm, "Add monster", "add-monster-form-submit").addEventListener('click', (e) => 
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
				utilities.generateDropDownFromEnum(filteredSearchForm, MonsterAlignment, "Alignment", "filtered-search-alignment", true);
				utilities.generateDropDownFromEnum(filteredSearchForm, MonsterColor, "Color", "filtered-search-color", true);
				utilities.generateNumericInputFieldsFromEnum(filteredSearchForm, MonsterAttribute, "filtered-search-attribute", true);

				// Create submit button
				utilities.generateButton(filteredSearchForm, "Search", "filtered-search-form-submit").addEventListener('click', (e) =>
				{
					e.preventDefault();
					renderer.cardRenderer.renderCards(monsterList.getMonsters(true));
					//renderer.formRenderer.filters.renderForm();
				});
			},
		},
	},
};

// Initialize forms
renderer.formRenderer.addMonster.renderForm();
renderer.formRenderer.filters.renderForm();