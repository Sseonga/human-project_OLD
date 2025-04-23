// 리워드 선택
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
//   //후원하기 버튼 클릭시 리워드바로 이동
// document.addEventListener('DOMContentLoaded',function(){
//   const startScroll = document.getElementById('donationBtn');
//   const finishScroll = document.getElementById('rewardBar');

//   startScroll.addEventListener('click',function(){
//       if(finishScroll){
//           finishScroll/this.scrollIntoView({behavior: 'smooth'});
//       }
//   });
// });
//FD_mainDetial 이미지 슬라이드
document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('.FD_detail_mainImage img');
  const imageList = document.querySelectorAll('.FD_detail_images img');
  const changeBtn = document.querySelector('.FD_detail_button');

  let currentIndex = 0;

  changeBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageList.length;
    mainImage.src = imageList[currentIndex].src;
  });
});