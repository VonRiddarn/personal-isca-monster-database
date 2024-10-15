import { MonsterAlignment, MonsterAttribute, MonsterColor } from "./enums.js";
import { monsterList } from "./monster-list.js";

export { monsterGenerator };

// Next monsters Unique Identifier
let nexyUid = monsterList.getMonsters().at(-1).uid || 0;

const monsterGenerator = 
{
	generateMonster()
	{
		const monster = 
		{
			alias: "Alias",
        	alignment: MonsterAlignment.Neutral,
        	color: MonsterColor.Blue,
        	stats: {},
      	};
	
		monster.alias = document.getElementById("add-monster-alias-textinput").value
		monster.color = document.getElementById("add-monster-color-dropdown").value
		monster.alignment = document.getElementById("filtered-search-alignment-dropdown").value
	
		for (const attribute in MonsterAttribute) 
		{
			let elementId = `add-monster-attribute-${attribute}-count`;
			monster.stats[attribute] = document.getElementById(`${elementId}`).value;
		}

		console.log(monster);
		return monster;
	},
};