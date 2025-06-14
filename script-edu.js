const slider = document.querySelector('.slider');
let currentIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll('.slider img');
    currentIndex = (currentIndex + 1) % images.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showPreviousImage() {
    const images = document.querySelectorAll('.slider img');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 3 seconds (optional)
setInterval(showNextImage, 3000);
