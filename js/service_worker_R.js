if(navigator.serviceWorker){
  navigator.serviceWorker.register('./sw.js').then(function() {
    console.log("The service worker is working! Goood.");
  }) //End of Then part.
  .catch(function() {
    console.log("ooooh! the borwser does not support the serviceWorker tecno.");
  })//End of the catch part.
  ;
} //End of the if statment.
