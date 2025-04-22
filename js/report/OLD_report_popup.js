function cancel() {
    alert('이전 페이지로 돌아갑니다.');
    window.close();
}

function submit() {
    const message = document.getElementById('message').value;
    if (message.length < 20) {
    alert('내용을 20자 이상 입력해주세요.');
    } else {
    alert('신고가 정상적으로 접수되었습니다.');
    document.getElementById('message').value = '';
    }
}