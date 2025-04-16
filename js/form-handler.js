document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    formStatus.textContent = "Submitting...";
    formStatus.style.color = "black";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      const text = await response.text();

      // Log raw response for debugging
      console.log("Raw response from script:", text);

      // Try to parse JSON, or fallback to raw text
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = { result: text };
      }

      // Handle success or error message
      if (data.result?.toLowerCase().includes("success")) {
        formStatus.textContent = "Form submitted successfully!";
        formStatus.style.color = "green";
        form.reset();
      } else {
        formStatus.textContent = `Submission failed: ${data.result || 'Unknown error'}`;
        formStatus.style.color = "red";
      }

    } catch (error) {
      console.error("Submission error:", error);
      formStatus.textContent = "Network error. Please try again later.";
      formStatus.style.color = "red";
    }
  });
});
