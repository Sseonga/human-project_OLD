document.addEventListener("DOMContentLoaded", function () {
    const fundingSections = document.querySelectorAll(".funding-cards ul");
    const sortButtons = document.querySelectorAll(".subject .font-sm button");

    // 원래 순서 저장
    const originalLists = Array.from(fundingSections).map(ul => Array.from(ul.children));

    // 금액에서 숫자만 추출
    function extractAmount(text) {
        // 예: "10,000,000원" 또는 "10,000,000,원" → 10000000
        const cleaned = text.replace(/[^0-9]/g, "");
        return parseInt(cleaned, 10);
    }

    // 금액 기준 정렬 함수
    function sortByAmountDesc() {
        fundingSections.forEach((ul) => {
            const items = Array.from(ul.children);
            items.sort((a, b) => {
                const amountA = extractAmount(a.querySelector(".fund-amount").innerText);
                const amountB = extractAmount(b.querySelector(".fund-amount").innerText);
                return amountB - amountA; // 내림차순
            });

            // 정렬된 항목 재삽입
            items.forEach(item => ul.appendChild(item));
        });
    }

    // 원래 순서 복구 함수
    function resetToOriginal() {
        fundingSections.forEach((ul, index) => {
            ul.innerHTML = "";
            originalLists[index].forEach(li => ul.appendChild(li));
        });
    }

    // 버튼 이벤트 연결
    sortButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            sortButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const label = this.innerText;

            if (label.includes("모집금액순")) {
                sortByAmountDesc();
            } else if (label.includes("인기순")) {
                resetToOriginal();
            } else {
                // 다른 버튼 클릭 시도 기본적으로 원래 순서 유지
                resetToOriginal();
            }
        });
    });
});
