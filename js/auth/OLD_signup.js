document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('회원가입이 완료되었습니다.');
        window.location.href = './OLD_login.html';
    });
}); 