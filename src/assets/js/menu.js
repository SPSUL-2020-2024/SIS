window.addEventListener(
    "load",
    function () {
        let menuElement = document.querySelectorAll("#menu")[0];
        let menuButtonElement = document.querySelectorAll("#menu-button")[0];

        document.addEventListener("click", function (evt) {
            targetElement = evt.target;

            do {
                if (targetElement == menuButtonElement) {
                    menuElement.style.display = "block";
                    return;
                }
                if (targetElement == menuElement) {
                    return;
                }
                targetElement = targetElement.parentNode;
            } while (targetElement);

            menuElement.style.display = null;
        });
    },
    false
);
