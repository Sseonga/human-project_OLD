document.querySelector('.save button').addEventListener('click', function () {
    const currentPasswordInput = document.querySelectorAll('.password_bar input')[0];
    const newPasswordInput = document.querySelectorAll('.password_bar input')[1];

    const currentPassword = currentPasswordInput.value.trim();
    const newPassword = newPasswordInput.value.trim();

    if (currentPassword && newPassword) {
        alert("비밀번호가 변경되었습니다.");
    } else {
        alert("모든 비밀번호 입력란을 채워주세요.");
    }
});