// let tl = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//       trigger: "#one",
    
//       pin: true,   // pin the trigger element while active
//       start: "top center", // when the top of the trigger hits the top of the viewport
//       end: "+=50", // end after scrolling 500px beyond the start
//       scrub: 11, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//       snap: {
//         snapTo: "labels", // snap to the closest label in the timeline
//         duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//         delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//         ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
//       }
//     }
//   });

// // add animations and labels to the timeline
// tl.addLabel("start")
//   .from(".box p", {scale: 0.3, rotation:45, autoAlpha: 0})
//   .addLabel("color")
//   .from(".box", {backgroundColor: "#28a92b"})
//   .addLabel("spin")
//   .to(".box", {rotation: 360})
//   .addLabel("end");

  //text animation
      var textWrapper = document.querySelector('.trending');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

 anime.timeline({loop: false})
  .add({
    targets: '.trending .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 750,
    delay: (el, i) => 150 * (i+1)
  }) 
  //text animation

document.addEventListener('DOMContentLoaded', () => {
  console.log('works');

  anime.timeline({
    easing: 'easeOutExpo',
  })
  .add({
    targets: '.Emsocial-links',
       translateY:[750,  0],
direction: 6000,
 easing: 'easeInOutSine'
  })

  .add({
    targets:'.site-logo img',
      translateX: [10, 0],
       easing: 'easeInOutSine',})

    

})





//

//


var myAmination = document.getElementsByClassName(".myAmination");

window.onscroll = function () {

	if(window.scrollY >= myAmination.offsetTop) {

		startCounter();

function startCounter (){


  anime.timeline({
    easing: 'easeOutExpo',
  })
  .add({
    targets: '.Emsocial-links',
       translateY:[350,  0],
direction: 'reverse',
 easing: 'easeInOutSine'
  })

  .add({
    targets:'.site-logo img',
      translateX: [10, 0],
      

       easing: 'easeInOutSine',

    
  })
}

	} }

// aos

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

