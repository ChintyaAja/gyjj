const images = document.querySelectorAll('section img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalDownload = document.getElementById('modalDownload');
const modalClose = document.getElementById('modalClose');

images.forEach(img => {
    img.addEventListener('click', () => openModal(img));
});

function openModal(img) {
    modalImage.src = img.src;
    modalDownload.href = img.src;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', () => closeModal());

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}