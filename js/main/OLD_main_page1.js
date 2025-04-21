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
            
            // 로고 링크 경로 수정
            modifiedData = modifiedData.replace('href="/html/main/OLD_main_page1.html"', 'href="../../html/main/OLD_main_page1.html"');
            
            // 로그아웃 버튼 경로 수정
            modifiedData = modifiedData.replace('href="/html/main/OLD_main_page.html"', 'href="../../html/main/OLD_main_page.html"');
            
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
            
            // 배너 슬라이드 기능 추가
            initBannerSlider();
        })
        .catch(error => {
            console.error('메뉴 로딩 오류:', error);
        });
    
    // 배너 슬라이드 초기화 함수
    function initBannerSlider() {
        // 배너 슬라이드 관련 변수
        const bannerImages = document.querySelectorAll('.banner-image');
        const slideContainer = document.querySelector('.banner-slide-container');
        const dots = document.querySelectorAll('.banner-dots .dot');
        const prevButton = document.querySelector('.banner-prev');
        const nextButton = document.querySelector('.banner-next');
        let currentImageIndex = 0;
        let totalImages = bannerImages.length;
        let autoSlideInterval;
        
        // 특정 인덱스로 슬라이드 이동
        function goToSlide(index) {
            // 인덱스 범위 확인
            if (index < 0) index = totalImages - 1;
            if (index >= totalImages) index = 0;
            
            currentImageIndex = index;
            
            // 슬라이드 컨테이너 이동
            slideContainer.style.transform = `translateX(-${currentImageIndex * (100 / totalImages)}%)`;
            
            // 활성 도트 업데이트
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentImageIndex);
            });
        }
        
        // 다음 슬라이드로 이동
        function nextSlide() {
            goToSlide(currentImageIndex + 1);
        }
        
        // 이전 슬라이드로 이동
        function prevSlide() {
            goToSlide(currentImageIndex - 1);
        }
        
        // 자동 슬라이드 시작
        function startAutoSlide() {
            stopAutoSlide(); // 기존 타이머 중지
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
        
        // 자동 슬라이드 중지
        function stopAutoSlide() {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
        }
        
        // 이벤트 리스너 등록
        if (prevButton && nextButton) {
            prevButton.addEventListener('click', function() {
                prevSlide();
                // 사용자가 수동으로 조작하면 자동 슬라이드 재시작
                startAutoSlide();
            });
            
            nextButton.addEventListener('click', function() {
                nextSlide();
                // 사용자가 수동으로 조작하면 자동 슬라이드 재시작
                startAutoSlide();
            });
        }
        
        // 도트 클릭 이벤트
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                goToSlide(index);
                // 사용자가 수동으로 조작하면 자동 슬라이드 재시작
                startAutoSlide();
            });
        });
        
        // 마우스 오버 시 자동 슬라이드 중지
        const banner = document.querySelector('.banner');
        if (banner) {
            banner.addEventListener('mouseenter', stopAutoSlide);
            banner.addEventListener('mouseleave', startAutoSlide);
        }
        
        // 초기화: 첫 번째 슬라이드로 이동
        goToSlide(0);
        
        // 자동 슬라이드 시작
        startAutoSlide();
    }
}); 