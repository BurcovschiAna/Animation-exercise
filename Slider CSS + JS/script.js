// Declaring all variables
const prevBtnAboutNews = document.getElementById("prev-btn-about-news");
const netxBtnAboutNews = document.getElementById("next-btn-about-news");
let aboutNewsItems = [];
for (let i = 1; i <= 3; i++) {
  aboutNewsItems.push(document.getElementById(`item-${i}`));
}

let delays = [0, -6, -12];
let animation_delay = 6;

// Add event listeners to buttons
prevBtnAboutNews.addEventListener("click", prevSlideAboutNews);
netxBtnAboutNews.addEventListener("click", nextSlideAboutNews);

// Update the animation
function updateAnimationDelays() {
    for (let i = 0; i < aboutNewsItems.length; i++) {
      aboutNewsItems[i].style.animationDelay = `${delays[i]}s`;
    }
}
updateAnimationDelays();

// Navigate to the previous slide
function prevSlideAboutNews() {
    delays = delays.map(delay => delay + animation_delay); 
    updateAnimationDelays();
}

// Navigate to the next slide
function nextSlideAboutNews() {
    delays = delays.map(delay => delay - animation_delay); 
    updateAnimationDelays();
}
