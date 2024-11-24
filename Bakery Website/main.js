const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");
let isMenuOpen = false;


hamburger.addEventListener("click", ()=>{
    navlist.classList.toggle("navlist-active");
    isMenuOpen = navlist.classList.contains('navlist-active');
})

window.addEventListener('scroll', () => {
    if (isMenuOpen) {
        navlist.classList.remove('navlist-active');
        isMenuOpen = false;
    }
  })
