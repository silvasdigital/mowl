// === THEME TOGGLE (DARK MODE) ===
let currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
function toggleTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    const doc = document.documentElement;
    const newTheme =
      doc.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    doc.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// === YOUR PAGE-SPECIFIC CODE ===
// Import Bootstrap so the navbar collapse works on mobile
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../styles/main.css';
import '../styles/products.css'; // <-- This is the only file that needs this
console.log('Mowl Store - Products Page Loaded');
toggleTheme();
