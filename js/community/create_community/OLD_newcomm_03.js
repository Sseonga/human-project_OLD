const agreeCheck = document.getElementById('agree-check');
const nextBtn = document.getElementById('next-btn');

agreeCheck.addEventListener('change', () => {
  nextBtn.disabled = !agreeCheck.checked;
});


function movePage() {
  const go = confirm("작성내용을 제출하시겠습니까?");
  if (go) {
    window.location.href = "../../main/OLD_main_page1.html";
    alert("작성완료! 커뮤니티에 게시되었습니다.")
  } else {
  }
}