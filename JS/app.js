

const menuBtn = document.querySelector('.mobile__menu-btn')
const showNav = document.querySelector('.mobile__nav')
const faqs = Array.from(document.querySelectorAll('.faq__accordion'))
//const faqs = document.querySelector('.faq')

// Toggle mobile-nav
menuBtn.addEventListener('click', event => {
    showNav.classList.toggle('is-open')
} )

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
   const slider = carousel.querySelector('.carousel__contents')
   const slides = Array.from(slider.querySelectorAll('.carousel__slide'))

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

handleSlideshow();
handleCarouselBtns();




