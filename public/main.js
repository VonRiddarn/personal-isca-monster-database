import { renderer } from "./modules/renderer.js";
import { monsterList } from "./modules/monster_list.js";

renderer.formRenderer.addMonster.renderForm();
renderer.formRenderer.filters.renderForm();

renderer.cardRenderer.renderCards(monsterList.getMonsters(true));