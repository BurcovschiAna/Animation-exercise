let slides = [];
for (let i = 1; i <= 3; i++) {
  slides.push(document.getElementById(`slide-${i}`));
}
let dots = [];
for (let i = 1; i <= 3; i++) {
  dots.push(document.getElementById(`dot-${i}`));
}
for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener("click", navDots);
}

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", prevSlideBtn);
nextBtn.addEventListener("click", nextSlideBtn);

window.setInterval(nextSlideBtn, 7000);


function updateSlide(currentSlide, targetSlide){
    currentSlide.classList.remove("active");
    targetSlide.classList.add("active"); 
}

function updateDots(currentDot, targetDot){
    currentDot.classList.remove("active-dot");
    targetDot.classList.add("active-dot");
}

function nextSlideBtn(){
    const currentSlide = document.querySelector(".active");
    let nextSlide = currentSlide.nextElementSibling; 
    const currentDot = document.querySelector(".active-dot");
    let nextDot = currentDot.nextElementSibling; 
    if (!nextSlide) {
        nextSlide = slides[0];
        nextDot = dots[0];
    }
    updateSlide(currentSlide, nextSlide); 
    updateDots(currentDot, nextDot);  
};

function prevSlideBtn(){
    const currentSlide = document.querySelector(".active");
    let prevSlide = currentSlide.previousElementSibling;
    const currentDot = document.querySelector(".active-dot");
    let prevDot = currentDot.previousElementSibling;
    if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
        prevDot = dots[dots.length - 1];
    }
    updateSlide(currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
};

function navDots (e){
    const targetDot = e.target.closest("button");
    if(!dots){
        return;
    };
    const currentSlide = document.querySelector(".active");
    const currentDot = document.querySelector(".active-dot"); 
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    updateDots(currentDot, targetDot);
    updateSlide(currentSlide, targetSlide, currentDot);
}