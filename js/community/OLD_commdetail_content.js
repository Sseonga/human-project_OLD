function openPopup() {
    window.open('../report/OLD_report_popup.html','popupWindow','width=500, height=600');
}
//하트기능
document.addEventListener('DOMContentLoaded', function () {
    const heartBtn = document.querySelector('.comm_right_heart');
    if (!heartBtn) {
        console.error('하트 버튼을 찾을 수 없습니다.');
        return;
    }

    const heartIcon = heartBtn.querySelector('i');
    const heartCountEl = heartBtn.querySelector('p');
    const projectImgEl = document.querySelector('.comm_detail_mainImage img');
    const projectImg = projectImgEl ? projectImgEl.getAttribute('src') : '';
    const projectDetailURL = window.location.href;
    const projectKey = 'likedProject_' + projectImg;

    // 숫자에서 쉼표 제거 후 숫자로 변환
    const getHeartCount = () => parseInt(heartCountEl.textContent.replace(/,/g, ''), 10);

    // 숫자를 다시 쉼표 붙여서 표시
    const updateHeartDisplay = (count) => {
        heartCountEl.textContent = count.toLocaleString();
    };

    // 초기 하트 상태 복원
    if (localStorage.getItem(projectKey)) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
        heartIcon.style.color = 'red';
    }

    heartBtn.addEventListener('click', () => {
        let currentCount = getHeartCount();

        if (localStorage.getItem(projectKey)) {
            // 하트 취소
            localStorage.removeItem(projectKey);
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = '';
            updateHeartDisplay(currentCount - 1);
        } else {
            // 하트 저장
            const projectData = {
                img: projectImg,
                url: projectDetailURL
            };
            localStorage.setItem(projectKey, JSON.stringify(projectData));
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            heartIcon.style.color = 'red';
            updateHeartDisplay(currentCount + 1);
        }
    });
});
//투표기능
document.addEventListener("DOMContentLoaded", function () {
    const voteNumElement = document.querySelector(".voteNum");
    const voteBtn = document.getElementById("donationBtn");

    const VOTE_KEY = "voted_eggmon11"; // 게시물 ID 기준으로 키 관리
    const savedVote = localStorage.getItem(VOTE_KEY);
    let hasVoted = savedVote === "true";

    function parseNumber(text) {
        return parseInt(text.replace(/,/g, ""), 10);
    }

    function formatNumber(num) {
        return num.toLocaleString("ko-KR");
    }

    function updateVoteDisplay() {
        const baseVote = 3200;
        const voteCount = hasVoted ? baseVote + 1 : baseVote;
        voteNumElement.textContent = formatNumber(voteCount) + "명";

        // 버튼 텍스트도 같이 업데이트
        voteBtn.textContent = hasVoted ? "투표 취소하기" : "투표하기";
    }

    updateVoteDisplay(); // 초기 상태 적용

    voteBtn.addEventListener("click", () => {
        hasVoted = !hasVoted;
        localStorage.setItem(VOTE_KEY, hasVoted.toString());
        updateVoteDisplay();
        alert(hasVoted ? "투표했습니다." : "투표를 취소했습니다.");
    });
});
//메인 디테일 이미지 전환
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.comm_detail_mainImage img');
    const imageList = document.querySelectorAll('.comm_detail_images img');
    const changeBtn = document.querySelector('.comm_detail_button');

    let currentIndex = 0;

    changeBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imageList.length;
      mainImage.src = imageList[currentIndex].src;
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