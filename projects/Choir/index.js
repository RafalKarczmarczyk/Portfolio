
// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".note").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".note")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });


  // Detecting KeyBoars Press

  document.addEventListener("keypress", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);

  });

  function makeSound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/do.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/re.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/mi.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/fa.mp3");
        tom4.play();
        break;

      case "j":
        var crash = new Audio("sounds/sol.mp3");
        crash.play();
        break;

      case "k":
        var snare = new Audio("sounds/la.mp3");
        snare.play();
        break;

      case "l":
        var kick = new Audio("sounds/si.mp3");
        kick.play();
        break;

      default:
    }
  }

  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
  }

}
