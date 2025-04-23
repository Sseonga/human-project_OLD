const previewList = document.querySelector('.preview-list');
const noPreviewMsg = document.querySelector('.no-preview-msg');

// 미리보기 등록삭제
document.getElementById('preview-btn').addEventListener('click', function (e) {
    e.preventDefault(); // 폼 제출 막기

    // 입력값 수집
    const amount = document.querySelector('.reward-money-container input').value;
    const title = document.querySelector('.reward-title-container input').value;
    const content = document.querySelector('.reward-infotext').value;
    const delivery = document.querySelector('.reward-delivery-container input').value;

    const needAddress = document.querySelector('input[name="needadress"]:checked');
    const needAddressText = needAddress ? (needAddress.parentElement.innerText.trim()) : '선택 안됨';

    // rewardContent 엘리먼트 생성
    const rewardContent = document.createElement('div');
    rewardContent.classList.add('rewardContent');

    rewardContent.innerHTML = `
        <button class="remove-btn">×</button>
        <h2>${amount}원</h2>
        <h3>${title}</h3>
        <ul>
            <li>${content}</li>
            <li>배송지 필요 여부: ${needAddressText}</li>
            <li>예상 배송일: ${delivery}</li>
        </ul>
    `;
    rewardContent.querySelector('.remove-btn').addEventListener('click', () => {
      rewardContent.remove();
      // 미리보기 없으면 문구 다시 표시
      if (document.querySelectorAll('.rewardContent').length === 0) {
        noPreviewMsg.style.display = 'block';
      }
    });

    document.querySelector('.preview-list').appendChild(rewardContent);
    noPreviewMsg.style.display = 'none';
});

// 금액 숫자제한 콤마표시
const rewardInput = document.getElementById('reward-amount');

rewardInput.addEventListener('input', () => {
  let onlyNums = rewardInput.value = rewardInput.value.replace(/[^0-9]/g, '').slice(0,30);
  let formatted = parseInt(onlyNums).toLocaleString('ko-KR');
  rewardInput.value = formatted;
});