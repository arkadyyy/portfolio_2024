import { gsap, random,gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { projectsElement,contactElement,aboutMeElement } from "./elements";
import { stringToEl,removePrevElement } from "./utils";
import x from './img/github.png'
gsap.registerPlugin(ScrollToPlugin);

const WINDOW_WIDTH = window.screen.width;
const WINDOW_HEIGHT = window.screen.height;
const CREATE_INTERVAL = 700;
const DESTORY_INTERVAL = 650;

//navigation btns
const projects = document.querySelector('.projects');
const aboutMe = document.querySelector('.about-me');
const contact = document.querySelector('.contact');

//elements containers
const projectsContainer = document.querySelector('.project-list');
const contactContainer = document.querySelector('.contact-container');
const aboutMeContainer = document.querySelector('.about-me-container');

const header = document.querySelector('.right-section h3');
const rightSection = document.querySelector('.right-section');
const contentDisplayed = document.querySelector('.content-displayed');
const bottomBanner = document.querySelector('.bottom-banner');
const navSquare = document.querySelector('.square');

const projectBoxes = document.querySelectorAll('.project-box')

projectBoxes.forEach((projectBox) => {
  projectBox.addEventListener('click',() => {
    alert('shjaasd')
  })
})



function changeTeam() {
  var rect = navSquare.getBoundingClientRect();
  var classes = this.classList;
  this.appendChild(navSquare);
  
  gsap.set(navSquare, {x: 0, y: 0});
  
  if(classes.contains('red')){
    gsap.to(navSquare, 1, { backgroundColor: "red" });
  } else if(classes.contains('blue')){
    gsap.to(navSquare, 1, { backgroundColor: "blue" });
  }
  
  var newRect = navSquare.getBoundingClientRect();

  gsap.from(navSquare, 1, {
    x: rect.left - newRect.left,
    y: rect.top - newRect.top,
    ease: Power3.easeOut
  });
}




aboutMe.addEventListener('click',() => {



  var rect = navSquare.getBoundingClientRect();

  var rect = navSquare.getBoundingClientRect();
  aboutMe.appendChild(navSquare);

  gsap.set(navSquare, {x: 0, y: 0});
  var newRect = navSquare.getBoundingClientRect();

  gsap.from(navSquare, 1, {
    x: rect.left - newRect.left,
    y: rect.top - newRect.top,
    ease: "power3.inOut"
  });
    let tl = gsap.timeline();
    tl.to([contentDisplayed,header] , {
      right : -999,
      stagger : 0.2,
      duration : 0.7,
      ease : "power3.inOut"
    })
    .then(() => {
      gsap.to(rightSection, { duration: 0.4, scrollTo: 0});
      header.innerHTML = 'ABOUT ME';
   removePrevElement()
  
      contentDisplayed.insertAdjacentElement('afterbegin',stringToEl(aboutMeElement));
  
      
    })
    .then(() => tl.reverse())
})

projects.addEventListener('click',() => {


  var rect = navSquare.getBoundingClientRect();

  var rect = navSquare.getBoundingClientRect();
  projects.appendChild(navSquare);

  gsap.set(navSquare, {x: 0, y: 0});
  var newRect = navSquare.getBoundingClientRect();

  gsap.from(navSquare, 1, {
    x: rect.left - newRect.left,
    y: rect.top - newRect.top,
    ease: "power3.inOut"
  });
    
    let tl = gsap.timeline();
    tl.to([contentDisplayed,header] , {
      right : -999,
      stagger : 0.2,
      duration : 0.7,
      ease : "power3.inOut"
    })
    .then(() => {
      gsap.to(rightSection, { duration: 0.4, scrollTo: 0});
      header.innerHTML = 'PROJECTS';
      removePrevElement()
  
        contentDisplayed.insertAdjacentElement('afterbegin',stringToEl(projectsElement));
  
      
    })
    .then(() => tl.reverse())
})

contact.addEventListener('click',(e) => {


  var rect = navSquare.getBoundingClientRect();
  contact.appendChild(navSquare);

  gsap.set(navSquare, {x: 0, y: 0});
  var newRect = navSquare.getBoundingClientRect();

  gsap.from(navSquare, 1, {
    x: rect.left - newRect.left,
    y: rect.top - newRect.top,
    ease: "power3.inOut"
  });


  let tl = gsap.timeline();
  tl.to([contentDisplayed,header] , {
    right : -999,
    stagger : 0.2,
    duration : 0.7,
    ease : "power3.inOut",
    // scrollTo: { y: "max" } 
  })
  .then(() => {
    gsap.to(rightSection, { duration: 0.4, scrollTo: 0});
      header.innerHTML = 'CONTACT';

      removePrevElement()

      contentDisplayed.insertAdjacentElement('afterbegin',stringToEl(contactElement));

    
  })
  .then(() => tl.reverse())

  
})


function createDiv(color) {
  let div = document.createElement('div');
  
  // Add css attributes to div
    div.classList.add("test");
    div.style.top = Math.floor(Math.random() * WINDOW_WIDTH);
    div.style.left = Math.floor(Math.random() * WINDOW_HEIGHT);

    // insted of random values , choose from fixes sizes arr
    const sizes = [20,40,15,5,35,7,25,30,10,45];
    div.style.width = sizes[Math.floor(Math.random() * sizes.length)];
    div.style.height = sizes[Math.floor(Math.random() * sizes.length)];

  // set color for div
    if (color === undefined) {
        const colors = ['#434E4C', '#787D79', '#272928',];
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
    else {
    div.style.backgroundColor = color; 
    }
    document.body.appendChild(div);

  // set animation for each div created
  gsap.fromTo(div,
    //FROM
    {
    opacity : 0,
    x: `random(0, 500)`, //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
    y: `random(0,500)`,
    // ease:"steps",

  },
    //TO
  {
    x: `random(-${WINDOW_WIDTH /2 }, ${WINDOW_WIDTH / 22 }, 2)`, //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
    y: `random(0,${WINDOW_HEIGHT / 4 }, 2)`,
    // duration:Math.floor(Math.random() * 7),
    duration:20,
    opacity : 1,

    scale :Math.floor(Math.random() * 3 ),
    // repeatRefresh:true // gets a new random x and y value on each repeat
  })
  // .then(() => {
       
  //   gsap.to(div,{
  //     opacity : 0,
  //     duration :1 ,
  //     ease : "power2.out"
  // })
  // div.remove();
  //   // div.remove()
  // })
}
    

// // clear divs after some time 
//     setInterval(() => {
//         const squares = document.querySelectorAll(".test");
        
//         const length = squares.length;
//         console.log(length)
//         const square = squares[Math.floor((Math.random() * squares.length) /2) ];
    
//         gsap.to(square,{
//             opacity : 0,
//             duration : 2 ,
//             ease : "power2.out"
//         })
//         .then(() => {
//             square.remove();
//         })
    
    
//     },DESTORY_INTERVAL)

// // create div constantly    
// setInterval(() => {
//   createDiv()
// }, CREATE_INTERVAL);


/////////////////////////////////////////////


const delay = 1 // amount of times between animations running
const duration = 0.8 // duration of the animations
const boxes = document.querySelectorAll(".boxes li");

function randomFade() {
  boxes.forEach((box, index) => {
    // const colors = ['red', 'blue', 'yellow'];
    // const colors = ['#434E4C', '#787D79', '#272928'];
    const colors = ['#434E4C', '#272928','#fefefe','#000000'];
    // const colors = ['#fefefe','#fbfbfb','#f5f5f5','#fffaf1'];
    // box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    const color = colors[Math.floor(Math.random() * colors.length)];

    //pick a random number
    if (Math.random() < 0.5) {
      //some boxes fade out
      gsap.to(box, {opacity:0.15, scale:0, transformOrigin:"50% 50%"})
      // .then(() => {
      //   gsap.to(box, {
      //     opacity: 1,
      //     duration: 0.2,
      //     ease: "power1.inOut",
      //     stagger: {
      //       from: "random",
      //       each: 0.05,
      //       repeat: -1,
      //       yoyo: true
      //     }
      //   });
      // })
    } else {
      //some boxes fade in
      gsap.to(box, {ease:"sine.inOut", scale:1, transformOrigin:"50% 50%",backgroundColor : color})
      // gsap.to(box, {ease:"sine.inOut", scale:1, transformOrigin:"50% 50%"})
      // .then(() => {
      //   gsap.to(box, {
      //     opacity: 1,
      //     duration: 0.2,
      //     ease: "power1.inOut",
      //     stagger: {
      //       from: "random",
      //       each: 0.05,
      //       repeat: -1,
      //       yoyo: true
      //     }
      //   });
      // })
    }
  })
  //after the boxes animate wait for the delay amount and run this function again
  
  gsap.delayedCall(duration + delay, randomFade)

}

randomFade()

// document.addEventListener("click", () => {
//   gsap.globalTimeline.paused(!gsap.globalTimeline.paused())
// })


