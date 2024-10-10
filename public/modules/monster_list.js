import { MonsterColor, MonsterAlignment } from "./enums.js";

export {
	monsterList
};

const monsterList = 
{

	getMonsters(useDummyArray = false) 
	{
		return useDummyArray ? dummyArray : liveArray;
	},

	deleteMonster(id)
	{
		dummyArray = dummyArray.filter((monster => monster.uid !== id));
		return dummyArray;
	},

	addMonster(monsterObject) 
	{
		liveArray.push(monsterObject);
	},
};

let liveArray =  [];

let dummyArray =
	[
		{
			uid: 0,
			alias: "James P. Sulivan",
			alignment: MonsterAlignment.Docile,
			color: MonsterColor.Blue,
			stats:
			{
				Eyes: 2,
				Horns: 2,
				Tails: 1,
				Tentacles: 0,
				Legs: 2
			},
		},
		{
			uid: 1,
			alias: "Mike Wazowski",
			alignment: MonsterAlignment.Neutral,
			color: MonsterColor.Green,
			stats:
			{
				Eyes: 1,
				Horns: 2,
				Tails: 0,
				Tentacles: 0,
				Legs: 2
			},
		},
		{
			uid: 2,
			alias: "Randall Boggs",
			alignment: MonsterAlignment.Agressive,
			color: MonsterColor.Purple,
			stats:
			{
				Eyes: 2,
				Horns: 0,
				Tails: 1,
				Tentacles: 3,
				Legs: 6
			},
		},
		{
			uid: 3,
			alias: "Celia Mae",
			alignment: MonsterAlignment.Docile,
			color: MonsterColor.Purple,
			stats:
			{
				Eyes: 11,
				Horns: 0,
				Tails: 0,
				Tentacles: 8,
				Legs: 8
			},
		},
		{
			uid: 4,
			alias: "Henry J. Watermoose",
			alignment: MonsterAlignment.Agressive,
			color: MonsterColor.Blue,
			stats:
			{
				Eyes: 5,
				Horns: 0,
				Tails: 0,
				Tentacles: 0,
				Legs: 8
			},
		},
		{
			uid: 5,
			alias: "Fluffy McTentacleface",
			alignment: MonsterAlignment.Neutral,
			color: MonsterColor.Purple,
			stats:
			{
				Eyes: 4,
				Horns: 3,
				Tails: 2,
				Tentacles: 12,
				Legs: 4
			},
		},
		{
			uid: 6,
			alias: "Sir Slimebottom",
			alignment: MonsterAlignment.Docile,
			color: MonsterColor.Green,
			stats:
			{
				Eyes: 1,
				Horns: 1,
				Tails: 0,
				Tentacles: 0,
				Legs: 1
			},
		},
		{
			uid: 7,
			alias: "Spikey VonTooth",
			alignment: MonsterAlignment.Agressive,
			color: MonsterColor.Red,
			stats:
			{
				Eyes: 6,
				Horns: 4,
				Tails: 1,
				Tentacles: 6,
				Legs: 4
			},
		},
		{
			uid: 8,
			alias: "Wiggles McGiggles",
			alignment: MonsterAlignment.Docile,
			color: MonsterColor.Green,
			stats:
			{
				Eyes: 3,
				Horns: 0,
				Tails: 2,
				Tentacles: 4,
				Legs: 8
			},
		},
		{
			uid: 9,
			alias: "Bobby Blobulus",
			alignment: MonsterAlignment.Neutral,
			color: MonsterColor.Blue,
			stats:
			{
				Eyes: 7,
				Horns: 2,
				Tails: 1,
				Tentacles: 3,
				Legs: 0
			},
		},
		{
			uid: 10,
			alias: "Gurglesworth the Glutton",
			alignment: MonsterAlignment.Agressive,
			color: MonsterColor.Red,
			stats:
			{
				Eyes: 1,
				Horns: 1,
				Tails: 0,
				Tentacles: 10,
				Legs: 0
			},
		},
		{
			uid: 11,
			alias: "Squishy McBounce",
			alignment: MonsterAlignment.Docile,
			color: MonsterColor.Purple,
			stats:
			{
				Eyes: 2,
				Horns: 0,
				Tails: 1,
				Tentacles: 6,
				Legs: 2
			},
		},
		{
			uid: 12,
			alias: "Captain Clawtentacle",
			alignment: MonsterAlignment.Agressive,
			color: MonsterColor.Red,
			stats:
			{
				Eyes: 8,
				Horns: 5,
				Tails: 2,
				Tentacles: 15,
				Legs: 4
			},
		},
		{
			uid: 13,
			alias: "Blinko the Eyeful",
			alignment: MonsterAlignment.Docile,
			color: MonsterColor.Blue,
			stats:
			{
				Eyes: 12,
				Horns: 0,
				Tails: 0,
				Tentacles: 4,
				Legs: 2
			},
		},
		{
			uid: 14,
			alias: "Puffy Longtail",
			alignment: MonsterAlignment.Neutral,
			color: MonsterColor.Purple,
			stats:
			{
				Eyes: 3,
				Horns: 0,
				Tails: 3,
				Tentacles: 5,
				Legs: 4
			},
		},
		{
			uid: 15,
			alias: "Scuttles McBugface",
			alignment: MonsterAlignment.Docile,
			color: MonsterColor.Green,
			stats:
			{
				Eyes: 2,
				Horns: 0,
				Tails: 1,
				Tentacles: 0,
				Legs: 8
			},
		},
		{
			uid: 16,
			alias: "Snaggletooth Joe",
			alignment: MonsterAlignment.Agressive,
			color: MonsterColor.Blue,
			stats:
			{
				Eyes: 2,
				Horns: 1,
				Tails: 0,
				Tentacles: 8,
				Legs: 6
			},
		},
		{
			uid: 17,
			alias: "Glorp the Blobulous",
			alignment: MonsterAlignment.Neutral,
			color: MonsterColor.Green,
			stats:
			{
				Eyes: 1,
				Horns: 0,
				Tails: 1,
				Tentacles: 0,
				Legs: 0
			},
		},
		{
			uid: 18,
			alias: "Nibbles McFang",
			alignment: MonsterAlignment.Agressive,
			color: MonsterColor.Red,
			stats:
			{
				Eyes: 3,
				Horns: 2,
				Tails: 1,
				Tentacles: 5,
				Legs: 4
			},
		},
		{
			uid: 19,
			alias: "Lurky Darktail",
			alignment: MonsterAlignment.Neutral,
			color: MonsterColor.Purple,
			stats:
			{
				Eyes: 4,
				Horns: 2,
				Tails: 1,
				Tentacles: 0,
				Legs: 4
			},
		},
		{
			uid: 20,
			alias: "Dr. Snufflesnort",
			alignment: MonsterAlignment.Docile,
			color: MonsterColor.Blue,
			stats:
			{
				Eyes: 9,
				Horns: 0,
				Tails: 1,
				Tentacles: 4,
				Legs: 2
			},
		}
	];