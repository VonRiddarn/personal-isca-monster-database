import { generateDropDownFromEnum, generateNumericInputFieldsFromEnum, generateButton } from "./utilities.js";
import { MonsterColor, MonsterAttribute, NumericFilterMethod } from "./enums.js";
import { monsters } from "./monster_list.js";

export {
	getFilteredMonsterArray,
};


const filteredSearchForm = document.getElementById("filtered-search").querySelector("form");

// Add form elements to span through functions
generateDropDownFromEnum(filteredSearchForm, MonsterColor, "Color", "filtered-search-color", true);
generateNumericInputFieldsFromEnum(filteredSearchForm, MonsterAttribute, "filtered-search-attribute", true);

// Create search <button> (filtered seach form submitter)
generateButton(filteredSearchForm, "Search", "filtered-search-form-submit").addEventListener('click', (e) =>
{
	e.preventDefault();
	console.log(getFilteredMonsterArray(monsters));
});


// ----- ----- ----- ----- -----
function getFilterCriteria()
{
	const fc = 
	{
		color: null,
		attributes: {},
	};
	
	if(document.getElementById("filtered-search-color-isactive").checked)
		fc.color = document.getElementById("filtered-search-color-dropdown").value
	
	for (const attribute in MonsterAttribute) 
	{
		let elementId = `filtered-search-attribute-${attribute}`;
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

// Beyond this point there is only pain.

/**
 * 
 * @param {Array} monstersArr The array containing all monster objects in javascript form
 * @returns monsterArr modified to only include monsters matching the current active filters on the form.
 */
function getFilteredMonsterArray(monstersArr)
{
	const filterCriteria = getFilterCriteria();
	
	// Filter : Goes through and makes a conditional on each element, if true, pass to reutrn array
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
				
				// Current monster attribute >count< saved in value
				const value = monster[attributeKey]; 

				// Translate filterCondition object into 2 variables for clarity
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