import { generateDropDownFromEnum, generateNumericInputFieldsFromEnum } from "./utilities.js";
import { MonsterColor, MonsterAttribute, NumericFilterMethod } from "./enums.js";
import { monsters } from "./monster_list.js";

export {
	applyMonsterColorToForm,
	getFilteredMonsterArray,
};

// Create <form> then create <span> and save the <span> to a variable so we can mutate it in a function later.
const filteredSearchRoot = document.querySelector("#filter-search-monster");
const filteredSearchForm = filteredSearchRoot.querySelector("form");
filteredSearchForm.innerHTML = "";

// Add form elements to span through functions
applyMonsterColorToForm(filteredSearchForm);
generateNumericInputFieldsFromEnum(filteredSearchForm, MonsterAttribute, "filtered-search-monster-attribute", true);

// Create search <button> (filtered seach form submitter)
const filteredSearchButton = filteredSearchForm.appendChild(document.createElement("button"));
filteredSearchButton.setAttribute("id", "filtered-search-monster-form-submit");
filteredSearchButton.innerHTML = "Search";

filteredSearchButton.addEventListener('click', (e) =>
{
	e.preventDefault();
	console.log(getFilteredMonsterArray(monsters));
});

/**
 * Generates and applies MonsterColor HTML elements the passed form.
 * @param {Form} form 
 */
function applyMonsterColorToForm(form)
{
	// <span>
	const span = form.appendChild(document.createElement("span"));
	span.setAttribute("id", "filtered-search-monster-color-span");
	
	// <span> label
	const labelSpan = span.appendChild(document.createElement("span"));
	
	// <input type="checkbox">
	const colorCheckBox = labelSpan.appendChild(document.createElement("input"));
	colorCheckBox.setAttribute("type", "checkbox");
	colorCheckBox.setAttribute("id", "filtered-search-monster-color-isactive");

	// <label>
	const label = labelSpan.appendChild(document.createElement("label"));
	label.setAttribute("for", "filtered-search-monster-color-isactive");
	label.innerHTML = "Color";

	// <select>
	generateDropDownFromEnum(span, MonsterColor, "filtered-search-monster-color-dropdown");
}

// TODO: 
// Change this to dynamically create the filterCriteria object from filter form
function getFilterCriteria()
{
	const fc = 
	{
		color: null,
		attributes: {},
	};
	
	if(document.getElementById("filtered-search-monster-color-isactive").checked)
		fc.color = document.getElementById("filtered-search-monster-color-dropdown").value
	
	for (const attribute in MonsterAttribute) 
	{
		let elementId = `filtered-search-monster-attribute-${attribute}`;
		// If checkbox for attribute is not active: skip
		if(!document.getElementById(`${elementId}-isactive`).checked)
			continue;
		
		fc.attributes[attribute] = 
		{
			filterMethod : document.getElementById(`${elementId}-numeric-filter-dropdown`).value,
			amount : document.getElementById(`${elementId}-count`).value,
		};
	}

	return fc;
}

/**
 * 
 * @param {Array} monstersArr The array containing all monster objects in javascript form
 * @returns monsterArr modified to only include monsters matching the current active filters on the form.
 */
function getFilteredMonsterArray(monstersArr)
{
	const filterCriteria = getFilterCriteria();
	
	return monstersArr.filter(monster => 
	{
		// If color filter exists, and we do NOT match.
		if (filterCriteria.color != null && monster.color !== filterCriteria.color)
			return false;

		// If attribute filter exists, go nest and do more checks
		if(Object.keys(filterCriteria.attributes).length > 0)
		{
			for(let [attributeKey, filterCondition] of Object.entries(filterCriteria.attributes))
			{
				// Skip if attribute does not exist on monster.
				if(monster[attributeKey] === undefined)
					continue;
				
				const value = monster[attributeKey]; // Current monster attribute count saved in value
				const { filterMethod, amount } = filterCondition;

				switch(filterMethod)
				{
					case NumericFilterMethod.LessThan:
						if(value >= amount)
							return false;
						break;

					case NumericFilterMethod.EqualTo:
						if(value != amount)
							return false;
						break;

					case NumericFilterMethod.GreaterThan:
						if(value <= amount)
							return false;
						break;

					default:
						console.error(`Invalid numeric filter method ${filterMethod} on ${monster}`);
						return false;
				}
			}
		}

		// Passed all active filters
		return true;
	});
}

/*
<form>
	<!-- COLOR -->
	<span>
		<label for="filter-search-form-color">Color</label>
		<select id="filter-search-form-color">
			<option value="Red">Red</option>
			<option value="Green">Green</option>
			<option value="Blue">Blue</option>
		</select>
	</span>

	<!-- Attributes -->
	<span style="display: flex;">
		<input type="checkbox" id="foo"/>
		<label for="foo">Bar</label>
		<select name="dropdown-numeric-filter" id="numeric-filter-bar">
			<option value="LessThan">&lt;</option>
			<option value="Equals">=</option>
			<option value="GreaterThan">&gt;</option>
		</select>
		<input type="number" />
	</span>
</form>
*/