<?php
/**
 * Main template file for BrightMinds Academy Landing Theme
 */

get_header(); ?>

<?php
// Include all landing page sections
get_template_part('templates/partials/block', 'hero');
get_template_part('templates/partials/block', 'features');
get_template_part('templates/partials/block', 'testimonials');
get_template_part('templates/partials/block', 'cta');

// Contact Form Section
?>
<section class="section section-contact" id="contact" data-testid="section-contact">
    <div class="container">
        <div class="text-center mb-xl">
            <h2 data-testid="text-contact-headline">Ready to Enroll? Let's Get Started!</h2>
            <p class="hero-subtitle" data-testid="text-contact-subtitle">
                Fill out the form below and our admissions team will contact you within 24 hours to discuss your child's educational journey.
            </p>
        </div>
        
        <div class="contact-form">
            <?php
            // Contact Form 7 integration - replace [shortcode] with actual form ID
            if (function_exists('wpcf7_enqueue_scripts')) {
                echo do_shortcode('[contact-form-7 id="1" title="Enrollment Form"]');
            } else {
                // Fallback HTML form if Contact Form 7 is not active
                ?>
                <form class="brightminds-contact-form" method="post" data-testid="form-enrollment">
                    <?php wp_nonce_field('brightminds_contact', 'brightminds_nonce'); ?>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="parent_name" class="form-label">Parent/Guardian Name *</label>
                            <input type="text" id="parent_name" name="parent_name" class="form-input" required data-testid="input-parent-name">
                        </div>
                        
                        <div class="form-group">
                            <label for="child_name" class="form-label">Child's Name *</label>
                            <input type="text" id="child_name" name="child_name" class="form-input" required data-testid="input-child-name">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="email" class="form-label">Email Address *</label>
                            <input type="email" id="email" name="email" class="form-input" required data-testid="input-email">
                        </div>
                        
                        <div class="form-group">
                            <label for="phone" class="form-label">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" class="form-input" required data-testid="input-phone">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="child_age" class="form-label">Child's Age *</label>
                            <select id="child_age" name="child_age" class="form-select" required data-testid="select-child-age">
                                <option value="">Select Age</option>
                                <option value="5">5 years old</option>
                                <option value="6">6 years old</option>
                                <option value="7">7 years old</option>
                                <option value="8">8 years old</option>
                                <option value="9">9 years old</option>
                                <option value="10">10 years old</option>
                                <option value="11">11 years old</option>
                                <option value="12">12 years old</option>
                                <option value="13">13 years old</option>
                                <option value="14">14 years old</option>
                                <option value="15">15 years old</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="program_interest" class="form-label">Program of Interest *</label>
                            <select id="program_interest" name="program_interest" class="form-select" required data-testid="select-program-interest">
                                <option value="">Select Program</option>
                                <option value="creative-learning">Creative Learning Program</option>
                                <option value="academic-excellence">Academic Excellence Program</option>
                                <option value="stem-innovation">STEM Innovation Program</option>
                                <option value="arts-culture">Arts & Culture Program</option>
                                <option value="leadership">Leadership Development</option>
                                <option value="not-sure">Not sure yet - help me decide</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="message" class="form-label">Tell us about your child's interests and any specific needs</label>
                        <textarea id="message" name="message" class="form-textarea" rows="4" placeholder="Share your child's interests, learning style, or any questions you have about our programs..." data-testid="textarea-message"></textarea>
                    </div>
                    
                    <!-- Honeypot field for spam protection -->
                    <div class="hidden">
                        <input type="text" name="website" tabindex="-1" autocomplete="off">
                    </div>
                    
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-lg" data-testid="button-submit-enrollment">
                            🎓 Submit Enrollment Inquiry
                        </button>
                    </div>
                    
                    <p class="form-note">
                        <small>* Required fields. We respect your privacy and will never share your information. Our team will contact you within 24 hours to schedule your child's assessment.</small>
                    </p>
                </form>
                <?php
            }
            ?>
        </div>
    </div>
</section>

<?php
get_template_part('templates/partials/block', 'footer-cta');
get_footer();
?>

<style>
.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
}

.form-note {
    text-align: center;
    color: #4a5568;
    margin-top: var(--spacing-md);
}

@media (max-width: 768px) {
    .form-row {
        grid-template-columns: 1fr;
    }
}
</style>