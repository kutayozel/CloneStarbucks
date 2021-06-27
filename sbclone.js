var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

document.getElementById("defaultOpen").click();

window.onscroll = function(){
    myFunction()
};

function myFunction(){
    if(window.pageYOffset > sticky)
    {
        header.classList.add("sticky");
    } 
    else
    {
        header.classList.remove("sticky");
    }
}

function openTab(evt, drinkSize){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("drink");
    for (i = 0; i < tabcontent.length; i++) 
    {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabpoints");
    for (i = 0; i < tablinks.length; i++) 
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(drinkSize).style.display = "flex";
    evt.currentTarget.className += "active";
}

var modal = document.querySelector(".modalContent");

var btn = document.getElementById("modalBtn");

var mask = document.querySelector(".mask");

var closetab = document.querySelector(".close");

closetab.onclick = (() => modal.style.display = "none");

modal.style.display = "none";
btn.onclick = function() {
    modal.style.display = "flex";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == mask) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

//window.onclick = ((a) => console.log(a.target));

/*function openModal(){
    btn.onclick =modal.style.display = "flex";
}*/

var track = document.querySelector(".modallist");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel.ok.right");
const prevButton = document.querySelector(".carousel.ok.left");
const dotsNav = document.querySelector('.dots');
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;

slides[0].style.left = '0px';
slides[1].style.left = '254px';
slides[2].style.left = '508px';

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
   
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
});

dotsNav.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

    if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if(targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
})