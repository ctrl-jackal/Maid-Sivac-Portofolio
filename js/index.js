const navToggle = document.querySelector(".nav-toggle"); 
const navLinks = document.querySelectorAll(".nav_link");
const imgPortofolio = document.querySelectorAll(".portofolio_img");

 navToggle.addEventListener("click", () => {
     document.body.classList.toggle("nav-open");
 })

navLinks.forEach(link  => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
    
})

// imgPortofolio.forEach(x  => {
//     x.addEventListener("click", () => {
//         document.body.classList.toggle("img-open");
        
//     })
    
// })


