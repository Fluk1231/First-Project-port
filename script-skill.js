// document.addEventListener("DOMContentLoaded", function() {
//     const slider = document.querySelector(".skill-wrapper");
//     let isDown = false;
//     let startX;
//     let scrollLeft;

//     slider.addEventListener("mousedown", (e) => {
//         isDown = true;
//         slider.classList.add("active");
//         startX = e.pageX - slider.offsetLeft;
//         scrollLeft = slider.scrollLeft;
//     });

//     slider.addEventListener("mouseleave", () => {
//         isDown = false;
//         slider.classList.remove("active");
//     });

//     slider.addEventListener("mouseup", () => {
//         isDown = false;
//         slider.classList.remove("active");
//     });

//     slider.addEventListener("mousemove", (e) => {
//         if (!isDown) return;
//         e.preventDefault();
//         const x = e.pageX - slider.offsetLeft;
//         const walk = (x - startX) * 2; // ค่าคูณเพิ่มเพื่อให้เลื่อนเร็วขึ้น
//         slider.scrollLeft = scrollLeft - walk;
//     });
// });
