const slides = document.querySelectorAll('.presentation .slide')

activateSlide(document.querySelector('.presentation .slide:first-of-type'))

function activateSlide(slide) {
    document.querySelectorAll('.presentation .slide.current').forEach(s => s.classList.remove('current'));
    document.querySelectorAll('.presentation .slide.next').forEach(s => s.classList.remove('next'));
    document.querySelectorAll('.presentation .slide.prev').forEach(s => s.classList.remove('prev'));;
    slide.classList.add("current");
    const next = slide.nextElementSibling || document.querySelector('.presentation .slide:first-of-type');
    const prev = slide.previousElementSibling || document.querySelector('.presentation .slide:last-of-type');
    next.classList.add("next");
    prev.classList.add("prev");
}

function nextSlide() {
    const current = document.querySelector('.presentation .slide.current')
    const next = current.nextElementSibling || document.querySelector('.presentation .slide:first-of-type');
    activateSlide(next);
    // current.classList.remove('current');
    // current.classList.add('left');
    // next.classList.add("current");
}
function prevSlide() {
    const current = document.querySelector('.presentation .slide.current')
    const prev = current.previousElementSibling || document.querySelector('.presentation .slide:last-of-type');
    activateSlide(prev);
    // current.classList.remove('current');
    // current.classList.add('right');
    // prev.classList.add("current");
}

document.addEventListener('keydown', ev => {
    switch(ev.key) {
        case "ArrowRight":
            nextSlide();
            break;

        case "ArrowLeft":
            prevSlide();
            break;
    }
})