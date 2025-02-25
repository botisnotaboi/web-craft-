document.getElementById('projectForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    projectDescription: document.getElementById('projectDescription').value,
    timeline: document.getElementById('timeline').value
  };
  
  // Store in localStorage for success page
  localStorage.setItem('formData', JSON.stringify(formData));
  
  // Redirect to success page
  window.location.href = '/success.html';
});