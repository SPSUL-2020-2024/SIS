function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

document.head.insertAdjacentHTML("beforeend", `
    <style>
        .animate-bottom-to-top {
        }
    </style>
`)

window.addEventListener(
    "load",
    function () {
        async function animateBottomToTop() {
            let elements = document.querySelectorAll(".animate-bottom-to-top");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.transform = "translateY(100%)";
            }
            let delayres = await delay(500);
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.transition = elements[i].getAttribute("data-transition");
                elements[i].style.transform = "translateY(0%)";
            }
        }
        async function animateReveal() {
            let elements = document.querySelectorAll(".animate-reveal");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.transform = "scale(0)";
            }
            let delayres = await delay(500);
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.transition = elements[i].getAttribute("data-transition");
                elements[i].style.transform = "scale(1)";
            }
        }
        async function animateFadeIn() {
            let elements = document.querySelectorAll(".animate-fade-in");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.opacity = "0";
            }
            let delayres = await delay(500);
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.transition = elements[i].getAttribute("data-transition");
                elements[i].style.opacity = "1";
            }
        }
        animateBottomToTop();
        animateReveal();
        animateFadeIn();
    },
    false
);
