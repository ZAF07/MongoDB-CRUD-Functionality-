const el = document.querySelector('.el');
const del = document.querySelector('.del');


if (el) {
  clearEl();
}

function clearEl() {
  const el = document.querySelector('small');

  setTimeout(() => {
    el.style.display = 'none';
  },3000)
}


if (del) {
  clearDel();
}

function clearDel() {
  const el = document.querySelector('small');

  setTimeout(() => {
    del.style.display = 'none';
  },3000)
}
