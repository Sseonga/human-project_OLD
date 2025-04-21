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