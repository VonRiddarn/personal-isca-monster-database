export {
	openMonsterEditorOnCard,
};

// Returns true or false depending on if the form could be created.
function openMonsterEditorOnCard(articleElement, monsterObject)
{
	// Type check to get auto complete
	if(!(articleElement instanceof HTMLElement))
	{
		console.warn(`${articleElement} is NOT of type HTMLElement. Aborting!`);
		return false;
	}

	

}