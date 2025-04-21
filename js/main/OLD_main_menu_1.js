document.addEventListener('DOMContentLoaded', function() {
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
}); 