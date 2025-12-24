const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");


menuBtn.addEventListener("click", () => {
    menus.classList.add("display");
});

closeBtn.addEventListener("click", () => {
    menus.classList.remove("display");
});

//scroll sticky navbar
window.addEventListener("scroll", () => {
if (document.documentElement.scrollTop > 20){
    header.classList.add('sticky');
}else{
    header.classList.remove('sticky');
}
})

// static number
const countersEL = document.querySelectorAll(".numbers");

countersEL.forEach(counter => {
    counter.textContent = 0;
    updateCounter(counter);
});

function updateCounter(counter) {
    let currentNum = +counter.textContent;
    const dataceil = +counter.getAttribute("data-ceil");

    const increment = dataceil / 25;

    if (currentNum < dataceil) {
        counter.textContent = Math.ceil(currentNum + increment);
        setTimeout(() => updateCounter(counter), 70);
    } else {
        counter.textContent = target;
    }
}