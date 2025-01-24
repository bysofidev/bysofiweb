document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    document.querySelector('header').appendChild(menuToggle);
    
    const menuPrincipal = document.querySelector('.menu-principal');
    
    menuToggle.addEventListener('click', function() {
        menuPrincipal.classList.toggle('active');
    });

    // Submenús en móvil
    document.querySelectorAll('.submenu > a').forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    });
}); 