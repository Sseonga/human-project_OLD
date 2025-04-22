const submitBtn = document.querySelector('.submit-btn');
const topGroup = document.getElementById('top-group');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalCard = document.querySelector('.modal-card');
const btnOpenPopup = document.querySelector('.btn-open-popup');
const addCard = document.querySelector('.add-card');
const btnClose = document.querySelectorAll('.btn-close');
// 모달창 닫기 함수
function closeModals() {
    modal.classList.remove('show');
    modalCard.classList.remove('show');
    body.style.overflow = 'auto';
}
// 결제모달창 띄우기
btnOpenPopup.addEventListener('click', () => {
    modal.classList.toggle('show');

    if (modal.classList.contains('show')) {
        body.style.overflow = 'hidden';
    }
});
// 카드등록 버튼 -> 카드등록화면
addCard.addEventListener('click', () => {
    modalCard.classList.add('show');
    modal.classList.remove('show');
    body.style.overflow = 'hidden';
    
    // 카드번호에 숫자만
    const cardNumInput = document.getElementById('card-number');

    cardNumInput.addEventListener('input', () => {
        let onlyNums = cardNumInput.value.replace(/[^0-9]/g, '').slice(0, 16);
        let formatted = onlyNums.match(/.{1,4}/g)?.join(' - ') || '';
        cardNumInput.value = formatted;
    });
});
// x버튼클릭시 결제꺼짐
btnClose.forEach((btn) => {
    btn.addEventListener('click', closeModals);
});
// 카드등록완료 버튼 -> 다시 결제화면
submitBtn.addEventListener('click', () => {
    modalCard.classList.remove('show');
    modal.classList.add('show');
    body.style.overflow = 'hidden';
});

// 카드번호 입력후 카드등록
submitBtn.addEventListener('click', (e) => {
    const v_CardNum = document.getElementById('card-number').value.trim();
    const cardBrand = document.querySelector('.card-brand').value;

    if (v_CardNum === '') {
        alert('카드번호를 입력해주세요.');
        return;
    }

    const newRow = document.createElement('div');
    newRow.className = 'pay-top';
    newRow.innerHTML = `<label><input type="radio" name="pay-card">${cardBrand} ${v_CardNum}</label>`;
    topGroup.appendChild(newRow);
});

// 전체동의
function selectAll(selectAll)  {
    const checkboxes 
        = document.getElementsByName("agree");
    
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
};