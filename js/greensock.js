let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".myAmination ",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      }
    }
  });


  let xl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".AminationTwo ",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      }
    }
  });

//     let xz = gsap.timeline({
//     // yes, we can add it to an entire timeline!
//     scrollTrigger: {
//       trigger: ".AminationThree ",
//       pin: true,   // pin the trigger element while active
//       start: "top top", // when the top of the trigger hits the top of the viewport
//       end: "+=200", // end after scrolling 500px beyond the start
//       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//       snap: {
//         snapTo: "labels", // snap to the closest label in the timeline
//         duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//         delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//         ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
//       }
//     }
//   });





