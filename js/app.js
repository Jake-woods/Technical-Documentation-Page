const btnOpenNavBar = document.querySelector('#openNavBar');
const navBarEle = document.querySelector('.menu');

const openNavBar = () => {
   navBarEle.classList.add('menu__is-active');
}
const closeNavBar = (e) => {
   if (e.target.classList.contains('menu__link')) {
      navBarEle.classList.remove('menu__is-active')
   }
}
btnOpenNavBar.addEventListener('click', openNavBar);
navBarEle.addEventListener('click', closeNavBar);