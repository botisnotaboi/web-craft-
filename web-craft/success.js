// Display user's email on success page
window.addEventListener('DOMContentLoaded', () => {
  const formData = JSON.parse(localStorage.getItem('formData') || '{}');
  const emailSpan = document.getElementById('userEmail');
  if (emailSpan && formData.email) {
    emailSpan.textContent = formData.email;
  }
});