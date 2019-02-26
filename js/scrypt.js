var carousel = document.querySelectorAll('.slide');
var timePeriod = setInterval(nextSlide, 1000);
var currentSlide = 0;
function nextSlide() {
    carousel[currentSlide].className = 'hidden slide';
    if (currentSlide < 1){
        currentSlide = (currentSlide+1)%carousel.length;}
    else {
        currentSlide = 0
    }
    carousel[currentSlide].className = 'slide container';
}
