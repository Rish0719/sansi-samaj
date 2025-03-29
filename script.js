function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    const html = el.getAttribute(`data-${lang}`);
    if (html) el.innerHTML = html;
  });
}

function toggleMessage() {
  const box = document.getElementById('message-box');
  const arrow = document.getElementById('arrow');

  if (box.style.display === 'none' || box.style.display === '') {
    box.style.display = 'block';
    arrow.innerHTML = '&#9650;';
  } else {
    box.style.display = 'none';
    arrow.innerHTML = '&#9660;';
  }
}

window.onload = () => {
  setLanguage('hi'); // Load default Hindi on page load
};
