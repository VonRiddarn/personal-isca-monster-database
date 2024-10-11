import { NumericFilterMethod } from "./enums.js";

export {
	utilities,
};

const utilities = 
{

	generateDropDownFromEnum(enumToItterate, label, idRoot = null, isFilter = false) 
	{
		// <span>
		const span = document.createElement("span");
		if(idRoot)
			span.setAttribute("id", `${idRoot}-span`);

		// <span> label
		const labelSpan = span.appendChild(document.createElement("span"));

		// <input type="checkbox">
		if(isFilter)
		{
			const colorCheckBox = labelSpan.appendChild(document.createElement("input"));
			colorCheckBox.setAttribute("type", "checkbox");
			colorCheckBox.setAttribute("id", `${idRoot}-isactive`);
		}

		// <label>
		const labelElement = labelSpan.appendChild(document.createElement("label"));
		labelElement.setAttribute("for", `${idRoot}-${isFilter ? "isactive" : "dropdown"}`);
		labelElement.innerHTML = label;

		// <select>
		span.appendChild(this.generateRawDropDownFromEnum(enumToItterate, `${idRoot}-dropdown`));

		return span;
	},

	/**
	 * @param {Element} parentElement HTML element to append the drop down menu to.
	 * @param {Object} enumToItterate Enum to extract dropdown values from.
	 * @param {String} id HTML element id of this dropdown to reference it later.
	 */
	generateRawDropDownFromEnum(enumToItterate, id = null) 
	{
		// <select>
		const select = document.createElement("select");
		if(id)
			select.setAttribute("id", id);

		// Add all enum elements
		// <option value="e"> e </>
		for (const e in enumToItterate) 
		{
			let opt = select.appendChild(document.createElement("option"));
			opt.setAttribute("value", `${enumToItterate[e]}`);
			opt.innerHTML = `${enumToItterate[e]}`;
		}

		return select;
	},
	/**
	 * 
	 * @param {Element} parentElement The element on where to apply this list of numeric inputs.
	 * @param {"Object"} enumToItterate The enum / object from where to get the keys.
	 * @param {String} idRoot The root name for the created elements. eg: filtered-search-form
	 * @param {Boolean} isFilter Adds a checkbox and numericFilterEnum to the input.
	 */
	generateNumericInputFieldsFromEnum(enumToItterate, idRoot, isFilter = false) 
	{
		const returnArr = [];
		
		for (const el in enumToItterate) 
		{
			const elementId = `${idRoot}-${el}`;

			// <span> GENERIC
			const span = document.createElement("span");
			span.setAttribute("class", `${idRoot}-span`);

			const labelSpan = span.appendChild(document.createElement("span"));

			// <input type="checkbox" />
			if (isFilter)
			{
				const checkbox = labelSpan.appendChild(document.createElement("input"));
				checkbox.setAttribute("type", "checkbox");
				checkbox.setAttribute("id", `${elementId}-isactive`);
			}

			// <label>
			const label = labelSpan.appendChild(document.createElement("label"));
			label.setAttribute("for", `${elementId}-${isFilter ? "isactive" : "count"}`);
			label.innerHTML = `${enumToItterate[el]}`;

			// <select>
			if (isFilter)
				this.generateRawDropDownFromEnum(labelSpan, NumericFilterMethod, `${elementId}-numeric-filter-dropdown`);

			// <input type="number" />
			const count = span.appendChild(document.createElement("input"));
			count.setAttribute("type", "number");
			count.setAttribute("id", `${elementId}-count`);

			returnArr.push(span);
		}

		return returnArr;
	},

	generateButton(label, id) 
	{
		const btn = document.createElement("button");
		btn.innerHTML = label;

		if(id)
			btn.setAttribute("id", id);

		return btn;
	},
}