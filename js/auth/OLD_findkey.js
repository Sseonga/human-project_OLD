document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const forms = document.querySelectorAll('form');
    const resultContainer = document.querySelector('.result-container');
    const resultMessage = document.querySelector('.result-message');
    const closeButton = document.querySelector('.close-result');

    // URL hash 체크하여 탭 활성화
    if(window.location.hash === '#find-pw') {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        document.querySelector('[data-tab="find-pw"]').classList.add('active');
        document.querySelector('#find-pw').classList.add('active');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const tabId = button.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) content.classList.add('active');
            });
        });
    });

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            resultMessage.textContent = '이메일로 전송되었습니다.';
            resultContainer.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        resultContainer.style.display = 'none';
    });
}); 