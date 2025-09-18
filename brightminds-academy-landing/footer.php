</main>

<footer class="footer" role="contentinfo">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h4>BrightMinds Academy</h4>
                <p>Empowering young minds through innovative education. We believe every child has the potential to shine bright and achieve greatness.</p>
                <div class="footer-contact">
                    <p><strong>📞 Phone:</strong> <a href="tel:+1-555-BRIGHT">+1 (555) BRIGHT-1</a></p>
                    <p><strong>✉️ Email:</strong> <a href="mailto:hello@brightmindsacademy.com">hello@brightmindsacademy.com</a></p>
                    <p><strong>📍 Address:</strong> 123 Education Lane, Learning City, State 12345</p>
                </div>
            </div>
            
            <div class="footer-section">
                <h4>Our Programs</h4>
                <?php if (is_active_sidebar('footer-programs')) : ?>
                    <?php dynamic_sidebar('footer-programs'); ?>
                <?php else : ?>
                    <ul>
                        <li><a href="#creative-learning">Creative Learning Program</a></li>
                        <li><a href="#academic-excellence">Academic Excellence Program</a></li>
                        <li><a href="#stem-innovation">STEM Innovation Program</a></li>
                        <li><a href="#arts-culture">Arts & Culture Program</a></li>
                        <li><a href="#leadership">Leadership Development</a></li>
                    </ul>
                <?php endif; ?>
            </div>
            
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#about" data-testid="link-about-footer">About Us</a></li>
                    <li><a href="#admission" data-testid="link-admission-footer">Admission Process</a></li>
                    <li><a href="#calendar" data-testid="link-calendar-footer">Academic Calendar</a></li>
                    <li><a href="#parent-resources" data-testid="link-resources-footer">Parent Resources</a></li>
                    <li><a href="#news" data-testid="link-news-footer">News & Events</a></li>
                    <li><a href="#careers" data-testid="link-careers-footer">Careers</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>Connect With Us</h4>
                <div class="social-links">
                    <a href="https://facebook.com/brightmindsacademy" target="_blank" rel="noopener noreferrer" data-testid="link-facebook-footer" aria-label="Follow us on Facebook">
                        📘 Facebook
                    </a>
                    <a href="https://instagram.com/brightmindsacademy" target="_blank" rel="noopener noreferrer" data-testid="link-instagram-footer" aria-label="Follow us on Instagram">
                        📷 Instagram
                    </a>
                    <a href="https://twitter.com/brightmindsacad" target="_blank" rel="noopener noreferrer" data-testid="link-twitter-footer" aria-label="Follow us on Twitter">
                        🐦 Twitter
                    </a>
                    <a href="https://linkedin.com/company/brightminds-academy" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin-footer" aria-label="Connect on LinkedIn">
                        💼 LinkedIn
                    </a>
                </div>
                
                <div class="newsletter-signup mt-lg">
                    <h5>Stay Updated</h5>
                    <p>Get the latest news about programs and enrollment.</p>
                    <form class="newsletter-form" data-testid="form-newsletter">
                        <input type="email" placeholder="Your email address" class="form-input" required data-testid="input-newsletter-email">
                        <button type="submit" class="btn btn-secondary" data-testid="button-newsletter-submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <p>&copy; <?php echo date('Y'); ?> BrightMinds Academy. All rights reserved.</p>
                <div class="footer-links">
                    <a href="#privacy-policy" data-testid="link-privacy-footer">Privacy Policy</a> |
                    <a href="#terms" data-testid="link-terms-footer">Terms of Service</a> |
                    <a href="#accessibility" data-testid="link-accessibility-footer">Accessibility</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<script>
// Newsletter subscription handler
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('[data-testid="form-newsletter"]');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('[data-testid="input-newsletter-email"]').value;
            
            // Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'newsletter_signup', {
                    'event_category': 'engagement',
                    'event_label': email
                });
            }
            
            // You can integrate with your email service here
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
});
</script>

</body>
</html>