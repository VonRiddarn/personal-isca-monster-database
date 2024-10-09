import { generateDropDownFromEnum, generateNumericInputFieldsFromEnum } from "./utilities.js";
import { MonsterColor, MonsterAttribute } from "./enums.js";

const addMonsterForm = document.getElementById("add-monster").querySelector("form");

generateDropDownFromEnum(addMonsterForm, MonsterColor, "Color", "add-monster-color");
generateNumericInputFieldsFromEnum(addMonsterForm, MonsterAttribute, "add-monster-attribute");