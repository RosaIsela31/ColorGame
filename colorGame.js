var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (let index = 0; index < squares.length; index++) {
  //Add initial colors to squares
  squares[index].style.backgroundColor = colors[index];

  //Add click listeners to squares
  squares[index].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //Compare color to pickedColor
    if (clickedColor === pickedColor) {
      changeColors(clickedColor);
      messageDisplay.textContent = "Correct!";
    }else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

