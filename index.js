// Buttons
var buttons = document.querySelectorAll(".drum").length;

for (var n=0; n<buttons; n++) {
  document.querySelectorAll(".drum")[n].addEventListener("click", function() {
    var letter = this.innerHTML;
    makeSound(letter);
    clickAnimation(letter);
  });
}

// Keyboard
document.addEventListener("keydown", function(event){
  makeSound(event.key);   // .key reffers directly to the value of key pressed on keaybord (it tells us which keyboard key was pressed)
  clickAnimation(event.key);
});



function makeSound(key){

  switch (key) {
    case "w":
      var w_audio = new Audio("sounds/tom-1.mp3");
      w_audio.play();
    break;

    case "a":
      var a_audio = new Audio("sounds/tom-2.mp3");
      a_audio.play();
    break;

    case "s":
      var s_audio = new Audio("sounds/tom-3.mp3");
      s_audio.play();
    break;

    case "d":
      var d_audio = new Audio("sounds/tom-4.mp3");
      d_audio.play();
    break;

    case "j":
      var j_audio = new Audio("sounds/snare.mp3");
      j_audio.play();
    break;

    case "k":
      var k_audio = new Audio("sounds/crash.mp3");
      k_audio.play();
    break;

    case "l":
      var l_audio = new Audio("sounds/kick-bass.mp3");
      l_audio.play();
    break;

    default: console.log(key);
  }
}


function clickAnimation(currentKey){
  var clicked = document.querySelector("." + currentKey);
  clicked.classList.add("pressed");
  setTimeout(function(){clicked.classList.remove("pressed");}, 100);
}
