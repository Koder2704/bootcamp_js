window.onload = () => {
    const tag = document.querySelector('.user');

    tag.textContent = JSON.parse(localStorage.getItem('authenticated')).username;
}