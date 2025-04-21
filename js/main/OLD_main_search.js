document.addEventListener('DOMContentLoaded', function() {
    // 필요한 DOM 요소 선택
    const searchBar = document.querySelector('.search_bar input');
    const searchButton = document.querySelector('.search-button');
    const searchOptionsContainer = document.querySelector('.search-options-container');
    const clearButton = document.querySelector('.clear-button');
    const searchResults = document.querySelector('.recent-searches');
    const tags = document.querySelectorAll('.tags span, .years span, .genres span');
    const popularSearches = document.querySelectorAll('.popular-searches li');
    
    // 상수 정의
    const MAX_CHARS = 9;
    
    // 로컬 스토리지에서 최근 검색어 가져오기
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    
    // 최근 검색어 UI 업데이트 함수
    function updateRecentSearches() {
        searchResults.innerHTML = '';
        recentSearches.slice(0, 3).forEach(search => {
            const span = document.createElement('span');
            span.textContent = search;
            span.addEventListener('click', function() {
                searchBar.value = search;
                searchOptionsContainer.style.display = 'none';
            });
            searchResults.appendChild(span);
        });
    }
    
    // 검색어 저장 함수
    function saveSearch(searchTerm) {
        if (searchTerm.trim() !== '') {
            // 중복 제거 후 배열 앞에 추가
            recentSearches = recentSearches.filter(item => item !== searchTerm);
            recentSearches.unshift(searchTerm);
            
            // 최대 3개까지만 저장
            if (recentSearches.length > 3) {
                recentSearches.pop();
            }
            
            // 로컬 스토리지 저장 및 UI 업데이트
            localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
            updateRecentSearches();
            searchOptionsContainer.style.display = 'none';
        }
    }
    
    // 초기화 및 이벤트 리스너 설정
    updateRecentSearches();
    
    // 검색창 입력 글자수 제한
    searchBar.addEventListener('input', function() {
        if (this.value.length > MAX_CHARS) {
            this.value = this.value.substring(0, MAX_CHARS);
        }
    });
    
    // 검색창 클릭 시 옵션 표시
    searchBar.addEventListener('click', function() {
        searchOptionsContainer.style.display = 'block';
        setTimeout(() => searchOptionsContainer.classList.add('visible'), 10);
    });
    
    // 검색 버튼 클릭 시 검색어 저장
    searchButton.addEventListener('click', function() {
        saveSearch(searchBar.value.trim());
    });
    
    // 엔터키 입력 시 검색어 저장
    searchBar.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && this.value.trim() !== '') {
            saveSearch(this.value.trim());
        }
    });
    
    // 최근 검색어 삭제
    clearButton.addEventListener('click', function() {
        recentSearches = [];
        localStorage.removeItem('recentSearches');
        updateRecentSearches();
    });
    
    // 태그 클릭 시 선택 상태 토글
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // 인기 검색어 클릭 시 검색
    popularSearches.forEach(item => {
        item.addEventListener('click', function() {
            const searchText = this.textContent.replace(/^\d+\.\s+/, '');
            searchBar.value = searchText.substring(0, MAX_CHARS);
            saveSearch(searchBar.value);
        });
    });
    
    // 검색 옵션 외부 클릭 시 닫기
    document.addEventListener('click', function(e) {
        if (searchBar.contains(e.target) || searchOptionsContainer.contains(e.target) || searchButton.contains(e.target)) {
            return;
        }
        searchOptionsContainer.style.display = 'none';
    });
    
    // 검색창 포커스 관련 CSS 클래스 관리
    searchBar.addEventListener('focus', function() {
        this.classList.add('focused');
    });
    
    searchBar.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.classList.remove('focused');
        }
    });
}); 