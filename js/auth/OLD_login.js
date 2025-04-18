document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userId = document.querySelector('input[type="text"]').value;
        const userPw = document.querySelector('input[type="password"]').value;
        
    
    });
}); 