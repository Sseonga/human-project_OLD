function connectTab(tabId, clickedButton) {
    document.querySelectorAll('.tabContent').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  
    document.querySelectorAll('.tab button').forEach(button => button.classList.remove('active'));
    clickedButton.classList.add('active');
}

const images=['../../images/main/sample2.jpg?text=1','../../images/main/sample3.jpg?text=2','#','#','#'];

let current = 0;

function changeSlide(direction) {
    // direction: -1이면 이전으로, 1이면 다음으로
    current = current + direction;
  
    // 예외 처리: 첫 이미지 이전이면 → 마지막으로
    if (current < 0) {
      current = images.length - 1;
    }
  
    // 예외 처리: 마지막 이미지 다음이면 → 처음으로
    if (current >= images.length) {
      current = 0;
    }
  
    updateSlide();
  }
  
  function prevSlide() {
    changeSlide(-1); // -1이면 이전 슬라이드
  }
  
  function nextSlide() {
    changeSlide(1);  // 1이면 다음 슬라이드
  }