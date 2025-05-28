const navList = document.querySelector(".mobile-nav-list-container");
const navBtn = document.querySelector(".nav-btn-container");
const closeBtn = document.querySelector(".close-btn-container");
const navLine = document.querySelector(".header-nav-line");
const showNavLine = document.querySelector(".mobile-nav-line"); 
const secThree = document.querySelector(".sec-3");

const date = document.querySelector(".copyright-date");
date.innerHTML = new Date().getFullYear()



  navBtn.addEventListener("click", () => {
    navList.classList.add("show");       // Show nav
    navBtn.classList.add("ham-hidden");    // Hide navBtn(hamburger)
    closeBtn.classList.add("close-hidden");     // show close button
    navLine.classList.add("ham-hidden"); // Hide navLine
    showNavLine.classList.add("show-nav-line");
  });

  closeBtn.addEventListener("click", () => {
    navList.classList.remove("show");          // Hide nav
    closeBtn.classList.remove("close-hidden");     // Hide close button
    navBtn.classList.remove("ham-hidden"); // Show hamburger
    navLine.classList.remove("ham-hidden");
    showNavLine.classList.remove("show-nav-line");
  });

  // /NOTE: I GAVE THE CLOSE-BTN-CONTAINER A STYLE OF DISPLAY: NONE, THEREAFTER, I CREATED A CLASS IN CSS WITH THE NAME "CLOSE-HIDDEN" AND I GAVE IT A STYLE OF DISPLAY: BLOCK. I THEN ADDED THE CLASS BY REMOVING THE PREVIOUS STYLING OF DISPLAY:NONE.//

//   FOR THE NAV-BTN(HAMBURGER), I CREATED A CLASS OF HAM-HIDDEN IN CSS AND GAVE IT DISPLAY: NONE, SO I ADDED THE CLASS IN ORDER TO OVERRIDE THE NAV-BTN CONTAINER WHEN I CLICK ON THE BUTTON //

//SINCE I SET THE "HAM-HIDDEN" TO DISPLAY:NONE, I ALSO USED IT FOR MY NAV-LINE SUCH THAT WHEN I CLICK ON THE NAV-BTN THE NAV-LINE DISAPPEARS AND WHEN I CLICK ON THE CLOSE-BTN, IT RE-APPEARS AGAIN //

// const navBar = document.querySelector(".header");
// const topLink = document.getElementsByTagName("nav");

// const navHeight = navBar.getBoundingClientRect().height 
// console.log(navHeight);

//  window.addEventListener("scroll", function() {
//   const scrollHeight = window.pageYOffset;
//   const navHeight = navBar.getBoundingClientRect().height + 450;
//   if (scrollHeight > navHeight) {
//     navBar.classList.add("");
//   } else {
//     navBar.classList.remove("close-hidden")
//   }
//  });

//  const buyBookLink = document.querySelector('.nav-button');
//     buyBookLink.addEventListener('click', function(e) {
//       e.preventDefault(); // Prevent default anchor behavior
//       const targetId = this.getAttribute('href').substring(1); // Remove the '#' from href
//       // const targetElement = document.getElementById(targetId);
//       // if (targetElement) {
//       //   targetElement.scrollIntoView({ behavior: 'smooth' });
//       // }
//       window.scrollTo({ targetId , behavior: 'smooth' });
//     });



  const scrollButton = document.querySelector('.scroll-button');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollButton.classList.add("show-scroll-button");
    } else {
      scrollButton.classList.remove("show-scroll-button");
    }
  });

  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })