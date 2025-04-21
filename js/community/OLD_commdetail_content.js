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

    // 문자열 숫자 → 정수
    function parseNumber(text) {
      return parseInt(text.replace(/,/g, ""), 10);
    }

    // 정수 → 문자열 숫자(콤마 포함)
    function formatNumber(num) {
      return num.toLocaleString("ko-KR");
    }

    // 초기 상태 세팅
    function updateVoteDisplay() {
      let baseVote = 3200;
      const voteCount = hasVoted ? baseVote + 1 : baseVote;
      voteNumElement.textContent = formatNumber(voteCount) + "명";
    }

    updateVoteDisplay(); // 페이지 로드시 반영

    voteBtn.addEventListener("click", () => {
      hasVoted = !hasVoted;

      // localStorage에 반영
      localStorage.setItem(VOTE_KEY, hasVoted.toString());

      // 숫자 갱신
      updateVoteDisplay();

      // 알림
      alert(hasVoted ? "투표했습니다." : "투표를 취소했습니다.");
    });
  });