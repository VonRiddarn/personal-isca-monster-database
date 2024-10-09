import { monsters } from "./modules/monster_list.js";
import { getFilteredMonsterArray } from "./modules/filtered_search.js";
import "./modules/add_monster.js";

console.log(getFilteredMonsterArray(monsters));