function toggleDetails() {
    const details = document.querySelector('.details');
    const triangle = document.querySelector('.triangle');
    const toggleText = document.querySelector('.toggle-text');

    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        triangle.classList.add('open');
        toggleText.textContent = 'Hide details';
    } else {
        details.style.display = 'none';
        triangle.classList.remove('open');
        toggleText.textContent = 'Show details';
    }
}
