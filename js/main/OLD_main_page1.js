document.addEventListener('DOMContentLoaded', function() {
    // 콘솔에 디버깅 메시지 추가
    console.log('DOM이 로드되었습니다. OLD_main_menu_1.html을 가져오기 시작합니다.');
    
    fetch('../../html/main/OLD_main_menu_1.html')
        .then(response => {
            console.log('응답 상태:', response.status);
            if (!response.ok) {
                throw new Error('네트워크 응답이 올바르지 않습니다');
            }
            return response.text();
        })
        .then(data => {
            console.log('데이터를 성공적으로 받았습니다. 이제 HTML을 수정하여 헤더에 삽입합니다.');
            
            // 이미지 경로 수정 (절대 경로 → 상대 경로)
            let modifiedData = data.replace('/images/main/image-removebg-preview.png', '../../images/main/image-removebg-preview.png');
            
            // header 태그가 아닌 header 태그 내부의 내용만 추출
            let parser = new DOMParser();
            let doc = parser.parseFromString(modifiedData, 'text/html');
            let headerContent = doc.querySelector('header').innerHTML;
            
            // 헤더 내용 삽입
            document.querySelector('header').innerHTML = headerContent;
            
            // 이벤트 리스너 설정
            const mypageButton = document.querySelector('.mypage');
            const mypageDropdown = document.querySelector('.mypage-dropdown');
            
            if (mypageButton && mypageDropdown) {
                console.log('마이페이지 버튼과 드롭다운을 찾았습니다.');
                mypageButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('마이페이지 버튼 클릭됨');
                    mypageDropdown.style.display = mypageDropdown.style.display === 'block' ? 'none' : 'block';
                });
            } else {
                console.error('마이페이지 요소를 찾을 수 없습니다:', mypageButton, mypageDropdown);
            }
            
            const alarmButton = document.querySelector('.alarm');
            const alarmDropdown = document.querySelector('.alarm-dropdown');
            
            if (alarmButton && alarmDropdown) {
                console.log('알림 버튼과 드롭다운을 찾았습니다.');
                alarmButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('알림 버튼 클릭됨');
                    alarmDropdown.style.display = alarmDropdown.style.display === 'block' ? 'none' : 'block';
                });
            } else {
                console.error('알림 요소를 찾을 수 없습니다:', alarmButton, alarmDropdown);
            }
        })
        .catch(error => {
            console.error('fetch 작업에 문제가 발생했습니다:', error);
        });
}); 