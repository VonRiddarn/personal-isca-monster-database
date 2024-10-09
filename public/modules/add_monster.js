import { generateDropDownFromEnum, generateNumericInputFieldsFromEnum, generateButton } from "./utilities.js";
import { MonsterColor, MonsterAttribute } from "./enums.js";

// Next monsters Unique Identifier
let nexyUid = 0;

// Find form
const addMonsterForm = document.getElementById("add-monster").querySelector("form");

// Generate inputs 
generateDropDownFromEnum(addMonsterForm, MonsterColor, "Color", "add-monster-color");
generateNumericInputFieldsFromEnum(addMonsterForm, MonsterAttribute, "add-monster-attribute");

// Create submit button
generateButton(addMonsterForm, "Add monster", "add-monster-form-submit").addEventListener('click', (e) =>
{
	e.preventDefault();
	console.log(`Created monster with ID: ${nextMonsterId}`);
	nextMonsterId++;
});