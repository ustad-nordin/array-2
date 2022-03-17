console.log("loaded");

const myDivs = ["div-one", "div-two", "div-three", "div-four", "div-five"];

console.log(myDivs);

for (let i = 0; i < myDivs.length; i++) {
	const showDiv = myDivs[i];

	const getDiv = document.querySelector(`.${showDiv}`);

	console.log(getDiv.innerText);
}
