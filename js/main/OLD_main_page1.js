document.addEventListener('DOMContentLoaded', function() {
    fetch('../../html/main/OLD_main_menu_1.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('네트워크 응답이 올바르지 않습니다');
            }
            return response.text();
        })
        .then(data => {
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
                mypageButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    mypageDropdown.style.display = mypageDropdown.style.display === 'block' ? 'none' : 'block';
                });
            }
            
            const alarmButton = document.querySelector('.alarm');
            const alarmDropdown = document.querySelector('.alarm-dropdown');
            
            if (alarmButton && alarmDropdown) {
                alarmButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    alarmDropdown.style.display = alarmDropdown.style.display === 'block' ? 'none' : 'block';
                });
            }

            // 다른 영역 클릭 시 드롭다운 닫기
            document.addEventListener('click', function(e) {
                if (mypageButton && mypageDropdown && !mypageButton.contains(e.target) && !mypageDropdown.contains(e.target)) {
                    mypageDropdown.style.display = 'none';
                }
                if (alarmButton && alarmDropdown && !alarmButton.contains(e.target) && !alarmDropdown.contains(e.target)) {
                    alarmDropdown.style.display = 'none';
                }
            });
        })
        .catch(error => {
            console.error('메뉴 로딩 오류:', error);
        });
}); 