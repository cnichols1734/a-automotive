// Loading animation
window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.querySelector('.page-loader');
        loader.classList.add('hidden');
        setTimeout(function() {
            loader.style.display = 'none';
        }, 400);
    }, 1500);
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('appointmentForm');
    const formData = new FormData(form);
    
    // Build message
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Create mailto link (opens email client with pre-filled message)
    const subject = encodeURIComponent(`Appointment Request: ${service} - ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:aautomotivemontbelvieu@gmail.com?subject=${subject}&body=${body}`;
    
    alert('Thank you for your request! An appointment request has been generated. Please send the email to schedule your appointment, or call us directly at (281) 385-1782.');
    form.reset();
}

// Smooth scroll for anchor links
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
