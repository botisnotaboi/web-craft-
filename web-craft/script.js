// Loading screen animation
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 200);
    }, 800);
  }
});

// Smooth scroll for Get Started button and navigation links
document.addEventListener('click', (e) => {
  if (e.target.matches('.cta-button') || 
      (e.target.matches('a') && e.target.getAttribute('href').startsWith('#'))) {
    e.preventDefault();
    const targetId = e.target.matches('.cta-button') ? 'contact' : e.target.getAttribute('href').slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
});