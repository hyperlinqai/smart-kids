<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="header" role="banner">
    <div class="container">
        <div class="header-content">
            <?php if (has_custom_logo()) : ?>
                <div class="logo">
                    <?php the_custom_logo(); ?>
                </div>
            <?php else : ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="logo" rel="home">
                    🌟 BrightMinds Academy
                </a>
            <?php endif; ?>
            
            <nav class="main-navigation" role="navigation" aria-label="<?php esc_attr_e('Primary Navigation', 'brightminds'); ?>">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'nav',
                    'container'      => false,
                    'fallback_cb'    => 'brightminds_fallback_menu',
                ));
                ?>
            </nav>
            
            <div class="header-cta">
                <a href="#contact" class="btn btn-primary" data-testid="button-enroll-header">
                    Enroll Now
                </a>
            </div>
        </div>
    </div>
</header>

<main id="main" class="main-content" role="main">
<?php

/**
 * Fallback menu if no menu is assigned
 */
function brightminds_fallback_menu() {
    ?>
    <ul class="nav">
        <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <?php
}