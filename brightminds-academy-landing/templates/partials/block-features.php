<?php
/**
 * Features Block Template
 * Highlighting 3 core educational benefits
 */
?>

<section class="section section-features" id="programs" data-testid="section-features">
    <div class="container">
        <div class="text-center mb-xl">
            <h2 data-testid="text-features-headline">Why Parents Choose BrightMinds Academy</h2>
            <p class="hero-subtitle" data-testid="text-features-subtitle">
                Three core pillars that make our educational approach uniquely effective for developing confident, capable, and creative learners.
            </p>
        </div>
        
        <div class="grid grid-3">
            <div class="feature-card fade-in-up" data-testid="card-feature-personalized">
                <div class="feature-icon" style="background: var(--primary-blue);">
                    <span role="img" aria-label="Personalized learning icon">🎯</span>
                </div>
                <h3>Personalized Learning Paths</h3>
                <p>Every child learns differently. Our adaptive curriculum identifies your child's unique learning style, strengths, and interests to create a customized educational journey that maximizes their potential and builds confidence.</p>
                <div class="feature-benefits">
                    <ul>
                        <li>✓ Individual learning assessments</li>
                        <li>✓ Flexible pace and style adaptation</li>
                        <li>✓ Regular progress tracking with parents</li>
                        <li>✓ One-on-one mentoring sessions</li>
                    </ul>
                </div>
                <img 
                    src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/pexels-august-de-richelieu-4260325_1758180883690.jpg'); ?>" 
                    alt="Parent and child learning together on laptop, showing personalized education approach"
                    data-testid="img-feature-personalized"
                    loading="lazy"
                    class="feature-image"
                />
            </div>
            
            <div class="feature-card fade-in-up" data-testid="card-feature-creative">
                <div class="feature-icon" style="background: var(--primary-green);">
                    <span role="img" aria-label="Creative development icon">🎨</span>
                </div>
                <h3>Creative & Critical Thinking</h3>
                <p>Beyond academics, we nurture imagination and problem-solving skills through hands-on projects, collaborative learning, and innovative STEAM programs that prepare children for tomorrow's challenges.</p>
                <div class="feature-benefits">
                    <ul>
                        <li>✓ Project-based learning experiences</li>
                        <li>✓ Arts integration across subjects</li>
                        <li>✓ Innovation labs and maker spaces</li>
                        <li>✓ Public speaking and presentation skills</li>
                    </ul>
                </div>
                <img 
                    src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/pexels-rdne-8035136_1758180883690.jpg'); ?>" 
                    alt="Child proudly showing creative project outdoors with other students"
                    data-testid="img-feature-creative"
                    loading="lazy"
                    class="feature-image"
                />
            </div>
            
            <div class="feature-card fade-in-up" data-testid="card-feature-community">
                <div class="feature-icon" style="background: var(--primary-orange);">
                    <span role="img" aria-label="Supportive community icon">🤝</span>
                </div>
                <h3>Supportive Learning Community</h3>
                <p>A nurturing environment where children feel safe to explore, make mistakes, and grow. Our experienced educators and tight-knit community create lasting friendships and strong family partnerships.</p>
                <div class="feature-benefits">
                    <ul>
                        <li>✓ Small class sizes (max 12 students)</li>
                        <li>✓ Certified and passionate teachers</li>
                        <li>✓ Regular parent-teacher collaboration</li>
                        <li>✓ Inclusive and diverse community</li>
                    </ul>
                </div>
                <img 
                    src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/pexels-pavel-danilyuk-8423410_1758180883689.jpg'); ?>" 
                    alt="Teacher working closely with students in small group setting"
                    data-testid="img-feature-community"
                    loading="lazy"
                    class="feature-image"
                />
            </div>
        </div>
        
        <div class="text-center mt-xl">
            <a href="#contact" class="btn btn-primary btn-lg" data-testid="button-schedule-visit">
                🗓️ Schedule a Campus Visit
            </a>
            <p class="mt-md">
                <small>See our programs in action and meet our dedicated team</small>
            </p>
        </div>
    </div>
</section>

<style>
.feature-benefits {
    margin: var(--spacing-lg) 0;
}

.feature-benefits ul {
    list-style: none;
    padding: 0;
}

.feature-benefits li {
    padding: var(--spacing-xs) 0;
    color: #4a5568;
    font-size: 0.95rem;
}

.feature-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--border-radius);
    margin-top: var(--spacing-lg);
}

.btn-lg {
    padding: var(--spacing-lg) var(--spacing-2xl);
    font-size: 1.2rem;
}

@media (max-width: 768px) {
    .feature-image {
        height: 150px;
    }
    
    .feature-benefits li {
        font-size: 0.9rem;
    }
}
</style>