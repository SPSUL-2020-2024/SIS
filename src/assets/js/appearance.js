//darkmode
const options = {
	time: "0.5s", // default: '0.3s'
	mixColor: "#fff", // default: '#fff'
	backgroundColor: "#fff", // default: '#fff'
	buttonColorDark: "#100f2c", // default: '#100f2c'
	buttonColorLight: "#fff", // default: '#fff'
	saveInCookies: true, // default: true,
	label: "🌓", // default: ''
	autoMatchOsTheme: true, // default: true
};
const darkmode = new Darkmode(options);
function addDarkmodeWidget() {
	darkmode.showWidget();
}
window.addEventListener("load", addDarkmodeWidget);

//animation
function delay(delayInms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(2);
		}, delayInms);
	});
}

// document.head.insertAdjacentHTML(
// 	"beforeend",
// 	`
//     <style>
//     .animate-fade-in {
//         opacity: 0;
//     }
//     .animate-bottom-to-top {
//         transform: translateY(100%);
//     }
//     .animate-reveal {
//         transform: scale(0);
//     }
//     </style>
// `
// );
window.addEventListener("load", function () {}, false);
async function animateFadeIn(pageLoad) {
	let elements = document.querySelectorAll(".animate-fade-in");
	for (let i = 0; i < elements.length; i++) {
		if (pageLoad == true || elements[i].getAttribute("data-onlyOnPageLoad") != "true") {
			elements[i].style.opacity = "0";
		}
	}
	let delayres = await delay(500);
	for (let i = 0; i < elements.length; i++) {
		if (pageLoad == true || elements[i].getAttribute("data-onlyOnPageLoad") != "true") {
			elements[i].style.transition = "opacity " + elements[i].getAttribute("data-transition") + " ease-in";
			elements[i].style.opacity = "1";
		}
	}
	let delayres2 = await delay(500);
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.transition = "";
	}
}
async function animateFadeOut() {
	let elements = document.querySelectorAll(".animate-fade-out");
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.transition = "opacity " + elements[i].getAttribute("data-transition") + " ease-out";
		elements[i].style.opacity = "0";
	}
	let delayres2 = await delay(500);
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.transition = "";
	}
}
async function animateBottomToTop(pageLoad) {
	let elements = document.querySelectorAll(".animate-bottom-to-top");
	for (let i = 0; i < elements.length; i++) {
		if (pageLoad == true || elements[i].getAttribute("data-onlyOnPageLoad") != "true") {
			elements[i].style.transform = "translateY(100%)";
		}
	}
	let delayres = await delay(500);
	for (let i = 0; i < elements.length; i++) {
		if (pageLoad == true || elements[i].getAttribute("data-onlyOnPageLoad") != "true") {
			elements[i].style.transition = elements[i].getAttribute("data-transition");
			elements[i].style.transform = "translateY(0%)";
		}
	}
}
async function animateReveal(pageLoad) {
	let elements = document.querySelectorAll(".animate-reveal");
	for (let i = 0; i < elements.length; i++) {
		if (pageLoad == true || elements[i].getAttribute("data-onlyOnPageLoad") != "true") {
			elements[i].style.transform = "scale(0)";
		}
	}
	let delayres = await delay(500);
	for (let i = 0; i < elements.length; i++) {
		if (pageLoad == true || elements[i].getAttribute("data-onlyOnPageLoad") != "true") {
			elements[i].style.transition = elements[i].getAttribute("data-transition");
			elements[i].style.transform = "scale(1)";
		}
	}
}
function onContentLoadJs() {
	if (!darkmode.isActivated()) {
		animateFadeIn(true);
		animateBottomToTop(true);
		animateReveal(true);
	}
}

function repeatAnimations() {
	if (!darkmode.isActivated()) {
		animateFadeIn(false);
		animateBottomToTop(false);
		animateReveal(false);
	}
}
function onContentChangeJs() {
	repeatAnimations();
}
async function onUserLoginJs() {
	let delayres = await delay(50);
	onContentLoadJs();
}
function beforePageChangeJs() {
	animateFadeOut();
}
