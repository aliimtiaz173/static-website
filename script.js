// Smooth scroll to projects section
document.getElementById('scrollBtn').addEventListener('click', function() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Optional: form submission alert
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting me!');
});
