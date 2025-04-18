document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search_bar input');
    const searchButton = document.querySelector('.search-button');
    const searchOptionsContainer = document.querySelector('.search-options-container');
    const recentSearches = document.querySelector('.recent-searches');
    const clearButton = document.querySelector('.clear-button');
    const tags = document.querySelectorAll('.tags span, .years span, .genres span');

    // 초기에 검색 옵션 숨기기
    if (searchOptionsContainer) {
        searchOptionsContainer.style.display = 'none';
    }

    // 검색창 클릭 시 검색 옵션 표시
    searchInput.addEventListener('click', function() {
        searchOptionsContainer.style.display = 'block';
    });

    // 검색 버튼 클릭 시 최근 검색어 추가
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // 새로운 검색어 요소 생성
            const searchElement = document.createElement('span');
            searchElement.textContent = searchTerm;
            
            // 최근 검색어 목록의 맨 앞에 추가
            if (recentSearches.firstChild) {
                recentSearches.insertBefore(searchElement, recentSearches.firstChild);
            } else {
                recentSearches.appendChild(searchElement);
            }

            // 최근 검색어가 3개를 초과하면 가장 오래된 검색어 삭제
            while (recentSearches.children.length > 3) {
                recentSearches.removeChild(recentSearches.lastChild);
            }

            // 검색창 비우기
            searchInput.value = '';
        }
    });

    // 최근 검색어 클릭 시 검색창에 입력
    recentSearches.addEventListener('click', function(e) {
        if (e.target.tagName === 'SPAN') {
            searchInput.value = e.target.textContent;
        }
    });

    // 태그 클릭 시 검색창에 입력
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            searchInput.value = this.textContent;
        });
    });

    // 클리어 버튼 클릭 시 최근 검색어 모두 삭제
    clearButton.addEventListener('click', function() {
        recentSearches.innerHTML = '';
        searchOptionsContainer.style.display = 'none';
    });
}); 