// THIS APPROACH ADDS A CLASS USING GOOGLE FONTS
// GIVES CORS ERROR
// let fonts = ["dela", "amatic", "cinzel", "comforter", "exo", "ibm"];

// function changeFont() {
//   setInterval(function () {
//     let element = document.getElementById("changing-letters-google");
//     let font = Math.floor(Math.random() * fonts.length);
//     let fontString = font.toString();
//     element.classList.add(fonts[fontString]);
//     console.log(fontString);
//   }, 3000);
// }
// changeFont();

// console.log(fonts);

// THIS APPROACH CHANGES THE FONT AMONG WEB SAFE FONTS
let webFonts = [
  "Poppins",
  "Tahoma",
  "Arial",
  "Verdana",
  "Helvetica",
  "Nunito Sans",
  "Trebuchet",
  "EXO",
  "Brush Script MT",
  "Georgia",
  "Garamond",
  "Times New Roman",
  "Courier New",
];

var currentFont = "Arial";

function changeWebFont() {
  let webElement = document.getElementById("word");
  webElement.style.fontFamily = webFonts[currentFont++ % webFonts.length];
}
setInterval(changeWebFont, 200);

let colors = ["#fa535b", "pink", "#72e2c6"];
var currentColor = 0;

function changeBackground() {
  let backgroundColor = document.getElementById("word");
  let colorRandom = Math.floor(Math.random() * colors.length);
  backgroundColor.style.backgroundColor = colors[colorRandom++ % colors.length];
}
setInterval(changeBackground, 300);

let weights = [200, 500, 300, 400, 600, 100, 400];
var currentWeight = 400;

function changeWeight() {
  let weight = document.getElementById("word");
  let weightRandom = Math.floor(Math.random() * weights.length);
  weight.style.fontWeight = weights[weightRandom++ % weights.length];
}
setInterval(changeWeight, 500);

let spacing = ["3px", "10px", "20px", "15px", "30px", "6px"];
var currentSpacing = 0;

function changeSpace() {
  let space = document.getElementById("word");
  let spaceRandom = Math.floor(Math.random() * spacing.length);
  space.style.letterSpacing = spacing[spaceRandom++ % spacing.length];
}
setInterval(changeSpace, 400);

let sizing = ["100px", "40px", "20px", "200px", "60px", "6px"];
var currentSize = 0;

function changeSize() {
  let size = document.getElementById("word");
  let sizeRandom = Math.floor(Math.random() * sizing.length);
  size.style.fontSize = sizing[sizeRandom++ % sizing.length];
}
setInterval(changeSize, 300);

// const setBg = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
// };
// setInterval(setBg, 200);

// const setColor = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.color = "#" + randomColor;
// };
// setInterval(setColor, 100);
