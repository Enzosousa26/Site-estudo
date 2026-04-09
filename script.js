function abrirPerfil() {
    const modal = document.getElementById('perfil');
    if (!modal) return;
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('ativo');
    }, 10);
}

function fecharPerfil() {
    const modal = document.getElementById('perfil');
    if (!modal) return;
    modal.classList.remove('ativo');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

window.addEventListener('pointerdown', function(event) {
    const modal = document.getElementById('perfil');
    if (modal && event.target === modal) {
        fecharPerfil();
    }
});

window.addEventListener('load', () => {
    const topnavLinks = document.querySelectorAll('.topnav a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    topnavLinks.forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }

        link.addEventListener('mousedown', () => {
            topnavLinks.forEach((item) => item.classList.remove('active'));
            link.classList.add('active');
        });

        link.addEventListener('click', () => {
            topnavLinks.forEach((item) => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharPerfil();
    }
});