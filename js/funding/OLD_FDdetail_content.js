document.addEventListener('DOMContentLoaded', function () {
    const heartBtn = document.querySelector('.FD_right_heart button');
    const heartIcon = heartBtn.querySelector('i');
    const projectImg = document.querySelector('.FD_detail_mainImage img').getAttribute('src');

    const projectDetailURL = window.location.href;
    const projectKey = 'likedProject_' + projectImg;

    // 페이지 로드시 하트 상태 복원
    if (localStorage.getItem(projectKey)) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
        heartIcon.style.color = 'red';
    }

    heartBtn.addEventListener('click', () => {
        if (localStorage.getItem(projectKey)) {
            // 삭제
            localStorage.removeItem(projectKey);
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = '';
        } else {
            // 저장할 데이터: 이미지와 링크
            const projectData = {
                img: projectImg,
                url: projectDetailURL
            };
            localStorage.setItem(projectKey, JSON.stringify(projectData));
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            heartIcon.style.color = 'red';
        }
    });
});

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

//후원하기 버튼 클릭시 리워드바로 이동(안됨 수정해야함)
document.addEventListener('DOMContentLoaded',function(){
    const startScroll = document.getElementById('donationBtn');
    const finishScroll = document.getElementById('rewardBar');

    startScroll.addEventListener('click',function(){
        if(finishScroll){
            finishScroll/this.scrollIntoView({behavior: 'smooth'});
        }
    });
});

//링크 복사하기
// input 태그 선택자로 선택
window.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('urlBtn');
    const input = document.getElementById('copyValue');
  
    button.addEventListener('click', function () {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(input.value)
          .then(() => {
            alert('복사되었습니다.');
          })
          .catch(err => {
            alert('복사 실패: ' + err);
            console.error(err);
          });
      } else {
        alert('클립보드 API를 사용할 수 없습니다. HTTPS 환경에서 실행해주세요.');
      }
    });
  });
//상단 mainDetail 화살표 클릭 시 이동



//리워드 선택 후 결제창 연동
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

//   결제창 연동
// document.addEventListener('DOMContentLoaded',function(){
//     const modalContainer = document.getElementById('donationModal');
//     const donationBtn = document.getElementById('donationBtn2');

//     fetch('OLD_fund_pay01.html')
//     .then(response => response.text())
//     .then(data => {
//         modalContainer.innerHTML = data;

//         const modal = document.getElementById 아 못하겠다
//     })
// })
