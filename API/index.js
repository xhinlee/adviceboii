const adviceButton =document.getElementById('adviceButton');
const adviceText =document.getElementById('adviceText');

const adviceUrl = "https://api.adviceslip.com/advice";

function fetchAdvice(){
fetch(adviceUrl) 
  .then(response => response.json())
  .then(data=>{
    const advice =data.slip.advice;
    adviceText.textContent = advice;})
.catch(error => {
    console.error(error);
    adviceText.textContent = "Error fetching advice"
});
};
fetchAdvice()
adviceButton.addEventListener("click",fetchAdvice)
  


