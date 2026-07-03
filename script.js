// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fade-in 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .pricing-card, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        // WhatsApp message
        const whatsappMessage = `नमस्ते! मैं Shyam Digital Services से संपर्क करना चाहता/चाहती हूँ।\n\nनाम: ${name}\nEmail: ${email}\nफोन: ${phone}\nसेवा: ${service}\nसंदेश: ${message}`;
        
        const whatsappLink = `https://wa.me/917319772395?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
        
        // Reset form
        this.reset();
        alert('धन्यवाद! आपका संदेश भेज दिया गया है।');
    });
}

// Add stars to hero section
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animation = `twinkle ${2 + Math.random() * 2}s infinite`;
        starsContainer.appendChild(star);
    }
}

// Add twinkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

createStars();

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.borderBottomColor = 'rgba(99, 102, 241, 0.2)';
    } else {
        navbar.style.borderBottomColor = 'var(--border-color)';
    }
});

// Pricing card buttons
document.querySelectorAll('.pricing-card button').forEach(button => {
    button.addEventListener('click', function() {
        const cardTitle = this.parentElement.querySelector('h3').textContent;
        const whatsappMessage = `नमस्ते! मुझे ${cardTitle} सेवा के बारे में जानकारी चाहिए।`;
        const whatsappLink = `https://wa.me/917319772395?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
    });
});

console.log('Shyam Digital Services Website Loaded! 🚀');