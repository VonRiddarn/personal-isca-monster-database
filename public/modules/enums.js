export {
	MonsterAlignment,
	MonsterColor,
	MonsterAttribute,
	NumericFilterMethod,
	InputType,
};

// Alignment enum
const MonsterAlignment = Object.freeze
(
	{
		Docile: "Docile",
		Neutral: "Neutral",
		Agressive: "Agressive",
	}
);

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

// Input type logged as class on HTML
const InputType = Object.freeze
(
	{
		Text: "Text",
		Dropdown: "Dropdown",
		Numeric: "Numeric",
	}
);