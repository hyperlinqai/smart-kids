<?php
/**
 * Footer CTA Block Template
 * Final conversion opportunity before footer
 */
?>

<section class="section section-footer-cta" id="final-cta" data-testid="section-footer-cta">
    <div class="container">
        <div class="footer-cta-content">
            <div class="footer-cta-text">
                <h2 data-testid="text-footer-cta-headline">
                    Don't Wait—Your Child's Future Starts Today
                </h2>
                <p data-testid="text-footer-cta-subtitle">
                    Every day is an opportunity for growth. Give your child the educational foundation they deserve at BrightMinds Academy.
                </p>
                
                <div class="footer-cta-stats">
                    <div class="stat-item">
                        <span class="stat-number">15+</span>
                        <span class="stat-label">Years of Excellence</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">500+</span>
                        <span class="stat-label">Success Stories</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">98%</span>
                        <span class="stat-label">Parent Satisfaction</span>
                    </div>
                </div>
            </div>
            
            <div class="footer-cta-actions">
                <div class="action-primary">
                    <a href="#contact" class="btn btn-primary btn-xl" data-testid="button-start-journey">
                        🌟 Start Your Child's Journey
                    </a>
                    <p class="action-note">Schedule your free consultation today</p>
                </div>
                
                <div class="action-secondary">
                    <p class="or-divider">or</p>
                    <a href="tel:+1-555-BRIGHT" class="phone-cta" data-testid="link-phone-footer-cta">
                        <span class="phone-icon">📞</span>
                        <span class="phone-text">
                            <strong>Call Now: (555) BRIGHT-1</strong>
                            <small>Speak with our admissions team</small>
                        </span>
                    </a>
                </div>
                
                <div class="footer-cta-trust">
                    <div class="trust-badges">
                        <div class="badge">
                            <span class="badge-icon">🏆</span>
                            <span class="badge-text">Award-Winning<br>Curriculum</span>
                        </div>
                        <div class="badge">
                            <span class="badge-icon">🔒</span>
                            <span class="badge-text">Safe & Secure<br>Environment</span>
                        </div>
                        <div class="badge">
                            <span class="badge-icon">👨‍🏫</span>
                            <span class="badge-text">Certified<br>Educators</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-cta-urgency">
            <div class="urgency-banner">
                <span class="urgency-icon">⚡</span>
                <span class="urgency-text">
                    <strong>Limited Time Offer:</strong> Free assessment session with enrollment before month-end
                </span>
                <span class="urgency-timer" data-testid="text-urgency-timer">
                    Expires in: <span id="countdown-timer">--</span>
                </span>
            </div>
        </div>
    </div>
</section>

<style>
.section-footer-cta {
    background: linear-gradient(135deg, var(--foreground) 0%, #1a202c 100%);
    color: white;
    position: relative;
    overflow: hidden;
}

.section-footer-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('<?php echo esc_url(get_template_directory_uri() . "/assets/images/pexels-max-fischer-5212335_1758180883690.jpg"); ?>') center/cover;
    opacity: 0.1;
    z-index: 0;
}

.footer-cta-content {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
    align-items: center;
}

.footer-cta-stats {
    display: flex;
    gap: var(--spacing-lg);
    margin-top: var(--spacing-lg);
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-orange);
    font-family: var(--font-family-heading);
    line-height: 1;
}

.stat-label {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: var(--spacing-xs);
}

.footer-cta-actions {
    text-align: center;
}

.action-primary {
    margin-bottom: var(--spacing-xl);
}

.btn-xl {
    padding: var(--spacing-lg) var(--spacing-2xl);
    font-size: 1.3rem;
    border-radius: var(--border-radius-lg);
}

.action-note {
    margin-top: var(--spacing-sm);
    font-size: 0.9rem;
    opacity: 0.8;
}

.or-divider {
    margin: var(--spacing-lg) 0;
    font-size: 1.1rem;
    opacity: 0.7;
}

.phone-cta {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-md);
    color: var(--primary-blue);
    text-decoration: none;
    background: rgba(255, 255, 255, 0.1);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.phone-cta:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.phone-icon {
    font-size: 2rem;
}

.phone-text {
    text-align: left;
}

.phone-text strong {
    display: block;
    color: white;
    margin-bottom: var(--spacing-xs);
}

.phone-text small {
    color: rgba(255, 255, 255, 0.8);
}

.footer-cta-trust {
    margin-top: var(--spacing-xl);
}

.trust-badges {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
}

.badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    backdrop-filter: blur(5px);
    flex: 1;
    max-width: 120px;
}

.badge-icon {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-xs);
}

.badge-text {
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.2;
}

.footer-cta-urgency {
    margin-top: var(--spacing-xl);
    position: relative;
    z-index: 1;
}

.urgency-banner {
    background: var(--primary-red);
    color: white;
    padding: var(--spacing-md);
    border-radius: var(--border-radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
    flex-wrap: wrap;
    text-align: center;
}

.urgency-icon {
    font-size: 1.5rem;
    animation: flash 1.5s infinite;
}

@keyframes flash {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.5; }
}

.urgency-timer {
    font-weight: 600;
    color: var(--primary-green);
}

@media (max-width: 968px) {
    .footer-cta-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
        text-align: center;
    }
    
    .footer-cta-stats {
        justify-content: center;
    }
    
    .trust-badges {
        flex-direction: column;
        max-width: 300px;
        margin: 0 auto;
    }
    
    .badge {
        flex-direction: row;
        max-width: none;
        justify-content: center;
    }
    
    .urgency-banner {
        flex-direction: column;
        gap: var(--spacing-sm);
    }
}

@media (max-width: 768px) {
    .footer-cta-stats {
        flex-direction: column;
        gap: var(--spacing-md);
    }
    
    .stat-number {
        font-size: 1.5rem;
    }
    
    .phone-cta {
        flex-direction: column;
        text-align: center;
    }
    
    .phone-text {
        text-align: center;
    }
}
</style>

<script>
// Countdown timer for urgency
document.addEventListener('DOMContentLoaded', function() {
    const timer = document.getElementById('countdown-timer');
    if (timer) {
        // Calculate end of month
        const now = new Date();
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
        
        function updateTimer() {
            const now = new Date();
            const timeLeft = endOfMonth - now;
            
            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                
                timer.textContent = `${days}d ${hours}h ${minutes}m`;
            } else {
                timer.textContent = 'Offer Expired';
            }
        }
        
        updateTimer();
        setInterval(updateTimer, 60000); // Update every minute
    }
});
</script>