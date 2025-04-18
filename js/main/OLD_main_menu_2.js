document.addEventListener('DOMContentLoaded', function() {
    // 마이페이지 드롭다운 관련 요소
    const mypageButton = document.querySelector('.mypage');
    const mypageDropdown = document.querySelector('.mypage-dropdown');

    // 마이페이지 아이콘 클릭 시 드롭다운 토글
    mypageButton.addEventListener('click', function(e) {
        e.preventDefault();
        mypageDropdown.style.display = mypageDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // 다른 영역 클릭 시 드롭다운 닫기
    document.addEventListener('click', function(e) {
        if (!mypageButton.contains(e.target) && !mypageDropdown.contains(e.target)) {
            mypageDropdown.classList.remove('show');
        }
    });

    // 메뉴 아이템 클릭 시 드롭다운 닫기
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            mypageDropdown.classList.remove('show');
        });
    });
}); 