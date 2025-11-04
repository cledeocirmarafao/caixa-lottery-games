function menu() {
  const menuLinks = document.querySelectorAll('.navbar-link');
  const currentPage = window.location.pathname.split('/').pop(); // pega o nome do arquivo atual (ex: "quina.html")

  menuLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();

    if (linkPage === currentPage || (linkPage === './index.html' && currentPage === '')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

export { menu }