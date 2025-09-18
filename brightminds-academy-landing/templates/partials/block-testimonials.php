<?php
/**
 * Testimonials Block Template
 * Parent testimonials for social proof
 */
?>

<section class="section section-testimonials" id="testimonials" data-testid="section-testimonials">
    <div class="container">
        <div class="text-center mb-xl">
            <h2 data-testid="text-testimonials-headline">What Parents Are Saying</h2>
            <p class="hero-subtitle" data-testid="text-testimonials-subtitle">
                Real stories from families who've seen their children thrive at BrightMinds Academy.
            </p>
        </div>
        
        <div class="testimonial fade-in-up" data-testid="testimonial-main">
            <blockquote class="testimonial-quote">
                "When we enrolled Emma at BrightMinds Academy, she was shy and struggling with traditional learning methods. Within just three months, we saw a complete transformation. She became confident, curious, and genuinely excited about learning. The personalized approach helped her discover her love for science and art. The teachers truly understand each child's unique needs and nurture their individual talents. Emma went from dreading school to asking for extra projects! As a parent, seeing your child light up with joy for learning is priceless."
            </blockquote>
            
            <div class="testimonial-author-section">
                <div class="testimonial-avatar">
                    <img 
                        src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/pexels-max-fischer-5211472_1758180883690.jpg'); ?>" 
                        alt="Sarah Mitchell, happy parent testimonial"
                        data-testid="img-testimonial-avatar"
                        loading="lazy"
                        width="80"
                        height="80"
                    />
                </div>
                <div class="testimonial-author-info">
                    <div class="testimonial-author" data-testid="text-testimonial-author">
                        Sarah Mitchell
                    </div>
                    <div class="testimonial-role" data-testid="text-testimonial-role">
                        Mother of Emma (Age 9) • 2+ Years at BrightMinds
                    </div>
                    <div class="testimonial-program" data-testid="text-testimonial-program">
                        Creative Learning & STEM Innovation Programs
                    </div>
                </div>
            </div>
            
            <div class="testimonial-highlights">
                <div class="highlight-stats">
                    <div class="highlight-stat">
                        <span class="highlight-number">98%</span>
                        <span class="highlight-label">Improved Confidence</span>
                    </div>
                    <div class="highlight-stat">
                        <span class="highlight-number">94%</span>
                        <span class="highlight-label">Better Grades</span>
                    </div>
                    <div class="highlight-stat">
                        <span class="highlight-number">96%</span>
                        <span class="highlight-label">Love Learning</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="testimonial-grid mt-xl">
            <div class="mini-testimonial" data-testid="testimonial-mini-1">
                <p>"My son David went from struggling with math to leading his class project. The teachers here are magical!"</p>
                <cite>- Jennifer Chen, Mother of David (Age 12)</cite>
            </div>
            
            <div class="mini-testimonial" data-testid="testimonial-mini-2">
                <p>"The creativity and critical thinking skills Sophia developed here prepared her perfectly for middle school."</p>
                <cite>- Marcus Williams, Father of Sophia (Age 11)</cite>
            </div>
            
            <div class="mini-testimonial" data-testid="testimonial-mini-3">
                <p>"BrightMinds doesn't just teach subjects—they teach children how to think, create, and believe in themselves."</p>
                <cite>- Amanda Rodriguez, Mother of twins Alex & Maya (Age 8)</cite>
            </div>
        </div>
        
        <div class="text-center mt-xl">
            <a href="#contact" class="btn btn-secondary" data-testid="button-join-families">
                Join These Happy Families
            </a>
            <p class="mt-md">
                <small>⭐⭐⭐⭐⭐ Rated 4.9/5 by parents • Over 500 success stories</small>
            </p>
        </div>
    </div>
</section>

<style>
.testimonial-author-section {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
    justify-content: center;
}

.testimonial-avatar {
    flex-shrink: 0;
}

.testimonial-avatar img {
    border-radius: 50%;
    border: 4px solid var(--primary-blue);
}

.testimonial-author-info {
    text-align: left;
}

.testimonial-role {
    font-size: 0.95rem;
    color: #4a5568;
    margin-bottom: var(--spacing-xs);
}

.testimonial-program {
    font-size: 0.9rem;
    color: var(--primary-blue);
    font-weight: 500;
}

.testimonial-highlights {
    margin-top: var(--spacing-xl);
    padding: var(--spacing-lg);
    background: var(--primary-blue);
    border-radius: var(--border-radius-lg);
    color: white;
}

.highlight-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
    text-align: center;
}

.highlight-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    font-family: var(--font-family-heading);
    line-height: 1;
}

.highlight-label {
    font-size: 0.9rem;
    opacity: 0.9;
    margin-top: var(--spacing-xs);
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.mini-testimonial {
    background: white;
    padding: var(--spacing-lg);
    border-radius: var(--border-radius);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-left: 4px solid var(--primary-orange);
}

.mini-testimonial p {
    font-style: italic;
    margin-bottom: var(--spacing-md);
    color: #4a5568;
}

.mini-testimonial cite {
    font-size: 0.9rem;
    color: var(--primary-blue);
    font-weight: 500;
    font-style: normal;
}

@media (max-width: 768px) {
    .testimonial-author-section {
        flex-direction: column;
        text-align: center;
    }
    
    .testimonial-author-info {
        text-align: center;
    }
    
    .highlight-stats {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
    }
    
    .highlight-number {
        font-size: 1.5rem;
    }
    
    .testimonial-grid {
        grid-template-columns: 1fr;
    }
}
</style>