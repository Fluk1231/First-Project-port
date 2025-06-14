// Open the popup and set the image source
function openPopup(imgSrc) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    popupImg.src = imgSrc;
    popup.classList.add('active');
}

// Close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
}
