import { renderer } from "./modules/renderer.js";
import { monsterList } from "./modules/monster-list.js";
import "./modules/sidebar-controller.js";

renderer.cardRenderer.renderAll(monsterList.getMonsters());