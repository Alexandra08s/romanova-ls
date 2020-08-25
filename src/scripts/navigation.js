let navCheckbox = document.querySelector('.nav__check')

navCheckbox.addEventListener('click', navCheckboxHandler)

function navCheckboxHandler() {
  let bodyEl = document.querySelector('body')
  this.checked ? bodyEl.classList.add('fixed') : bodyEl.classList.remove('fixed')
}
