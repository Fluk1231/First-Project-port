// Video //
document.addEventListener("DOMContentLoaded", function () {
    const youtubeContainer = document.querySelector(".youtube");
    const videos = document.querySelectorAll(".youtube iframe");
    const prevButton = document.querySelector(".button.left");
    const nextButton = document.querySelector(".button.right");

    let index = 0;
    let videoWidth = videos[0].offsetWidth + 20; // ความกว้าง + gap
    let maxIndex = calculateMaxIndex();

    function calculateMaxIndex() {
        const containerWidth = document.querySelector(".carousel-container").offsetWidth;
        videoWidth = videos[0].offsetWidth + 20; // อัปเดต videoWidth ทุกครั้ง
        return Math.max(0, videos.length - Math.floor(containerWidth / videoWidth));
    }

    function updateCarousel() {
        youtubeContainer.style.transform = `translateX(${-index * videoWidth}px)`;
    }

    nextButton.addEventListener("click", function () {
        if (index < maxIndex) {
            index++;
            updateCarousel();
        }
    });

    prevButton.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // รีเซ็ตค่าเมื่อเปลี่ยนขนาดหน้าจอ
    window.addEventListener("resize", function () {
        maxIndex = calculateMaxIndex(); // คำนวณ maxIndex ใหม่
        index = Math.min(index, maxIndex); // ป้องกัน index เกิน maxIndex
        updateCarousel();
    });
});


// igtt //
document.addEventListener("DOMContentLoaded", function () {
    const igtt = document.querySelector(".igtt");
    const videos = document.querySelectorAll(".video-container blockquote");
    const prevButton = document.querySelector(".button1.left1");
    const nextButton = document.querySelector(".button1.right1");

    let index = 0;
    let videoWidth = videos[0].offsetWidth + 20; // ความกว้าง + gap
    let maxIndex = calculateMaxIndex();

    function calculateMaxIndex() {
        const containerWidth = document.querySelector(".igtt-container").offsetWidth;
        videoWidth = videos[0].offsetWidth + 20; // อัปเดต videoWidth ทุกครั้ง
        return Math.max(0, videos.length - Math.floor(containerWidth / videoWidth));
    }

    function updateCarousel() {
        igtt.style.transform = `translateX(${-index * videoWidth}px)`;
    }

    nextButton.addEventListener("click", function () {
        if (index < maxIndex) {
            index++;
            updateCarousel();
        }
    });

    prevButton.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // รีเซ็ตค่าเมื่อเปลี่ยนขนาดหน้าจอ
    window.addEventListener("resize", function () {
        maxIndex = calculateMaxIndex(); // คำนวณ maxIndex ใหม่
        index = Math.min(index, maxIndex); // ป้องกัน index เกิน maxIndex
        updateCarousel();
    });
});






