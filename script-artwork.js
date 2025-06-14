//artwork//
let list = document.querySelector('.artwork-container .artwork-img');
let item = document.querySelectorAll('.artwork-container .artwork-img .item');
let dots = document.querySelectorAll('.artwork-container .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems= item.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active=0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active= lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => {next.click()},3000)
function reloadSlider(){
    let checkleft = item[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let lastActiveDot = document.querySelector('.artwork-container .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()},3000);
}

dots.forEach((Li, key) => {
    Li.addEventListener('click',function(){
        active = key;
        reloadSlider();
    })
})





