const slides = document.querySelectorAll(".slide");
let counter = 0;
// console.log(slides);

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    }
    // counter++
    // slideImage()
}
const goPrev = () => { 
    if (counter != 0) {
        counter--;
        slideImage();
    }
    // counter--
    // slideImage()
}

function slideImage () {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}