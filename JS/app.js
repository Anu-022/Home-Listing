

const menuBtn = document.querySelector('.mobile__menu-btn')
const showNav = document.querySelector('.mobile__nav')
const faqs = Array.from(document.querySelectorAll('.faq__accordion'))
//const faqs = document.querySelector('.faq')

// Mobile Navigation functionality
// Toggle mobile-nav
menuBtn.addEventListener('click', event => {
    showNav.classList.toggle('is-open')
} )

//Toggle mobile dropdown
const showDropdown = document.querySelector('.mobile__dropdown')
const mobileDropdown = showDropdown.querySelector('.mobile__dropdown-menu')
showDropdown.addEventListener('click', event => {
    mobileDropdown.classList.toggle('toggle__dropdown')
})


//Desktop Menu Navigation
//dropdown menu toggle
document.addEventListener('click', event => {
    const isDropdownButton = event.target.matches('[data-dropdown-button')
    if(!isDropdownButton && event.target.closest("[data-dropdown") != null) return
    
    let currentDropdown
    if (isDropdownButton){
        currentDropdown= event.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle('active')
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

// FAQ page functionality
//Toggle Faqs

//faqs.addEventListener('click', event => {
    //console.log(event.target)
    //const faqHeader = event.target.closest('.faq__accordion-header')
    //if (faqHeader) {
     //   const faq = faqHeader.parentElement
     //   faq.classList.toggle('faq__is-open')
    //}
//})

faqs.forEach(faq => {
    const faqbtn = faq.querySelector('.faq__accordion-title')
    faqbtn.addEventListener('click', event => {
            faq.classList.toggle('faq__is-open')
         
    })
})

//Home page functionality
//function to handle carousel
function   handleCarouselBtns() {
    const carousel = document.querySelector('.carousel')
    const prevBtn = carousel.querySelector('.previous-btn')
    const nextBtn = carousel.querySelector('.next-btn')
    const contents = carousel.querySelector('.carousel__contents')


   nextBtn.addEventListener('click', event => {
      let nextSlide;
      const currentSlide = contents.querySelector('.is-active')
        if(!currentSlide.nextElementSibling) {
            nextSlide = currentSlide.nextElementSibling
        } else {
            currentSlide.classList.remove("is-active")
            nextSlide = currentSlide.nextElementSibling
            nextSlide.classList.add('is-active')
        }
    })

    prevBtn.addEventListener('click', event => {
        let prevSlide;
        const currentSlide =  contents.querySelector('.is-active')
        if (!currentSlide.previousElementSibling) {
            prevSlide = currentSlide.previousElementSibling
        } else {
            currentSlide.classList.remove('is-active')
            prevSlide = currentSlide.previousElementSibling
            prevSlide.classList.add('is-active')
        }
    })
}

function handleSlideshow() {
  const carousel = document.querySelector('.carousel')
   const slider = document.querySelector('.carousel__contents')
   const slides = Array.from(document.querySelectorAll('.carousel__slide'))

    const slideCount = slides.length
    let activeSlide = 0
 
    setInterval( () => {
         
        slides[activeSlide].classList.remove('is-active')
        activeSlide++
        if (activeSlide === slideCount) {
            activeSlide = 0;
            slides[activeSlide].classList.add('is-active')
        } else {
        slides[activeSlide].classList.add('is-active')
        }
        
    }, 5000)

}

//Contact Page functionality
// Toggle mobile Branch accordion
    const branches = Array.from(document.querySelectorAll('.branch'))
    branches.forEach((branch) => {
        branch.addEventListener('click', event => {
            branches.forEach(b => {
                b.classList.remove('is-selected')
            })
        branch.classList.add('is-selected')
        } )
    })

// Toggle Desktop Branch accordion
const branchList = document.querySelector('.desktop__branch')
const branchAddress = Array.from(document.querySelectorAll('.desktop__branch-location'))
const branchBtns = Array.from(document.querySelectorAll('.branch__btn'))
branchBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        const target = btn.dataset.target
        const content = branchList.querySelector('#' + target)
        branchBtns.forEach(b => b.classList.remove('is-selected'))
        btn.classList.add('is-selected')
        branchAddress.forEach(list => list.classList.remove('is-selected'))
        content.classList.add('is-selected')
    })
})

//About Page Dynamic Counter

const counter = document.querySelectorAll('.metric-numbers')
const inc = []
function incrementCounter() {
    for(let i=0; i< counter.length; i++) {
        inc.push(1)
        if(inc[i] != counter[i].getAttribute('data-max')) {
           inc[i]++;
        }
        console.log(inc) 
        counter[i].innerHTML = inc[i]   
    }
           
}
setInterval(incrementCounter, 100)
handleSlideshow();
handleCarouselBtns();






