


const h2 = document.querySelector("h2");
document.querySelector("#department-information").addEventListener("input",function() {
  h2.textContent = this.value;
  h2.style.color = this.value;
})

const fontSize = document.querySelector("#textSize");
console.log(fontSize)
fontSize.addEventListener("input", function() {
  console.log(fontSize.value)
  h2.style.fontSize = fontSize.value + "px";
})

const textRotate = document.querySelector("#inputRotate");
textRotate.addEventListener("input", function(){
  const red = document.querySelector(".red")
  red.style.transform = "rotate(" + this.value + "deg)";
})

const exam = {
  name: "John", age: 25},