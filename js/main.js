console.log("loaded");

// convert to objects:
// {class: "div-one", text: "Wazup!"}
const myDivs = [
	{ class: "div-one", text: "Dit is div 1" },
	{ class: "div-two", text: "Dit is div 2" },
	{ class: "div-three", text: "Dit is div 3" },
	{ class: "div-four", text: "Dit is div 4" },
	{ class: "div-five", text: "Dit is div 5" },
];

console.log(myDivs);

for (let i = 0; i < myDivs.length; i++) {
	const showDiv = myDivs[i];

	const div = document.querySelector(`.${showDiv.class}`);

	div.innerText = showDiv.text;

	console.log(div.innerText);
}
