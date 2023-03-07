function paginar(id) {
  var activeItem = document.querySelector('.item.active');
  activeItem.classList.remove('active');

  var newActiveItem = document.getElementById(id);
  newActiveItem.classList.add('active');
}

var pageLinks = document.querySelectorAll('.pagination .page-link');

// Adiciona o evento onclick para cada botão de página
pageLinks.forEach(pageLink => {
  pageLink.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.target.dataset.target;
    paginar(targetId);
  });
});