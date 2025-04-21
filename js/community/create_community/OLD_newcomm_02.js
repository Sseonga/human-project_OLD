const videoUrlList = document.getElementById('video-url-list');

videoUrlList.addEventListener('click', (e) => {
  if (e.target.classList.contains('urlbutton')) {
    const newRow = document.createElement('div');
    newRow.className = 'url-row';
    newRow.innerHTML = `
      <input type="url" placeholder="Youtube, Video URL을 입력해주세요.">
    `;
    videoUrlList.appendChild(newRow);
  }
});