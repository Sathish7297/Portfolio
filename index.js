// toggle button
const menuIcon=document.querySelector("#menu-icon")
const  navbar=document.querySelector(".navbar")
menuIcon.onclick=()=>{
    menuIcon.classList.toggle("fa-xmark")
    navbar.classList.toggle("active")
}






















//  scroll animation 
ScrollReveal({ 
    distance:"80px",
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,heading', { origin:"top" });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin:"bottom" });
ScrollReveal().reveal('.about-content h1,.about-img img', { origin: "left" });
ScrollReveal().reveal('.about-content p,.about-content', { origin: "right" });

// typing animation 
const typed=new Typed('.multiple-text',{
    strings:["Frontend Developer","Web Developer"],
    typeSpeed:80,
    backSpeed:50,
    backDelay:1000,
    loop:true,
})
