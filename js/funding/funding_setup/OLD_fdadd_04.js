// 폰번호 입력
const phoneInput = document.getElementById('phone-number');

phoneInput.addEventListener('input', () => {
  let onlyNums = phoneInput.value.replace(/[^0-9]/g, '');
  if (onlyNums.length > 11) onlyNums = onlyNums.slice(0, 11);

  let formatted = '';

  if (onlyNums.length < 4) {
    formatted = onlyNums;
  } else if (onlyNums.length < 8) {
    formatted = `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  } else {
    formatted = `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7)}`;
  }

  phoneInput.value = formatted;
});