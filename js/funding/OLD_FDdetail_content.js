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

//후원하기 버튼 클릭시 리워드바로 이동
('#donationBtn').click(() => {
    document.getElementById(".rewardContent").scrollIntoView({
        behavior: 'smooth'
    });
});