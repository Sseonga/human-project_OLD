//리워드 선택
document.addEventListener('DOMContentLoaded', function () {
    const rewardBoxes = document.querySelectorAll('.rewardContent');
  
    rewardBoxes.forEach(box => {
      box.addEventListener('click', function (e) {
        const radio = box.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
          radio.dispatchEvent(new Event('change')); 
        }
      });
    });
  });