document.addEventListener('DOMContentLoaded', function () {
    const allContainers = document.querySelectorAll('.single_image');
    const likedKeys = Object.keys(localStorage).filter(k => k.startsWith('likedProject_'));

    likedKeys.slice(0, allContainers.length).forEach((key, idx) => {
        const container = allContainers[idx];
        const data = JSON.parse(localStorage.getItem(key));

        const link = document.createElement('a');
        link.href = data.url;
        

        const img = document.createElement('img');
        img.src = data.img;
        img.alt = '찜한 프로젝트';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';

        link.appendChild(img);
        container.appendChild(link);

        container.style.position = 'relative';
    });
});
