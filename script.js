

var video = document.getElementById("myVideo");
var video1 = document.querySelector(".myVideo1");
var button = document.getElementById("toggleButton");
var button1 = document.getElementById("toggleButton1");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    button.style.display = "none";
    // button.textContent = "Pause Video";
  } else {
    video.pause();
    button.style.display = "inline-block";
    
    // button.textContent = "Play Video";
  }
}

function togglePlayPause1(){
  if (video1.paused) {
    video1.play();
    button1.style.display = "none";
  } else {
    video1.pause();
    button1.style.display = "inline-block";
    
  }
}


