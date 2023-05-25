//toggle switcher



const switcher = document.getElementById("switcher");
const activeLabel = document.querySelector(".active-label");
const inactiveLabel = document.querySelector(".inactive-label");

switcher.addEventListener("change", function() {
  if (this.checked) {
      
    activeLabel.style.color = "#ccc";
    inactiveLabel.style.color = "#2196F3";
    // Add code to convert 
    
    
    
  } else {

    
    activeLabel.style.color = "#2196F3";
    inactiveLabel.style.color = "#ccc";
    // Add code to convert 
    
   
  }
  
  // Add code to visually show that the toggle switcher has switched
  const slider = document.querySelector(".slider");
  slider.classList.toggle("switched");
});

// header

let scrollpos = window.scrollY;
console.log(scrollpos);

const header = document.querySelector(".header");
const scrollChange = 700;
const main = document.querySelector("body");

const add_class_on_scroll = () => header.classList.add("fixed");
const remove_class_on_scroll = () => header.classList.remove("fixed");

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { 
    add_class_on_scroll();
    main.classList.add("bodyMargin");
  } else { 
    remove_class_on_scroll();
    main.classList.remove("bodyMargin"); 
  }
  
  
});