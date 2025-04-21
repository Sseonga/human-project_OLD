const agreeCheck = document.getElementById('agree-check');
const nextBtn = document.getElementById('next-btn');

agreeCheck.addEventListener('change', () => {
  nextBtn.disabled = !agreeCheck.checked;
});