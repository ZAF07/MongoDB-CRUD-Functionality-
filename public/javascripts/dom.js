const el = document.querySelector('small');


if (el) {
  clearEl();
}

function clearEl() {
  const el = document.querySelector('small');

  setTimeout( () => {
    el.style.display = 'none';
  },3000)
}
