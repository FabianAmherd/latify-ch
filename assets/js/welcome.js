document.addEventListener('DOMContentLoaded', () => {
   anime.timeline({
      targets: '.welcome',
      easing: 'easeOutExpo',
   })

   .add({
      delay: 2200,
      translateY: '-100vh',
      duration: 1500,
      complete: function(anime) {
         document.querySelector('.welcome').remove()
      },
   })

   anime({
      targets: '.welcome_logo',
      opacity: 1,
      scale: 0.5,
      duration: 1800,
      easing: 'easeOutExpo'
   })

   
   anime({
      targets: '.welcome_logo',
      boxShadow: "20px 20px 40px #d4d4d4, -20px -20px 40px #ffffff",
      duration: 200,
      easing: 'easeOutExpo'
   })

   anime({
      targets: '.welcome>span>span',
      delay: 400,
      opacity: 1,
      duration: 2200,
      translateY: ['-100%', '0%'],
      easing: 'easeOutExpo'
   })



   anime({
      targets: '.hero-button',
      opacity: 1,
      delay: 6600,
      duration: 1500,
      easing: 'easeOutExpo'
   })

   anime({
      targets: '.intro_container>.word1',
      delay: 3000,
      translateY: [
            {
              duration: 0,
              value: '-=100%',
            },
            {
               easing: 'easeOutExpo',
               duration: 600,
               value: '+=100',
            },
            {
               easing: 'easeInExpo',
               delay: 100,
               duration: 600,
               value: '+=100',
            },
      ],
   })

   anime({
      targets: '.intro_container>.word2',
      easing: 'easeOutExpo',
      delay: 4400,
      translateY: [
            {
              duration: 0,
              value: '-=100%',
            },
            {
               easing: 'easeOutExpo',
               duration: 600,
               value: '+=100',
            },
            {
               easing: 'easeInExpo',
               delay: 100,
               duration: 600,
               value: '+=100',
            },
      ],
   })

   anime({
      targets: '.intro_container>.word3',
      easing: 'easeInExpo',
      delay: 5800,
      translateY: [
            {
              duration: 0,
              value: '-=100%',
            },
            {
               easing: 'easeOutExpo',
               duration: 600,
               value: '+=100',
            },
      ],
   })

})