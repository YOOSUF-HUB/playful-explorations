
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      const nav = document.querySelector('.main-nav');
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Basic validation
      if (!name || !email || !message) {
        showFormStatus('Please fill in all fields', 'error');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormStatus('Please enter a valid email address', 'error');
        return;
      }
      
      // Send data to the Java backend
      sendContactForm(name, email, message);
    });
  }
  
  function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    
    // Hide the status after 5 seconds
    setTimeout(() => {
      formStatus.className = 'form-status';
    }, 5000);
  }
  
  function sendContactForm(name, email, message) {
    // Show loading state
    showFormStatus('Sending your message...', 'success');
    
    // Create form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    
    // Send AJAX request to the Java backend
    fetch('/contact', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Success
        showFormStatus(data.message, 'success');
        
        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        
        // Show toast notification
        showToast('Thanks for your message, ' + name + '! I\'ll get back to you soon.');
      } else {
        // Error
        showFormStatus(data.message, 'error');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      showFormStatus('An error occurred. Please try again later.', 'error');
    });
  }
  
  // Toast notification
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (toast && toastMessage) {
      toastMessage.textContent = message;
      toast.classList.add('show');
      
      // Hide the toast after 5 seconds
      setTimeout(() => {
        toast.classList.remove('show');
      }, 5000);
    }
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for the header
          behavior: 'smooth'
        });
        
        // If mobile menu is open, close it
        const nav = document.querySelector('.main-nav');
        if (window.innerWidth < 768 && nav.style.display === 'flex') {
          nav.style.display = 'none';
        }
      }
    });
  });
});
