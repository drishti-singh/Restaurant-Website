$(document).ready(function(){
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["to cheers", " Best Cafe"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

const navMenu = document.getElementById('nav_menu');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');
const navLink = document.querySelectorAll('.nav_link');
const ourMenu = document.getElementById('our_menu');
const subMenu = document.getElementById('sub_menu');
const navLinks = document.getElementById('nav_links');
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');
if(ourMenu){
    ourMenu.addEventListener('click' , ()=>{
        subMenu.classList.add('show_submenu')
    })
}
navLink.forEach((item)=>{
    item.addEventListener('click',()=>{
        subMenu.classList.toggle('inactive');
    });
});
navLink.forEach((item)=>{
    item.addEventListener('click',()=>{
        subMenu.classList.remove('show_submenu')
    });
});
if(navLinks){
    navLinks.addEventListener('click' , ()=>{
        subMenu.classList.add('show_submenu')
    })
}
if(navToggle){
    navToggle.addEventListener('click' , ()=>{
        navMenu.classList.add('show_menu')
    })
}
if(navClose){
    navClose.addEventListener('click' ,()=>{
        navMenu.classList.remove('show_menu')
    })
}
navLink.forEach((item)=>{
    item.addEventListener('click',()=>{
        navMenu.classList.remove('show_menu')
    });
});
// =======================Dark theme=====================

// Dark theme
const themeButton = document.getElementById('change_theme')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


//    Scroll Section active links
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// Change Background Header 

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// Show Scroll Top 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


//Menu
const menuContent = document.getElementsByClassName('menu_content');
const menuHeader = document.querySelectorAll('.menu_header');
function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0;i< menuContent.length ; i++){
        menuContent[i].className = 'menu_content menu_close'
    }
    if(itemClass === 'menu_content menu_close'){
        this.parentNode.className = 'menu_content menu_open'
    }
}
menuHeader.forEach((el)=>{
el.addEventListener('click' , toggleSkills)
})

// about    
tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('about_active')
        })
        target.classList.add('about_active')

        tabs.forEach(tab =>{
            tab.classList.remove('about_active')
        })
        tab.classList.add('about_active')
    })
    })