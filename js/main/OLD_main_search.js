document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search_bar input');
    const searchOptionsContainer = document.querySelector('.search-options-container');
    const searchButton = document.querySelector('.search-button');

    // 초기에 검색 옵션 숨기기
    if (searchOptionsContainer) {
        searchOptionsContainer.style.display = 'none';
    }

    // 검색창 클릭 이벤트
    searchInput.addEventListener('click', function(e) {
        e.preventDefault();
        if (searchOptionsContainer) {
            searchOptionsContainer.style.display = 'block';
        }
    });

    // 검색어 입력 이벤트
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        console.log('검색어:', searchTerm);
    });

    // 검색 버튼 클릭 이벤트
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            addToRecentSearches(searchTerm);
        }
    });

    // 검색어 지우기 버튼
    const clearButton = document.querySelector('.clear-button');
    if (clearButton) {
        clearButton.addEventListener('click', function() {
            const recentSearches = document.querySelector('.recent-searches');
            if (recentSearches) {
                recentSearches.innerHTML = '';
                searchOptionsContainer.style.display = 'none';
            }
        });
    }


    // 최근 검색어 추가 함수
    function addToRecentSearches(searchTerm) {
        const recentSearches = document.querySelector('.recent-searches');
        if (recentSearches) {
            // 중복 검색어 확인
            const existingSearches = recentSearches.querySelectorAll('span');
            for (let search of existingSearches) {
                if (search.textContent === searchTerm) {
                    return; // 이미 존재하는 검색어면 추가하지 않음
                }
            }

            // 새로운 검색어 요소 생성
            const span = document.createElement('span');
            span.textContent = searchTerm;
            span.addEventListener('click', function() {
                searchInput.value = searchTerm;
                searchOptionsContainer.style.display = 'none';
            });

            // 기존 검색어 배열로 변환
            const searches = Array.from(existingSearches);
            
            // 최대 3개까지만 유지
            if (searches.length >= 3) {
                recentSearches.removeChild(searches[searches.length - 1]); // 가장 오래된 검색어 제거
            }

            // 새로운 검색어를 맨 위에 추가
            recentSearches.insertBefore(span, recentSearches.firstChild);
        }
    }
}); 