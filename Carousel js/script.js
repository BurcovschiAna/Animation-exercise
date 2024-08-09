// All variables
const prevBtnOrder = document.getElementById('prev-btn');
const nextBtnOrder = document.getElementById('next-btn');

let items = [];
for (let i = 1; i <= 8; i++) {
  items.push(document.getElementById(`item-${i}`));
}
let currentIndex = 0;
let itemCount = items.length;


// Events for buttons
prevBtnOrder.addEventListener('click', nextSlide);
nextBtnOrder.addEventListener('click', prevSlide);

// Navigate to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % itemCount;
  updateCarousel();
}

// Navigate to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + itemCount) % itemCount;
  updateCarousel();
}
// Update Carousel
function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  const gap = 25;
  items.forEach((item, index) => {
    let offset = (index - currentIndex + itemCount) % itemCount;
    item.style.transform = `translateX(${offset * (itemWidth + gap)}px)`;
  });
  resetInterval()
}

// Auto-transition every 6 seconds
let slideInterval = window.setInterval(nextSlide, 6000);
// Reset the interval when clicked on a button
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = window.setInterval(nextSlide, 6000);   
}
window.addEventListener('resize', updateCarousel);
updateCarousel();
