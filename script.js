document.addEventListener('DOMContentLoaded', function() {

    // Testimonial Slider
    const testimonials = [
        {
            quote: "Shivam's strategic insights were instrumental in our company's growth. His consulting is top-notch.",
            name: "Rohan Sharma",
            title: "CEO, Tech Solutions Inc.",
            img: "images/rohan preet.jpg"
        },
        {
            quote: "The digital marketing campaign Shivam designed for us doubled our online engagement in just three months.",
            name: "Priya Singh",
            title: "Marketing Head, Fashion Hub",
            img: "images/priya singh.jpg"
        },
        {
            quote: "Working with Shivam on my personal brand was a game-changer. I've seen a significant increase in opportunities.",
            name: "Amit Patel",
            title: "Financial Analyst",
            img: "images/amit patel.jpg"
        }
    ];

    const slider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if (slider) {
        testimonials.forEach(t => {
            const item = document.createElement('div');
            item.classList.add('testimonial-item');
            item.innerHTML = `
                <img src="${t.img}" alt="${t.name}">
                <p class="quote">\"${t.quote}\"</p>
                <p class="author">- ${t.name}, ${t.title}</p>
            `;
            slider.appendChild(item);
        });

        const items = document.querySelectorAll('.testimonial-item');
        let current = 0;

        function showTestimonial(index) {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
        }

        function nextTestimonial() {
            current = (current + 1) % items.length;
            showTestimonial(current);
        }
        
        function prevTestimonial() {
            current = (current - 1 + items.length) % items.length;
            showTestimonial(current);
        }

        if(nextBtn && prevBtn) {
            nextBtn.addEventListener('click', nextTestimonial);
            prevBtn.addEventListener('click', prevTestimonial);
        }

        showTestimonial(current);
        setInterval(nextTestimonial, 7000); // Change testimonial every 7 seconds
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

});
