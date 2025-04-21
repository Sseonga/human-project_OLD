document.addEventListener('DOMContentLoaded', function () {
    const allContainers = document.querySelectorAll('.single_image');
    const likedKeys = Object.keys(localStorage).filter(k => k.startsWith('likedProject_'));

    likedKeys.slice(0, allContainers.length).forEach((key, idx) => {
        const container = allContainers[idx];
        const data = JSON.parse(localStorage.getItem(key));

        const link = document.createElement('a');
        link.href = data.url;
        link.style.borderRadius = '10px';
        link.style.position = 'relative';
        link.style.overflow = 'hidden';

        const img = document.createElement('img');
        img.src = data.img;
        img.alt = '찜한 프로젝트';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';

        const overlay = document.createElement('div');
        overlay.textContent = data.title || '프로젝트 제목';
        overlay.style.position = 'absolute';
        overlay.style.bottom = '10%';
        overlay.style.left = '10%';
        overlay.style.width = '80%';
        overlay.style.background = 'rgba(0, 0, 0, 0.5)';
        overlay.style.color = 'white';
        overlay.style.padding = '10px';
        overlay.style.fontSize = '16px';
        overlay.style.boxSizing = 'border-box';
        overlay.style.textAlign = 'center';
        overlay.style.borderRadius = '10px';

        link.appendChild(img);
        container.appendChild(link);
        container.appendChild(overlay);
        container.style.overflow = 'hidden';
        container.style.position = 'relative';
    });
});
