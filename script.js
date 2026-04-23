// Ele faz ações acontecerem, como abrir modal e marcar o link ativo.

function abrirPerfil() {
    // Procura o elemento que tem id 'perfil'. Esse é o modal.
    const modal = document.getElementById('perfil');
    if (!modal) return; // Se não achar, sai sem fazer nada.

    // Faz o modal aparecer na tela usando flex.
    modal.style.display = 'flex';

    // Depois de um pouquinho, adiciona a classe 'ativo'.
    // Isso faz a animação de aparecer funcionar.
    setTimeout(() => {
        modal.classList.add('ativo');
    }, 10);
}

function fecharPerfil() {
    // Procura de novo o modal para fechar.
    const modal = document.getElementById('perfil');
    if (!modal) return;

    // Remove a classe que mostra o modal.
    modal.classList.remove('ativo');

    // Depois de 300ms, esconde o modal totalmente.
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

window.addEventListener('pointerdown', function(event) {
    // Fecha o modal quando o usuário clica fora da caixa de conteúdo.
    const modal = document.getElementById('perfil');
    if (modal && event.target === modal) {
        fecharPerfil();
    }
});

window.addEventListener('load', () => {
    // Quando a página terminar de carregar, faz o menu ficar marcado.
    const topnavLinks = document.querySelectorAll('.topnav a');

    topnavLinks.forEach((link) => {
        // Compara o pathname resolvido do link com o pathname atual
        const linkPath = new URL(link.href, window.location.origin).pathname;
        if (linkPath === window.location.pathname) {
            link.classList.add('active');
        }

        link.addEventListener('mousedown', () => {
            // Quando começa a apertar o link, limpa todos e marca este.
            topnavLinks.forEach((item) => item.classList.remove('active'));
            link.classList.add('active');
        });

        link.addEventListener('click', () => {
            // Quando clica no link, também garante que ele fique marcado.
            topnavLinks.forEach((item) => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Botão voltar ao topo
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            // Se o usuário rolar para baixo mais de 300 pixels, mostra o botão.
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            // Quando o botão for clicado, sobe devagar para o topo.
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Funcionalidade do botão de login
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        console.log('Botão de login encontrado');
        loginBtn.addEventListener('click', () => {
            console.log('Botão clicado, redirecionando...');
            // Redireciona para a página principal
            window.location.href = '../movimentações/home.html';
        });
    } else {
        console.log('Botão de login não encontrado');
    }
});


document.addEventListener('keydown', function(event) {
    // Fecha o modal quando a tecla Escape for pressionada.
    if (event.key === 'Escape') {
        fecharPerfil();
    }
});
