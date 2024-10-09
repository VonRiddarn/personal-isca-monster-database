export {
	MonsterColor,
	MonsterAttribute,
	NumericFilterMethod,
};

// Color enum
const MonsterColor = Object.freeze
( 
	{
		Red: "Red",
		Green: "Green",
		Blue: "Blue",
		Purple: "Purple",
	}
);


// Attributes enum
const MonsterAttribute = Object.freeze
(
	{
		Horns: "Horns",
		Eyes: "Eyes",
		Legs: "Legs",
		Tentacles: "Tentacles",
		Tails: "Tails",
	}
);

// Filtered search enum
const NumericFilterMethod = Object.freeze
(
	{
		LessThan: "<",
		EqualTo: "=",
		GreaterThan: ">",
	}
);