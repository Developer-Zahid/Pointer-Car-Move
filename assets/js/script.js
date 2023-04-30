const actionBtn = document.querySelectorAll('.action-btn');
const topLeftBtn = document.querySelector('.action-btn--top-left');
const topRightBtn = document.querySelector('.action-btn--top-right');
const BottomLeftBtn = document.querySelector('.action-btn--bottom-left');
const BottomRightBtn = document.querySelector('.action-btn--bottom-right');
const rotateImg = document.querySelector('.rotate-img');
const movingCar = document.querySelector('.moving-car');
const movingCarImg = document.querySelector('.moving-car .car-img');
let root = document.documentElement;
topLeftBtn.addEventListener("mouseenter",()=>{
    root.style.setProperty('--rotate', -60 + "deg")
});
topRightBtn.addEventListener("mouseenter",()=>{
    root.style.setProperty('--rotate', 60 + "deg")
});
BottomLeftBtn.addEventListener("mouseenter",()=>{
    root.style.setProperty('--rotate', -120 + "deg")
});
BottomRightBtn.addEventListener("mouseenter",()=>{
    root.style.setProperty('--rotate', 120 + "deg")
});

actionBtn.forEach(actionBtn =>{
    actionBtn.addEventListener("mouseleave", ()=>{
        root.style.setProperty('--rotate', 0 + "deg");
        movingCar.classList.remove("run-animation");
        void movingCar.offsetWidth;
        movingCar.classList.add("run-animation");
        movingCar.style.animationDuration = ".3s";
        movingCar.style.animationDelay = "0s";
        movingCarImg.style.transform = "translateY(0)"
        movingCarImg.classList.remove("car-out");
    });
    actionBtn.addEventListener("click", ()=>{
        movingCarImg.classList.add("car-out");
    });
});