
const swiper = new Swiper('.swiper', {

    slidesPerview: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    
});

document.addEventListener('DOMContentLoaded', function(){

    let links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(item) { 
        item.addEventListener('click', function(e){
            e.preventDefault();
            let id = item.getAttribute('href');
            
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

    });

    document.querySelector('.header').classList.add('fade-animation');
    document.querySelector('h1').classList.add('fade-animation');


    let scrollP = document.querySelectorAll('p');
    let scrollH2 = document.querySelectorAll('h2');
    let scrollH3 = document.querySelectorAll('h3');
    let scrollimg = document.querySelectorAll('img');
    let scrollA = document.querySelectorAll('a');
    let scrollSlider = document.querySelectorAll('.slider');
    
    const scrollAnimation = function(){
        let windowCenter = (window.innerHeight / 2) + window.scrollY + 300;
        console.log(windowCenter);
        

        scrollP.forEach(function(e) { 
            let scrollOffset = e.offsetTop + e.offsetHeight / 2;
            if(windowCenter >= scrollOffset){
                e.classList.add('fade-animation');
            } else {
                e.classList.remove('fade-animation');
            }
        });

        scrollH2.forEach(function(e) { 
            let scrollOffset = e.offsetTop + e.offsetHeight / 2;
            if(windowCenter >= scrollOffset){
                e.classList.add('fade-animation');
            } else {
                e.classList.remove('fade-animation')
            }
        });

        scrollH3.forEach(function(e) { 
            let scrollOffset = e.offsetTop + e.offsetHeight / 2;
            if(windowCenter >= scrollOffset){
                e.classList.add('fade-animation');
            } else {
                e.classList.remove('fade-animation')
            }
        });

        scrollimg.forEach(function(e) { 
            let scrollOffset = e.offsetTop + e.offsetHeight / 2;
            if(windowCenter >= scrollOffset){
                e.classList.add('fade-animation');
            } else {
                e.classList.remove('fade-animation')
            }
        });

        scrollA.forEach(function(e) { 
            let scrollOffset = e.offsetTop + e.offsetHeight / 2;
            if(windowCenter >= scrollOffset){
                e.classList.add('fade-animation');
            } else {
                e.classList.remove('fade-animation')
            }
        });

        scrollSlider.forEach(function(e) { 
            let scrollOffset = e.offsetTop + e.offsetHeight / 2;
            if(windowCenter >= scrollOffset){
                e.classList.add('fade-animation');
            } else {
                e.classList.remove('fade-animation')
            }
        });
        
    }
    
    scrollAnimation();
    window.addEventListener('scroll', function(){
        scrollAnimation();
    });
});

