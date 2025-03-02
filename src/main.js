document.addEventListener('DOMContentLoaded', function () {
  const menuOpenBtn = document.querySelector('.nav-stroke'); // Кнопка "бургер"
  const menuCloseBtn = document.querySelector('.menu-close'); // Кнопка "закрыть"
  const overlay = document.querySelector('.overlay'); // Фон + меню
  const menuLinks = document.querySelectorAll('.menu-nav-mob'); // Ссылки в меню

  // Функция для открытия меню
  function openMenu() {
    overlay.classList.add('is-open');
  }

  // Функция для закрытия меню
  function closeMenu() {
    overlay.classList.remove('is-open');
  }

  // Открываем меню при нажатии на бургер
  menuOpenBtn.addEventListener('click', openMenu);

  // Закрываем меню при нажатии на кнопку "крестик"
  menuCloseBtn.addEventListener('click', closeMenu);

  // Закрываем меню при нажатии на ссылки (только на мобильных)
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth < 768) {
        closeMenu();
      }
    });
  });

  // Закрываем меню при клике на затемненную область (только на мобильных)
  overlay.addEventListener('click', function (event) {
    if (event.target === overlay && window.innerWidth < 768) {
      closeMenu();
    }
  });
});
