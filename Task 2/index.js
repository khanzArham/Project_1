// <----------------------------------------side_menu_Close>

document.addEventListener("DOMContentLoaded", function () {
    function handleCross() {
        let side_menu = document.getElementById('side_menu');
        const crosses = document.querySelectorAll('.cross');
        crosses.forEach((cross) => {
            cross.addEventListener("click", () => {
                side_menu.style.display = 'none';
                // side_menu.style.visibility = 'hidden';
                // side_menu.style.opacity = '0';
            })
        })
    }
    handleCross()
})

// <----------------------------------------side_menu_Open>

document.addEventListener("DOMContentLoaded", function () {
    function handleOpen() {
        let side_menu = document.getElementById('side_menu');
        const openes = document.querySelectorAll('.menu');
        openes.forEach((open) => {
            open.addEventListener("click", () => {
                if (side_menu.style.display = 'none') {
                    side_menu.style.display = 'flex';
                    // side_menu.style.visibility = 'visible';
                    // side_menu.style.opacity= '1';
                }
            })
        })
    }
    handleOpen()
})

// <----------------------------------------Products_Open>

document.addEventListener("DOMContentLoaded", function () {
    function productOpen() {
        let Products = document.getElementById('Products');
        const swipes = document.querySelectorAll('.product');
        swipes.forEach((swipe) => {
            swipe.addEventListener("click", () => {
                if (Products.style.translate = '1000px') {
                    Products.style.translate = '0px';
                    // side_menu.style.display = 'none'
                    // side_menu.style.visibility = 'hidden';
                    // side_menu.style.opacity = '0';
                }
            })
        })
    }
    productOpen()
})

// <----------------------------------------Products_Close>

document.addEventListener("DOMContentLoaded", function () {
    function menuClose() {
        let Products = document.getElementById('Products');
        const cross2 = document.querySelectorAll('.cross2');
        cross2.forEach((close) => {
            close.addEventListener("click", () => {
                if (Products.style.translate = '0px') {
                    Products.style.translate = '1000px';
                    side_menu.style.display = 'none'
                    // side_menu.style.visibility = 'hidden';
                    // side_menu.style.opacity = '0';
                }
            })
        })
    }
    menuClose()
})

// <----------------------------------------Products_Back>

document.addEventListener("DOMContentLoaded", function () {
    function productClose() {
        let Products = document.getElementById('Products');
        let side_menu = document.getElementById('side_menu');
        const button = document.querySelectorAll('#back');
        button.forEach((btn) => {
            btn.addEventListener("click", () => {
                if (Products.style.transform = 'translateX(0px)') {
                    Products.style.transform = 'translateX(1000px)';
                    side_menu.style.display = 'flex';
                    // side_menu.style.visibility = 'visible';
                    // side_menu.style.opacity = '1';
                    // visibilty :"visible"
                    // opacity :"0"
                }
            });
        })

    }
    productClose();
});

// <----------------------------------------Changing color of navbar>

function changeBg() {
    let navbarElements = document.getElementById('navbar');
    let logo = document.getElementById('Logo1');
    let clr = document.getElementById('clr');
    let clr1 = document.getElementById('clr1');
    let clr2 = document.getElementById('clr2');
    let clr3 = document.getElementById('clr3');
    let clr4 = document.getElementById('clr4');
    let btn2 = document.getElementById('btn2');
    let menu = document.getElementById('menu');
    let scrollValue = window.scrollY;

    if (scrollValue < 415) {
        navbar.classList.remove('bgColor');
        logo.style.filter = ('invert(0)');
        clr1.style.color = ('white');
        clr2.style.color = ('white');
        clr3.style.color = ('white');
        clr4.style.color = ('white');
        btn2.style.borderColor = ('white');
        menu.style.filter = ('invert(0)');

    } else {
        navbar.classList.add('bgColor');
        logo.style.filter = ('invert(1)');
        clr1.style.color = ('black');
        clr2.style.color = ('black');
        clr3.style.color = ('black');
        clr4.style.color = ('black');
        btn2.style.borderColor = ('#041527');
        menu.style.filter = ('invert(1)');
    }
}
window.addEventListener('scroll', changeBg);

// <----------------------------------------box slider>
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// document.querySelector('.box').addEventListener("touchstart", () => {
//     showSlides(slideIndex += n);
// })

// // Thumbnail image controls
// document.querySelector('.box').addEventListener("touchend", () => {
//     showSlides(slideIndex = n);
// })

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("box");
//     // let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     //   for (i = 0; i < dots.length; i++) {
//     //     dots[i].className = dots[i].className.replace(" active", "");
//     //   }
//     //   slides[slideIndex-1].style.display = "block";
//     //   dots[slideIndex-1].className += " active";
// }