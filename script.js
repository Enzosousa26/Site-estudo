// Função para abrir o modal
function abrirPerfil() {
    const modal = document.getElementById('perfil');
    modal.style.display = 'flex';
    // Pequeno delay para permitir a transição
    setTimeout(() => {
        modal.classList.add('ativo');
    }, 10);
}

// Função para fechar o modal
function fecharPerfil() {
    const modal = document.getElementById('perfil');
    modal.classList.remove('ativo');
    // Aguardar a transição antes de esconder
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('perfil');
    if (event.target === modal) {
        fecharPerfil();
    }
}

// Fechar com tecla ESC (bônus criativo)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharPerfil();
    }
});