import { MonsterColor } from "./enums.js";

export {
	monsters
};

// getMonsters(useDummyList = false)
/* addMonster(monsterObj)
{
	monsterObj.id = nextMonsterId;
	nextMonsterId++;
	monsters.push(monsterObj);
	renderer.updateMonsterListing();
}*/


/*
	Problem:
	Should monster list really handle adding monsters to list? 
	If so, should we rename add_mosnter.js to add_monster_form.js? 
	Should we rename monster_list to monster_list_manager?
*/
const monsters =
	[
		{
			alias: "James P. Sulivan",
			color: "Blue",
			Eyes: 2,
			Horns: 2,
			Tails: 1,
			Tentacles: 0,
			Legs: 2
		},
		{
			alias: "Mike Wazowski",
			color: "Green",
			Eyes: 1,
			Horns: 2,
			Tails: 0,
			Tentacles: 0,
			Legs: 2
		},
		{
			alias: "Randall Boggs",
			color: "Purple",
			Eyes: 2,
			Horns: 0,
			Tails: 1,
			Tentacles: 3,
			Legs: 6
		},
		{
			alias: "Celia Mae",
			color: "Purple",
			Eyes: 11,
			Horns: 0,
			Tails: 0,
			Tentacles: 8,
			Legs: 8
		},
		{
			alias: "Henry J. Watermoose",
			color: "Blue",
			Eyes: 5,
			Horns: 0,
			Tails: 0,
			Tentacles: 0,
			Legs: 8
		},
		{
			alias: "Fluffy McTentacleface",
			color: "Purple",
			Eyes: 4,
			Horns: 3,
			Tails: 2,
			Tentacles: 12,
			Legs: 4
		},
		{
			alias: "Sir Slimebottom",
			color: "Green",
			Eyes: 1,
			Horns: 1,
			Tails: 0,
			Tentacles: 0,
			Legs: 1
		},
		{
			alias: "Spikey VonTooth",
			color: "Red",
			Eyes: 6,
			Horns: 4,
			Tails: 1,
			Tentacles: 6,
			Legs: 4
		},
		{
			alias: "Wiggles McGiggles",
			color: "Green",
			Eyes: 3,
			Horns: 0,
			Tails: 2,
			Tentacles: 4,
			Legs: 8
		},
		{
			alias: "Bobby Blobulus",
			color: "Blue",
			Eyes: 7,
			Horns: 2,
			Tails: 1,
			Tentacles: 3,
			Legs: 0
		},
		{
			alias: "Gurglesworth the Glutton",
			color: "Red",
			Eyes: 1,
			Horns: 1,
			Tails: 0,
			Tentacles: 10,
			Legs: 0
		},
		{
			alias: "Squishy McBounce",
			color: "Purple",
			Eyes: 2,
			Horns: 0,
			Tails: 1,
			Tentacles: 6,
			Legs: 2
		},
		{
			alias: "Captain Clawtentacle",
			color: "Red",
			Eyes: 8,
			Horns: 5,
			Tails: 2,
			Tentacles: 15,
			Legs: 4
		},
		{
			alias: "Blinko the Eyeful",
			color: "Blue",
			Eyes: 12,
			Horns: 0,
			Tails: 0,
			Tentacles: 4,
			Legs: 2
		},
		{
			alias: "Puffy Longtail",
			color: "Purple",
			Eyes: 3,
			Horns: 0,
			Tails: 3,
			Tentacles: 5,
			Legs: 4
		},
		{
			alias: "Scuttles McBugface",
			color: "Green",
			Eyes: 2,
			Horns: 0,
			Tails: 1,
			Tentacles: 0,
			Legs: 8
		},
		{
			alias: "Snaggletooth Joe",
			color: "Blue",
			Eyes: 2,
			Horns: 1,
			Tails: 0,
			Tentacles: 8,
			Legs: 6
		},
		{
			alias: "Glorp the Blobulous",
			color: "Green",
			Eyes: 1,
			Horns: 0,
			Tails: 1,
			Tentacles: 0,
			Legs: 0
		},
		{
			alias: "Nibbles McFang",
			color: "Red",
			Eyes: 3,
			Horns: 2,
			Tails: 1,
			Tentacles: 5,
			Legs: 4
		},
		{
			alias: "Lurky Darktail",
			color: "Purple",
			Eyes: 4,
			Horns: 2,
			Tails: 1,
			Tentacles: 0,
			Legs: 4
		},
		{
			alias: "Dr. Snufflesnort",
			color: "Blue",
			Eyes: 9,
			Horns: 0,
			Tails: 1,
			Tentacles: 4,
			Legs: 2
		},
	];