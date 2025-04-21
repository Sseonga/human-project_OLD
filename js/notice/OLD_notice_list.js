function connectTab(tabId, clickedButton) {
    document.querySelectorAll('.tabContent').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  
    document.querySelectorAll('.tab button').forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');
}

let current = 0;
const slide = document.querySelectorAll('.slide');
const totalSlide = slide.length;
const slidePage = document.querySelector('.slidePage');

function showSlide(){
  for(let i = 0; i < slide.length; i++){
    slide[i].style.display = "none";
  }
  slide[current].style.display = "block";

  slidePage.textContent = (current + 1) + "/" + slide.length;
}

function nextSlide(){
  current++;
  if(current >= slide.length) current = 0;
  showSlide();
}

function prevSlide(){
  current--;
  if(current < 0) current = slide.length - 1;
  showSlide();
}

showSlide();