window.addEventListener('load', function () {
    var allElements =
    document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function (el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                    
                    // 컴포넌트가 로드된 후 이벤트 리스너 초기화
                    if (includePath.includes('OLD_main_menu_1.html')) {
                        setTimeout(initializeHeaderEvents, 100);
                    }
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});

// 헤더 컴포넌트의 이벤트 리스너 초기화 함수
function initializeHeaderEvents() {
    // 알림 드롭다운 관련 기능
    const alarmButton = document.querySelector('.alarm');
    const alarmDropdown = document.querySelector('.alarm-dropdown');

    if (alarmButton && alarmDropdown) {
        alarmButton.addEventListener('click', function(e) {
            e.preventDefault();
            alarmDropdown.style.display = alarmDropdown.style.display === 'block' ? 'none' : 'block';
        });
    }

    // 마이페이지 드롭다운 관련 기능
    const mypageButton = document.querySelector('.mypage');
    const mypageDropdown = document.querySelector('.mypage-dropdown');

    if (mypageButton && mypageDropdown) {
        mypageButton.addEventListener('click', function(e) {
            e.preventDefault();
            mypageDropdown.style.display = mypageDropdown.style.display === 'block' ? 'none' : 'block';
        });
    }

    // 드롭다운 외부 클릭 시 닫기
    document.addEventListener('click', function(e) {
        if (mypageButton && mypageDropdown && !mypageButton.contains(e.target) && !mypageDropdown.contains(e.target)) {
            mypageDropdown.style.display = 'none';
        }
        if (alarmButton && alarmDropdown && !alarmButton.contains(e.target) && !alarmDropdown.contains(e.target)) {
            alarmDropdown.style.display = 'none';
        }
    });
}