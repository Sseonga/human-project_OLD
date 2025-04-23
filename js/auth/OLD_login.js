const adminUser = {
    type: 'admin',
    name: '관리자',
    username: 'admin',
    password: 'admin'
};
  
const normalUser = {
    type: 'user',
    name: '사용자',
    username: 'user',
    password: '1234'
};
  
localStorage.setItem('admin', JSON.stringify(adminUser));
localStorage.setItem('user', JSON.stringify(normalUser));

document.getElementById("loginForm")
.addEventListener("submit", function (event) {
    event.preventDefault();
    const userid = document.getElementById("userid").value;
    const password = document.getElementById("userpassword").value;

    const user = localStorage.getItem(userid);
    if(!user) {
        alert("아이디를 다시 한 번 확인해주세요.");
    }

    const parsedUser = JSON.parse(user);

    if(parsedUser.type === 'admin') {
        if (user) {
            if (parsedUser.password === password) {
                // 로그인 성공 시 저장
                parsedUser.userid = userid;
                localStorage.setItem("user", JSON.stringify(parsedUser));
                localStorage.setItem("isLoggedIn", "true"); 
                localStorage.setItem("loggedInUserId", userid); 
                window.location.href = "../main/OLD_main_page_admin.html";
            } else {
            alert("비밀번호가 일치하지 않습니다.");
            }
        } else {
            alert("사용자를 찾을 수 없습니다.");
        }
    }

    if(parsedUser.type === 'user') {
        if (user) {
            if (parsedUser.password === password) {
                // 로그인 성공 시 저장
                parsedUser.userid = userid;
                localStorage.setItem("user", JSON.stringify(parsedUser));
                localStorage.setItem("isLoggedIn", "true"); 
                localStorage.setItem("loggedInUserId", userid); 
                window.location.href = "../main/OLD_main_page1.html";
            } else {
                alert("비밀번호가 일치하지 않습니다.");
            }
        } else {
            alert("사용자를 찾을 수 없습니다.");
        }
    }
});
  
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userId = document.querySelector('input[type="text"]').value;
        const userPw = document.querySelector('input[type="password"]').value;
        
    
    });
}); 