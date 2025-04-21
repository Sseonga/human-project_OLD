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

//후원하기 버튼 클릭시 리워드바로 이동(안됨 수정해야함)
('#donationBtn').click(() => {
    document.getElementById(".rewardContent").scrollIntoView({
        behavior: 'smooth'
    });
});

//링크 복사하기(얘도 안되네^^?)
const copyBtn = document.getElementById('urlBtn');

copyBtn.addEventListener('click',function(){
    const textCopy = document.getElementById('copyUrl');

    textCopy.select();
    
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    alert('복사 완료되었습니다.'+textCopy.value);
});

//상단 mainDetail 화살표 클릭 시 이동


//댓글창 하트 눌렀을 때 숫자 변동+하트 변동

//리워드 선택 후 결제창 연동

