// 버튼클릭시 댓글창 열기
function toggleComment(){
    const commentBox = document.getElementById('commentBox');
    commentBox.classList.toggle('show');
}

document.getElementById('commBtn').onclick = toggleComment;