const videoUrlList = document.getElementById('video-url-list');
const urlList = document.getElementById('url-row')

videoUrlList.addEventListener('click', (e) => {
  if (e.target.classList.contains('urlbutton')) {
    const newRow = document.createElement('input');
    newRow.type = 'url';
    newRow.placeholder = 'Youtube, Video URL을 입력해주세요.'
    urlList.appendChild(newRow);
  }
});

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