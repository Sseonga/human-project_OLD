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