const submitBtn = document.querySelector('.submit-btn');
const topGroup = document.getElementById('top-group');


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

