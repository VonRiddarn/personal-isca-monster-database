import { renderer } from "./modules/renderer.js";
import { monsterList } from "./modules/monster-list.js";

renderer.cardRenderer.renderAll(monsterList.getMonsters());