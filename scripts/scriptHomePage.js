menuItems.forEach(item => {
    item.addEventListener('click', function () {
        // Verifica se o item é parte do menu principal
        if (item.closest('.menu') && !item.closest('.sub-menu')) {
            // Remove "active" dos itens irmãos
            const siblings = Array.from(item.parentNode.children).filter(child => child !== item);
            siblings.forEach(sibling => {
                sibling.classList.remove('active');
                sibling.querySelectorAll('ul').forEach(ul => ul.style.display = 'none');
                sibling.querySelectorAll('li').forEach(subItem => subItem.classList.remove('active'));
            });

            // Alterna a classe "active" no item clicado
            item.classList.toggle('active');

            // Abre ou fecha o submenu associado ao item clicado
            const submenu = item.querySelector('ul');
            if (submenu) {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        }
    });
});
