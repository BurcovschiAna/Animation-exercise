// Array to hold slides and dots
let slides = [];
for (let i = 1; i <= 3; i++) {
  slides.push(document.getElementById(`slide-${i}`));
}
let dots = [];
for (let i = 1; i <= 3; i++) {
  dots.push(document.getElementById(`dot-${i}`));
}

// Add event listeners to dots
for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener("click", navDots);
}

// Select previous and next buttons
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Add event listeners to buttons
prevBtn.addEventListener("click", prevSlideBtn);
nextBtn.addEventListener("click", nextSlideBtn);

// Auto-transition every 7 seconds
window.setInterval(nextSlideBtn, 7000);

// Update slide and dot classes
function updateSlide(currentSlide, targetSlide){
    currentSlide.classList.remove("active");
    targetSlide.classList.add("active"); 
}

function updateDots(currentDot, targetDot){
    currentDot.classList.remove("active-dot");
    targetDot.classList.add("active-dot");
}
// Navigate to the next slide
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

// Navigate to the previous slide
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

// Navigate using dots
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
