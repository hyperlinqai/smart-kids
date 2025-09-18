<?php
/**
 * Call-to-Action Block Template
 * Enrollment-focused CTA section
 */
?>

<section class="section section-cta" id="enrollment-cta" data-testid="section-cta">
    <div class="container">
        <div class="cta-content text-center fade-in-up">
            <h2 data-testid="text-cta-headline">
                Ready to Give Your Child the BrightMinds Advantage?
            </h2>
            
            <p class="cta-subtitle" data-testid="text-cta-subtitle">
                Join hundreds of families who've discovered the difference personalized education makes. Limited spots available for the upcoming semester.
            </p>
            
            <div class="cta-urgency" data-testid="section-cta-urgency">
                <p class="urgency-text">
                    <span class="urgency-icon">⏰</span>
                    <strong>Early Bird Special:</strong> Enroll by the end of this month and save $500 on tuition plus receive a complimentary assessment session.
                </p>
            </div>
            
            <div class="cta-actions">
                <a href="#contact" class="btn btn-primary btn-lg cta-primary" data-testid="button-enroll-main-cta">
                    🎓 Secure Your Child's Spot
                </a>
                <a href="tel:+1-555-BRIGHT" class="btn btn-outline btn-lg cta-secondary" data-testid="button-call-cta">
                    📞 Call Now: (555) BRIGHT-1
                </a>
            </div>
            
            <div class="cta-guarantee" data-testid="section-cta-guarantee">
                <div class="guarantee-content">
                    <span class="guarantee-icon">🛡️</span>
                    <div class="guarantee-text">
                        <strong>100% Satisfaction Guarantee</strong>
                        <p>If you're not completely satisfied with your child's progress in the first 30 days, we'll provide a full refund. No questions asked.</p>
                    </div>
                </div>
            </div>
            
            <div class="cta-benefits-quick">
                <h3>What Your Enrollment Includes:</h3>
                <div class="benefits-grid">
                    <div class="benefit-item">
                        <span class="benefit-icon">✅</span>
                        <span>Comprehensive Learning Assessment</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">✅</span>
                        <span>Personalized Learning Plan</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">✅</span>
                        <span>Weekly Progress Reports</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">✅</span>
                        <span>Parent-Teacher Conferences</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">✅</span>
                        <span>Access to Innovation Labs</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">✅</span>
                        <span>After-School Support Programs</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
.section-cta {
    position: relative;
    overflow: hidden;
}

.section-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('<?php echo esc_url(get_template_directory_uri() . "/assets/images/pexels-tima-miroshnichenko-5427648_1758180883690.jpg"); ?>') center/cover;
    opacity: 0.1;
    z-index: 0;
}

.cta-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
}

.cta-subtitle {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-xl);
    opacity: 0.95;
}

.cta-urgency {
    background: rgba(255, 255, 255, 0.2);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    margin-bottom: var(--spacing-xl);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.urgency-text {
    font-size: 1.1rem;
    margin: 0;
}

.urgency-icon {
    font-size: 1.5rem;
    margin-right: var(--spacing-sm);
}

.cta-actions {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: var(--spacing-xl);
}

.cta-primary {
    animation: pulse-glow 2s infinite;
}

@keyframes pulse-glow {
    0%, 100% {
        box-shadow: 0 4px 15px rgba(255, 145, 77, 0.3);
    }
    50% {
        box-shadow: 0 8px 25px rgba(255, 145, 77, 0.6);
        transform: translateY(-2px);
    }
}

.cta-guarantee {
    background: rgba(255, 255, 255, 0.9);
    color: var(--foreground);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    margin-bottom: var(--spacing-xl);
}

.guarantee-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    text-align: left;
    max-width: 600px;
    margin: 0 auto;
}

.guarantee-icon {
    font-size: 2rem;
    flex-shrink: 0;
}

.guarantee-text strong {
    color: var(--primary-blue);
    display: block;
    margin-bottom: var(--spacing-xs);
}

.guarantee-text p {
    margin: 0;
    font-size: 0.95rem;
    color: #4a5568;
}

.cta-benefits-quick h3 {
    color: white;
    margin-bottom: var(--spacing-lg);
    font-size: 1.5rem;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
    text-align: left;
}

.benefit-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    background: rgba(255, 255, 255, 0.1);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    backdrop-filter: blur(5px);
}

.benefit-icon {
    color: var(--primary-green);
    font-size: 1.2rem;
    flex-shrink: 0;
}

@media (max-width: 768px) {
    .cta-actions {
        flex-direction: column;
        align-items: center;
    }
    
    .btn-lg {
        width: 100%;
        max-width: 300px;
    }
    
    .guarantee-content {
        flex-direction: column;
        text-align: center;
    }
    
    .guarantee-text {
        text-align: center;
    }
    
    .benefits-grid {
        grid-template-columns: 1fr;
    }
}
</style>