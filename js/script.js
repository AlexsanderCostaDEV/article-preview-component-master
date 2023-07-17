const shareButton = document.querySelector('#share');
const shareBox = document.querySelector('#share-icons');

shareButton.addEventListener('click', () => {
    shareBox.classList.toggle('hidden');
})