imageArray = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
];
// משתנים גלובלים
let image1 = document.getElementById("mainImage");
let button1 = document.getElementById("next");
let button2 = document.getElementById("previuos");
button1.addEventListener("click", () => changePic("+"));
button2.addEventListener("click",changePic);
var index = 0;
var setIntervalObj = setInterval(changePic,2000)
image1.addEventListener("click", ()=>clearInterval(setIntervalObj))

function changePic(action){
    if (action == "+") {
        nxtImage()
    }
else{
    preImage()
}
image1.src = imageArray[index];
}

function nxtImage() {
  index++;
  if (index >= imageArray.length) {
    index = 0;
  }
}

function preImage() {
  index--;
  if (index < 0) {
    index = imageArray.length - 1;
  }

  
}
