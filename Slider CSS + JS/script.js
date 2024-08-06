const prevBtnAboutNews = document.getElementById("prev-btn-about-news");
const netxBtnAboutNews = document.getElementById("next-btn-about-news");
prevBtnAboutNews.addEventListener("click", prevSlideAboutNews);
netxBtnAboutNews.addEventListener("click", nextSlideAboutNews);

let aboutNewsItems = [];
for (let i = 1; i <= 3; i++) {
  aboutNewsItems.push(document.getElementById(`item-${i}`));
}

let delays = [0, -6, -12];
let animation_delay = 6;

function updateAnimationDelays() {
    for (let i = 0; i < aboutNewsItems.length; i++) {
      aboutNewsItems[i].style.animationDelay = `${delays[i]}s`;
    }
}
updateAnimationDelays();

function prevSlideAboutNews() {
    delays = delays.map(delay => delay + animation_delay); 
    updateAnimationDelays();
}
  

function nextSlideAboutNews() {
    delays = delays.map(delay => delay - animation_delay); 
    updateAnimationDelays();
}