document.addEventListener("DOMContentLoaded", function () {
    const sortButtons = document.querySelectorAll(".font-sm button");
    const cardSections = document.querySelectorAll(".funding-cards ul");

    // 원본 순서 기억
    const originalLists = Array.from(cardSections).map(ul => Array.from(ul.children));

    // 숫자만 뽑는 함수
    function extractNumberFromIcon(span, iconClass) {
        const target = Array.from(span.parentElement.querySelectorAll("span")).find(el =>
            el.querySelector(`i.${iconClass}`)
        );
        return target ? parseInt(target.textContent.replace(/[^\d]/g, ""), 10) : 0;
    }

    // 날짜 파싱 함수 (YYYY.MM.DD → Date 객체)
    function parseDate(dateStr) {
        const [year, month, day] = dateStr.trim().split(".").map(Number);
        return new Date(year, month - 1, day);
    }

    // 정렬 함수
    function sortListBy(criteria) {
        cardSections.forEach((ul) => {
            const items = Array.from(ul.children);

            items.sort((a, b) => {
                const aStats = a.querySelector(".post-stats");
                const bStats = b.querySelector(".post-stats");
                const aDate = parseDate(a.querySelector(".post-date").textContent);
                const bDate = parseDate(b.querySelector(".post-date").textContent);

                switch (criteria) {
                    case "latest":
                        return bDate - aDate;
                    case "views":
                        return extractNumberFromIcon(bStats, "fa-eye") - extractNumberFromIcon(aStats, "fa-eye");
                    case "comments":
                        return extractNumberFromIcon(bStats, "fa-comment") - extractNumberFromIcon(aStats, "fa-comment");
                    default:
                        return 0;
                }
            });

            // 정렬된 항목 재삽입
            items.forEach(item => ul.appendChild(item));
        });
    }

    // 버튼 클릭 이벤트 연결
    sortButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            sortButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const label = this.innerText;

            if (label.includes("최신순")) {
                sortListBy("latest");
            } else if (label.includes("조회순")) {
                sortListBy("views");
            } else if (label.includes("댓글순")) {
                sortListBy("comments");
            } else {
                // 인기순 → 원래 순서 복원
                cardSections.forEach((ul, index) => {
                    ul.innerHTML = "";
                    originalLists[index].forEach(li => ul.appendChild(li));
                });
            }
        });
    });
});