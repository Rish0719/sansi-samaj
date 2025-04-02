function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    const html = el.getAttribute(`data-${lang}`);
    if (html) el.innerHTML = html;
  });
}

function toggleMessage() {
  const box = document.getElementById("message-box");
  const arrow = document.getElementById("arrow");
  box.classList.toggle("open");
  arrow.innerHTML = box.classList.contains("open") ? "&#9650;" : "&#9660;";
}
}

window.onload = () => {
  setLanguage('hi'); // Load default Hindi on page load
};
