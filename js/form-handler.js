document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('formStatus');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent page reload
  
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const website = document.getElementById('website').value.trim();
  
      // Basic front-end validation
      if (!email || !phone || !website) {
        statusDiv.textContent = 'Please fill in all required fields.';
        statusDiv.style.color = 'red';
        return;
      }
  
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            statusDiv.textContent = 'Form submitted successfully!';
            statusDiv.style.color = 'green';
            form.reset();
          } else {
            statusDiv.textContent = 'There was a problem submitting the form.';
            statusDiv.style.color = 'red';
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          statusDiv.textContent = 'An error occurred. Please try again later.';
          statusDiv.style.color = 'red';
        });
    });
  });  
