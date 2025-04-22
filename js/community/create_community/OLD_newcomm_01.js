
// 체크박스 클릭시 스타일추가하여 색변경 제어
document.querySelectorAll('.checkbox-btn input').forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const label = e.target.closest('.checkbox-btn');
    if (checkbox.checked) {
      label.classList.add('checked');
    } else {
      label.classList.remove('checked');
    }
  });
});

// 제목 글자수 표시
const titleField = document.getElementById('titlefield');
const titleCount = document.getElementById('title-count');

titleField.addEventListener('input', () => {
  const length = titleField.value.length;
  titleCount.textContent = `${length}/40`;
});

// 남은 날짜 계산
const dateInput = document.getElementById("end-date");
const daysLeftInput = document.getElementById("days-left");

dateInput.addEventListener("change", () => {
const today = new Date();
const endDate = new Date(dateInput.value);

if (isNaN(endDate.getTime())) {
    daysLeftInput.value = "";
    return;
}

const timeDiff = endDate - today;
const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

if (dayDiff < 7 || dayDiff > 60) {
    alert("진행 기간은 7일 이상 60일 이하로 설정해주세요.");
} else {
    daysLeftInput.value = dayDiff;
}
});

// 프로젝트주소 영어제한  
const urlInput = document.getElementById('url-slug');

urlInput.addEventListener('input', () => {
    urlInput.value = urlInput.value.replace(/[^a-zA-Z0-9]/g, '');
});

// 대표이미지 미리보기
const fileInput = document.getElementById('image-upload');
const previewImg = document.getElementById('image-preview');
const uploadText = document.querySelector('.upload-text');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onload = (e) => {
      previewImg.src = e.target.result;
      previewImg.style.display = 'block';
      uploadText.style.display = 'none';
    };

    reader.readAsDataURL(file);
  } else {
    previewImg.src = '';
    previewImg.style.display = 'none';
    uploadText.style.display = 'block';
    alert("이미지 파일만 업로드 가능합니다!");
  }
});