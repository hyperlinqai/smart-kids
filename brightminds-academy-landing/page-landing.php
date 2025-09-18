<?php
/**
 * Template Name: Landing Page
 * Specific template for the landing page
 */

get_header(); ?>

<div class="landing-page-wrapper">
    <?php
    // Include all landing page sections in order
    get_template_part('templates/partials/block', 'hero');
    get_template_part('templates/partials/block', 'features');
    get_template_part('templates/partials/block', 'testimonials');
    get_template_part('templates/partials/block', 'cta');
    ?>
    
    <!-- Contact/Enrollment Section -->
    <section class="section section-contact" id="contact" data-testid="section-contact">
        <div class="container">
            <div class="text-center mb-xl">
                <h2 data-testid="text-contact-headline">Ready to Transform Your Child's Future?</h2>
                <p class="hero-subtitle" data-testid="text-contact-subtitle">
                    Complete the enrollment form below and take the first step towards giving your child the BrightMinds Academy advantage. Our admissions team will contact you within 24 hours.
                </p>
            </div>
            
            <div class="contact-section-grid">
                <div class="contact-info">
                    <h3>Why Enroll Now?</h3>
                    <div class="enrollment-benefits">
                        <div class="benefit">
                            <span class="benefit-icon">🎯</span>
                            <div class="benefit-text">
                                <strong>Personalized Assessment</strong>
                                <p>Free comprehensive learning assessment to identify your child's strengths and areas for growth.</p>
                            </div>
                        </div>
                        
                        <div class="benefit">
                            <span class="benefit-icon">📚</span>
                            <div class="benefit-text">
                                <strong>Custom Learning Plan</strong>
                                <p>Tailored curriculum designed specifically for your child's learning style and interests.</p>
                            </div>
                        </div>
                        
                        <div class="benefit">
                            <span class="benefit-icon">👨‍👩‍👧‍👦</span>
                            <div class="benefit-text">
                                <strong>Family Partnership</strong>
                                <p>Regular communication and collaboration to ensure your child's success at home and school.</p>
                            </div>
                        </div>
                        
                        <div class="benefit">
                            <span class="benefit-icon">🚀</span>
                            <div class="benefit-text">
                                <strong>Future Ready Skills</strong>
                                <p>Critical thinking, creativity, and leadership skills that prepare children for tomorrow's world.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-direct">
                        <h4>Prefer to Talk? Call Us!</h4>
                        <a href="tel:+1-555-BRIGHT" class="phone-direct" data-testid="link-phone-contact">
                            <span class="phone-icon">📞</span>
                            <div class="phone-info">
                                <strong>(555) BRIGHT-1</strong>
                                <small>Monday-Friday 8AM-6PM</small>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div class="contact-form">
                    <?php
                    // Contact Form 7 integration with specific enrollment fields
                    if (function_exists('wpcf7_enqueue_scripts')) {
                        echo do_shortcode('[contact-form-7 id="1" title="BrightMinds Enrollment Form"]');
                    } else {
                        // Enhanced fallback form
                        ?>
                        <div class="form-container">
                            <form class="brightminds-enrollment-form" method="post" data-testid="form-enrollment-landing">
                                <?php wp_nonce_field('brightminds_enrollment', 'brightminds_nonce'); ?>
                                
                                <div class="form-header">
                                    <h3>Enrollment Application</h3>
                                    <p>Start your child's journey to academic excellence</p>
                                </div>
                                
                                <!-- Parent Information -->
                                <fieldset class="form-section">
                                    <legend>Parent/Guardian Information</legend>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="parent_first_name" class="form-label">First Name *</label>
                                            <input type="text" id="parent_first_name" name="parent_first_name" class="form-input" required data-testid="input-parent-first-name">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="parent_last_name" class="form-label">Last Name *</label>
                                            <input type="text" id="parent_last_name" name="parent_last_name" class="form-input" required data-testid="input-parent-last-name">
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
                                </fieldset>
                                
                                <!-- Child Information -->
                                <fieldset class="form-section">
                                    <legend>Child Information</legend>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="child_first_name" class="form-label">Child's First Name *</label>
                                            <input type="text" id="child_first_name" name="child_first_name" class="form-input" required data-testid="input-child-first-name">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="child_last_name" class="form-label">Child's Last Name *</label>
                                            <input type="text" id="child_last_name" name="child_last_name" class="form-input" required data-testid="input-child-last-name">
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="child_age" class="form-label">Child's Age *</label>
                                            <select id="child_age" name="child_age" class="form-select" required data-testid="select-child-age">
                                                <option value="">Select Age</option>
                                                <?php for ($age = 5; $age <= 15; $age++) : ?>
                                                    <option value="<?php echo $age; ?>"><?php echo $age; ?> years old</option>
                                                <?php endfor; ?>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="current_grade" class="form-label">Current Grade Level</label>
                                            <select id="current_grade" name="current_grade" class="form-select" data-testid="select-current-grade">
                                                <option value="">Select Grade</option>
                                                <option value="kindergarten">Kindergarten</option>
                                                <option value="1st">1st Grade</option>
                                                <option value="2nd">2nd Grade</option>
                                                <option value="3rd">3rd Grade</option>
                                                <option value="4th">4th Grade</option>
                                                <option value="5th">5th Grade</option>
                                                <option value="6th">6th Grade</option>
                                                <option value="7th">7th Grade</option>
                                                <option value="8th">8th Grade</option>
                                                <option value="9th">9th Grade</option>
                                                <option value="10th">10th Grade</option>
                                            </select>
                                        </div>
                                    </div>
                                </fieldset>
                                
                                <!-- Program Interest -->
                                <fieldset class="form-section">
                                    <legend>Program Interest</legend>
                                    
                                    <div class="form-group">
                                        <label for="program_interest" class="form-label">Which program interests you most? *</label>
                                        <select id="program_interest" name="program_interest" class="form-select" required data-testid="select-program-interest">
                                            <option value="">Select Program</option>
                                            <option value="creative-learning">Creative Learning Program - Nurturing imagination and artistic expression</option>
                                            <option value="academic-excellence">Academic Excellence Program - Advanced curriculum and college prep</option>
                                            <option value="stem-innovation">STEM Innovation Program - Science, technology, engineering, math focus</option>
                                            <option value="arts-culture">Arts & Culture Program - Music, drama, visual arts, literature</option>
                                            <option value="leadership">Leadership Development - Communication, teamwork, problem-solving</option>
                                            <option value="full-program">Full Comprehensive Program - All subjects and enrichment</option>
                                            <option value="assessment-needed">Not sure - I'd like an assessment to help decide</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="start_date" class="form-label">Preferred Start Date</label>
                                        <select id="start_date" name="start_date" class="form-select" data-testid="select-start-date">
                                            <option value="">Select Start Date</option>
                                            <option value="immediate">As soon as possible</option>
                                            <option value="next-semester">Next semester</option>
                                            <option value="next-year">Next academic year</option>
                                            <option value="flexible">Flexible - let's discuss</option>
                                        </select>
                                    </div>
                                </fieldset>
                                
                                <!-- Additional Information -->
                                <fieldset class="form-section">
                                    <legend>Tell Us About Your Child</legend>
                                    
                                    <div class="form-group">
                                        <label for="child_interests" class="form-label">What are your child's main interests and hobbies?</label>
                                        <textarea id="child_interests" name="child_interests" class="form-textarea" rows="3" placeholder="e.g., loves building with LEGOs, enjoys reading fantasy books, plays soccer, interested in coding..." data-testid="textarea-child-interests"></textarea>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="learning_concerns" class="form-label">Any learning challenges or special needs we should know about?</label>
                                        <textarea id="learning_concerns" name="learning_concerns" class="form-textarea" rows="3" placeholder="This helps us provide the best support for your child..." data-testid="textarea-learning-concerns"></textarea>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="questions" class="form-label">Questions or additional comments</label>
                                        <textarea id="questions" name="questions" class="form-textarea" rows="3" placeholder="Any questions about our programs, schedule, or enrollment process?" data-testid="textarea-questions"></textarea>
                                    </div>
                                </fieldset>
                                
                                <!-- Honeypot for spam protection -->
                                <div class="hidden">
                                    <input type="text" name="website" tabindex="-1" autocomplete="off">
                                </div>
                                
                                <div class="form-submit">
                                    <button type="submit" class="btn btn-primary btn-xl" data-testid="button-submit-enrollment">
                                        🎓 Submit Enrollment Application
                                    </button>
                                    
                                    <p class="form-disclaimer">
                                        <small>* Required fields. By submitting this form, you agree to our privacy policy. We will contact you within 24 hours to schedule your child's complimentary assessment and discuss next steps.</small>
                                    </p>
                                </div>
                            </form>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </div>
    </section>
    
    <?php get_template_part('templates/partials/block', 'footer-cta'); ?>
</div>

<?php get_footer(); ?>

<style>
.landing-page-wrapper {
    overflow-x: hidden;
}

.contact-section-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: var(--spacing-2xl);
    align-items: start;
}

