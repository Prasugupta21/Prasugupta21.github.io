const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

let text= "Namaste, I am Prasu Gupta a Developer.I like making Websites";
const typingDelay = 100;
const erasingDelay = 100;
const Delay = 400; //NDelay between current and next text
let textArrayIndex = 0;
let charIndex = 0;


function type() {
  if (charIndex < text.length) {
    cursorSpan.classList.toggle("typing");

    typedTextSpan.textContent += text.charAt(charIndex);
    

    charIndex++;
 
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.toggle("typing");

  	setTimeout(erase, Delay);
  }
}

function erase() {
	if (charIndex > 0) {
    cursorSpan.classList.toggle("typing");

   
    
    typedTextSpan.textContent = text.substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.toggle("typing");

    textArrayIndex++;
    if(textArrayIndex==1) textArrayIndex=0;
    setTimeout(type, Delay);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(text.length) setTimeout(type, 100);
});

