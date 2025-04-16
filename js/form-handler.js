document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const action = form.action;

    fetch(action, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          status.innerHTML = '<p style="color:green;">Thank you! Your form has been submitted.</p>';
          form.reset();
        } else {
          status.innerHTML = '<p style="color:red;">Oops! There was a problem submitting the form.</p>';
        }
      })
      .catch(error => {
        console.error('Error!', error.message);
        status.innerHTML = '<p style="color:red;">Something went wrong. Please try again later.</p>';
      });
  });
});
