/* ========================================
   WENEXO.COM - JavaScript
   ======================================== */

// Mobile Navigation Toggle
function toggleNav() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Close mobile nav when clicking a link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const navMenu = document.getElementById('navLinks');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
});

// Add shadow to nav on scroll
window.addEventListener('scroll', function() {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const navHeight = document.getElementById('nav').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Simple fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply fade-in to cards and sections
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.who-card, .build-card, .track-card, .compare-row');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Accordion Toggle Function
function toggleAccordion(button) {
  const accordionSection = button.closest('.accordion-section');
  const content = accordionSection.querySelector('.accordion-content');
  const icon = button.querySelector('.accordion-icon');
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  
  if (isExpanded) {
    // Close accordion
    button.setAttribute('aria-expanded', 'false');
    content.style.display = 'none';
    icon.textContent = '+';
  } else {
    // Open accordion
    button.setAttribute('aria-expanded', 'true');
    content.style.display = 'block';
    icon.textContent = '−';
  }
}

// Sticky CTA Button Show/Hide
document.addEventListener('DOMContentLoaded', function() {
  const stickyCta = document.getElementById('stickyCta');
  if (!stickyCta) return;
  
  const hero = document.querySelector('.hero, .about-hero, .contact-hero');
  const footer = document.querySelector('.footer');
  
  function updateStickyCta() {
    if (!hero || !footer) return;
    
    const heroBottom = hero.getBoundingClientRect().bottom;
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Show button when scrolled past hero and not near footer
    // Hide when footer is within 200px of viewport bottom
    if (heroBottom < 0 && footerTop > windowHeight - 200) {
      stickyCta.classList.add('visible');
    } else {
      stickyCta.classList.remove('visible');
    }
  }
  
  // Check on scroll
  window.addEventListener('scroll', updateStickyCta);
  
  // Check on page load
  updateStickyCta();
  
  // Check on resize (in case footer position changes)
  window.addEventListener('resize', updateStickyCta);
});
