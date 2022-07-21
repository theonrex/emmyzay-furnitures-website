
// var about = document.getElementById("about")
//       var textWrapper = document.querySelector('.ml3');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


// window.onscroll = function () {

// 	if(window.scrollY >= about.offsetTop) {

// 		startCounter();

// function startCounter (){

// anime.timeline({loop: false})
//   .add({
//     targets: '.ml3 .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 750,
//     delay: (el, i) => 150 * (i+1)
//   }) 
// }

	// } }

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

//
