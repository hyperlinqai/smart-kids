<?php
/**
 * Hero Block Template
 * Compelling headline for educational service targeting parents
 */
?>

<section class="section section-hero" id="hero" data-testid="section-hero">
    <div class="container">
        <div class="hero fade-in-up">
            <div class="hero-content">
                <h1 data-testid="text-hero-headline">
                    Unlock Your Child's Brilliant Future at BrightMinds Academy
                </h1>
                
                <p class="hero-subtitle" data-testid="text-hero-subtitle">
                    Where children ages 5-15 discover their unique talents through innovative learning programs that blend creativity, critical thinking, and academic excellence in a nurturing environment.
                </p>
                
                <div class="hero-actions">
                    <a href="#contact" class="btn btn-primary" data-testid="button-enroll-primary">
                        🚀 Enroll Your Child Today
                    </a>
                    <a href="#programs" class="btn btn-outline" data-testid="button-explore-programs">
                        🎯 Explore Our Programs
                    </a>
                </div>
                
                <div class="hero-trust-signals">
                    <div class="trust-stats">
                        <div class="trust-stat">
                            <span class="trust-number" data-testid="text-trust-students">500+</span>
                            <span class="trust-label">Happy Students</span>
                        </div>
                        <div class="trust-stat">
                            <span class="trust-number" data-testid="text-trust-years">15+</span>
                            <span class="trust-label">Years Experience</span>
                        </div>
                        <div class="trust-stat">
                            <span class="trust-number" data-testid="text-trust-satisfaction">98%</span>
                            <span class="trust-label">Parent Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="hero-image">
                <img 
                    src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/pexels-rdne-8035138_1758180883690.jpg'); ?>" 
                    alt="Happy children learning together in a bright, engaging classroom environment"
                    data-testid="img-hero-main"
                    loading="eager"
                    width="1200"
                    height="600"
                />
            </div>
        </div>
    </div>
</section>

<style>
.hero-trust-signals {
    margin-top: var(--spacing-xl);
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.9);
    border-radius: var(--border-radius-lg);
    backdrop-filter: blur(10px);
}

.trust-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--spacing-lg);
    text-align: center;
}

.trust-stat {
    display: flex;
    flex-direction: column;
}

.trust-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-orange);
    font-family: var(--font-family-heading);
    line-height: 1;
}

.trust-label {
    font-size: 0.9rem;
    color: #4a5568;
    margin-top: var(--spacing-xs);
}

@media (max-width: 768px) {
    .trust-stats {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing-md);
    }
    
    .trust-number {
        font-size: 1.5rem;
    }
    
    .trust-label {
        font-size: 0.8rem;
    }
}
</style>