.contact-info {
    position: sticky;
    top: var(--spacing-xl);
}

.enrollment-benefits {
    margin-bottom: var(--spacing-xl);
}

.benefit {
    display: flex;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
    align-items: flex-start;
}

.benefit-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: var(--spacing-xs);
}

.benefit-text strong {
    display: block;
    color: var(--primary-blue);
    margin-bottom: var(--spacing-xs);
}

.benefit-text p {
    margin: 0;
    font-size: 0.95rem;
    color: #4a5568;
}

.contact-direct {
    background: var(--primary-light);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    border: 2px solid var(--primary-blue);
}

.phone-direct {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    color: var(--foreground);
    text-decoration: none;
    transition: all 0.3s ease;
}

.phone-direct:hover {
    color: var(--primary-orange);
}

.phone-icon {
    font-size: 2rem;
}

.phone-info strong {
    display: block;
    font-size: 1.2rem;
    color: var(--primary-blue);
}

.phone-info small {
    color: #4a5568;
}

.form-container {
    background: white;
    border-radius: var(--border-radius-lg);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    overflow: hidden;
}

.form-header {
    background: var(--primary-blue);
    color: white;
    padding: var(--spacing-xl);
    text-align: center;
}

.form-header h3 {
    color: white;
    margin-bottom: var(--spacing-sm);
}

.form-header p {
    margin: 0;
    opacity: 0.9;
}

.brightminds-enrollment-form {
    padding: var(--spacing-xl);
}

.form-section {
    border: none;
    margin-bottom: var(--spacing-xl);
    padding: 0;
}

.form-section legend {
    font-weight: 600;
    color: var(--primary-orange);
    margin-bottom: var(--spacing-lg);
    font-size: 1.1rem;
}

.form-submit {
    text-align: center;
    border-top: 2px solid var(--primary-light);
    padding-top: var(--spacing-xl);
}

.form-disclaimer {
    margin-top: var(--spacing-lg);
    text-align: center;
    color: #4a5568;
    line-height: 1.4;
}

@media (max-width: 968px) {
    .contact-section-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
    }
    
    .contact-info {
        position: static;
        order: 2;
    }
    
    .contact-form {
        order: 1;
    }
}

@media (max-width: 768px) {
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .benefit {
        flex-direction: column;
        text-align: center;
    }
    
    .phone-direct {
        justify-content: center;
    }
}
</style>