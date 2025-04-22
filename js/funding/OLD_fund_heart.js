document.addEventListener('DOMContentLoaded', function () {
    const heartBtn = document.querySelector('.FD_right_heart button');
    const heartIcon = heartBtn.querySelector('i');
    const heartCountText = document.querySelector('.FD_right_heart p');
    const projectImg = document.querySelector('.FD_detail_mainImage img').getAttribute('src');
    const projectDetailURL = window.location.href;
    const projectKey = 'likedProject_' + projectImg;

    // 초기 좋아요 숫자 가져오기
    let baseCount = parseInt(heartCountText.textContent.replace(/,/g, '')) || 0;

    // 페이지 로드시 하트 상태 복원
    if (localStorage.getItem(projectKey)) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
        heartIcon.style.color = 'red';
        baseCount++; // 좋아요 상태이므로 숫자 증가
    }

    // 숫자 포맷 함수
    const formatNumber = (num) => {
        return num.toLocaleString();
    };

    heartCountText.textContent = formatNumber(baseCount);

    heartBtn.addEventListener('click', () => {
        if (localStorage.getItem(projectKey)) {
            // 좋아요 제거
            localStorage.removeItem(projectKey);
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = '';
            baseCount--;
        } else {
            // 좋아요 추가
            const projectData = {
                img: projectImg,
                url: projectDetailURL
            };
            localStorage.setItem(projectKey, JSON.stringify(projectData));
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            heartIcon.style.color = 'red';
            baseCount++;
        }

        // 숫자 업데이트
        heartCountText.textContent = formatNumber(baseCount);
    });
});
