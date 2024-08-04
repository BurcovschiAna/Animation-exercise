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
}

// Auto-transition every 4 seconds
window.setInterval(nextSlide, 4000);
window.addEventListener('resize', updateCarousel);
updateCarousel();
