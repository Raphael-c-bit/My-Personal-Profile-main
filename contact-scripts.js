const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("submitBtn");
  const feedback = document.getElementById("formFeedback");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name) {
      feedback.textContent = "Please enter your name.";
      feedback.className = "text-red-500";
      return;
    }
    if (!email || !isValidEmail(email)) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.className = "text-red-500";
      return;
    }
    if (!message) {
      feedback.textContent = "Please enter a message.";
      feedback.className = "text-red-500";
      return;
    }
    
    feedback.textContent = "Message sent successfully!";
    feedback.className = "text-green-500";

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    console.log("Form Submitted:", { name, email, message });
  });
});