
for (var n=0; n<7; n++) {
  document.querySelectorAll(".drum")[n].addEventListener("click", function() {
    var wDrumAudio = new Audio("sounds/tom-1.mp3");
    wDrumAudio.play();
  });
}

// var wDrumAudio = new Audio("tom-1.mp3");
//
// var aDrumAudio = new Audio("tom-2.mp3");
//
// var sDrumAudio = new Audio("tom-3.mp3");
//
// var dDrumAudio = new Audio("tom-4.mp3");
//
// var jDrumAudio = new Audio("crash.mp3");
//
// var kDrumAudio = new Audio("kick-bass.mp3");
//
// var lDrumAudio = new Audio("snare.mp3");
