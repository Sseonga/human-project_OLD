document.querySelector('.alarm').addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = document.querySelector('.alarm-dropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}); 