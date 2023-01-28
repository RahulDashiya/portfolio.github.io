// toggler style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
//theme color switcher
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            window.localStorage.setItem('stylecolor', color)
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}
window.addEventListener("load", () => {
const stylecolor = window.localStorage.getItem('stylecolor');
if (stylecolor != null) {
    const alter = document.querySelectorAll(".alternate-style");
                color = stylecolor 
        alternateStyles.forEach((style) => {
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");               
            }
            else {
                style.setAttribute("disabled", "true");
            }
        })
    }
})

// NIGHT AND DARK SWITCHER
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) { window.localStorage.setItem('mode', '1') }
    else {
        window.localStorage.setItem('mode', '2');
    }
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

const mode = window.localStorage.getItem('mode');
if (mode == '1') {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-sun");

}
if (mode == '2') {
    dayNight.querySelector("i").classList.add("fa-moon");
    document.body.classList.add('');
}