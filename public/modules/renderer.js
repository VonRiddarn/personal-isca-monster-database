import { getFilteredMonsterArray } from "./filtered_search.js";
import { utilities } from "./utilities.js";
import { MonsterColor, MonsterAttribute } from "./enums.js";
import { monsterList } from "./monster_list.js";

export {
	renderer
}

// Find form
const addMonsterForm = document.getElementById("add-monster").querySelector("form");
// Filter form
const filteredSearchForm = document.getElementById("filtered-search").querySelector("form");

const renderer = 
{
	cardRenderer : 
	{
		renderCards(monsterArr, forceRenderAll = false) 
		{

			let monsters = forceRenderAll ? monsterArr : getFilteredMonsterArray(monsterArr);



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
				utilities.generateDropDownFromEnum(filteredSearchForm, MonsterColor, "Color", "filtered-search-color", true);
				utilities.generateNumericInputFieldsFromEnum(filteredSearchForm, MonsterAttribute, "filtered-search-attribute", true);

				// Create submit button
				utilities.generateButton(filteredSearchForm, "Search", "filtered-search-form-submit").addEventListener('click', (e) =>
				{
					e.preventDefault();
					renderer.cardRenderer.renderCards(monsterList.getMonsters(true));
					renderer.formRenderer.filters.renderForm();
				});
			},
		},
	},
};

// Initialize forms
renderer.formRenderer.addMonster.renderForm();
renderer.formRenderer.filters.renderForm();