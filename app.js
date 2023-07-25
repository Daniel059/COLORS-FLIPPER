const colors = ["Green", "Yellow", "Red","Pink","Blue","Violet","Orange","Indigo"];
const btn = document.querySelector(".mybtn");
const color = document.querySelector(".color");
btn.addEventListener("click",function(){
    // Generate random numbers
    const randomNumber = getRandomNumber();
    
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];

});
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}