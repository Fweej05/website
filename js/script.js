const navMenu = document.querySelector('.nav__list');
const navLink = document.querySelectorAll('.nav__link');
function openClose() {
   navMenu.classList.toggle('active');
   navLink.forEach(n => {
      n.addEventListener('click', () => {
         navMenu.classList.remove('active');
      });
   });
}
const tx = document.getElementsByTagName('textarea');
for (let i = 0; i < tx.length; i++) {
   tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
   tx[i].addEventListener('input', OnInput, false);
}
function OnInput() {
   this.style.height = 0;
   this.style.height = (this.scrollHeight) + 'px';
}