(function () {
  const headerNavigation = document.querySelector('.header-navigation');
  const openMenuBtn = document.querySelector('.header-mobile-button');
  const closeMenuBtn = document.querySelector('.header-navigation__close');

  openMenuBtn.addEventListener('click', () => {
    headerNavigation.classList.add('header-navigation--show');
  });

  closeMenuBtn.addEventListener('click', () => {
    headerNavigation.classList.remove('header-navigation--show');
  });
})();
