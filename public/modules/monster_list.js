import { MonsterAttribute, MonsterColor } from "./enums.js";

export {
	monsterList
};

const monsterList = {

	getMonsters(useDummyArray = false) {
		return useDummyArray ? dummyArray : liveArray;
	},

	addMonster(monsterObject) {
		liveArray.push(monsterObject);
	},

	liveArray: [],

	dummyArray: [
		{
			uid: 0,
			alias: "James P. Sulivan",
			color: MonsterColor.Blue,
			Eyes: 2,
			Horns: 2,
			Tails: 1,
			Tentacles: 0,
			Legs: 2
		},
		{
			uid: 1,
			alias: "Mike Wazowski",
			color: MonsterColor.Green,
			Eyes: 1,
			Horns: 2,
			Tails: 0,
			Tentacles: 0,
			Legs: 2
		},
		{
			uid: 2,
			alias: "Randall Boggs",
			color: MonsterColor.Purple,
			Eyes: 2,
			Horns: 0,
			Tails: 1,
			Tentacles: 3,
			Legs: 6
		},
		{
			uid: 3,
			alias: "Celia Mae",
			color: MonsterColor.Purple,
			Eyes: 11,
			Horns: 0,
			Tails: 0,
			Tentacles: 8,
			Legs: 8
		},
		{
			uid: 4,
			alias: "Henry J. Watermoose",
			color: MonsterColor.Blue,
			Eyes: 5,
			Horns: 0,
			Tails: 0,
			Tentacles: 0,
			Legs: 8
		},
		{
			uid: 5,
			alias: "Fluffy McTentacleface",
			color: MonsterColor.Purple,
			Eyes: 4,
			Horns: 3,
			Tails: 2,
			Tentacles: 12,
			Legs: 4
		},
		{
			uid: 6,
			alias: "Sir Slimebottom",
			color: MonsterColor.Green,
			Eyes: 1,
			Horns: 1,
			Tails: 0,
			Tentacles: 0,
			Legs: 1
		},
		{
			uid: 7,
			alias: "Spikey VonTooth",
			color: MonsterColor.Red,
			Eyes: 6,
			Horns: 4,
			Tails: 1,
			Tentacles: 6,
			Legs: 4
		},
		{
			uid: 8,
			alias: "Wiggles McGiggles",
			color: MonsterColor.Green,
			Eyes: 3,
			Horns: 0,
			Tails: 2,
			Tentacles: 4,
			Legs: 8
		},
		{
			uid: 9,
			alias: "Bobby Blobulus",
			color: MonsterColor.Blue,
			Eyes: 7,
			Horns: 2,
			Tails: 1,
			Tentacles: 3,
			Legs: 0
		},
		{
			uid: 10,
			alias: "Gurglesworth the Glutton",
			color: MonsterColor.Red,
			Eyes: 1,
			Horns: 1,
			Tails: 0,
			Tentacles: 10,
			Legs: 0
		},
		{
			uid: 11,
			alias: "Squishy McBounce",
			color: MonsterColor.Purple,
			Eyes: 2,
			Horns: 0,
			Tails: 1,
			Tentacles: 6,
			Legs: 2
		},
		{
			uid: 12,
			alias: "Captain Clawtentacle",
			color: MonsterColor.Red,
			Eyes: 8,
			Horns: 5,
			Tails: 2,
			Tentacles: 15,
			Legs: 4
		},
		{
			uid: 13,
			alias: "Blinko the Eyeful",
			color: MonsterColor.Blue,
			Eyes: 12,
			Horns: 0,
			Tails: 0,
			Tentacles: 4,
			Legs: 2
		},
		{
			uid: 14,
			alias: "Puffy Longtail",
			color: MonsterColor.Purple,
			Eyes: 3,
			Horns: 0,
			Tails: 3,
			Tentacles: 5,
			Legs: 4
		},
		{
			uid: 15,
			alias: "Scuttles McBugface",
			color: MonsterColor.Green,
			Eyes: 2,
			Horns: 0,
			Tails: 1,
			Tentacles: 0,
			Legs: 8
		},
		{
			uid: 16,
			alias: "Snaggletooth Joe",
			color: MonsterColor.Blue,
			Eyes: 2,
			Horns: 1,
			Tails: 0,
			Tentacles: 8,
			Legs: 6
		},
		{
			uid: 17,
			alias: "Glorp the Blobulous",
			color: MonsterColor.Green,
			Eyes: 1,
			Horns: 0,
			Tails: 1,
			Tentacles: 0,
			Legs: 0
		},
		{
			uid: 18,
			alias: "Nibbles McFang",
			color: MonsterColor.Red,
			Eyes: 3,
			Horns: 2,
			Tails: 1,
			Tentacles: 5,
			Legs: 4
		},
		{
			uid: 19,
			alias: "Lurky Darktail",
			color: MonsterColor.Purple,
			Eyes: 4,
			Horns: 2,
			Tails: 1,
			Tentacles: 0,
			Legs: 4
		},
		{
			uid: 20,
			alias: "Dr. Snufflesnort",
			color: MonsterColor.Blue,
			Eyes: 9,
			Horns: 0,
			Tails: 1,
			Tentacles: 4,
			Legs: 2
		},
	],
};