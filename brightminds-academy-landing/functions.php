<?php
/**
 * BrightMinds Academy Landing Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function brightminds_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ));
    add_theme_support('responsive-embeds');
    add_theme_support('custom-logo');
    
    // Add image sizes for educational content
    add_image_size('hero-image', 1200, 600, true);
    add_image_size('feature-image', 400, 300, true);
    add_image_size('testimonial-avatar', 80, 80, true);
    
    // Register navigation menu
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'brightminds'),
        'footer' => __('Footer Menu', 'brightminds')
    ));
}
add_action('after_setup_theme', 'brightminds_setup');

/**
 * Enqueue scripts and styles
 */
function brightminds_scripts() {
    // Google Fonts
    wp_enqueue_style('brightminds-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700&display=swap', array(), null);
    
    // Main stylesheet
    wp_enqueue_style('brightminds-style', get_stylesheet_uri(), array('brightminds-fonts'), wp_get_theme()->get('Version'));
    
    // Main JavaScript
    wp_enqueue_script('brightminds-script', get_template_directory_uri() . '/assets/js/main.js', array(), wp_get_theme()->get('Version'), true);
    
    // Add inline styles for dynamic colors
    $custom_css = "
        :root {
            --theme-primary: #ff914d;
            --theme-secondary: #68cef5;
            --theme-accent: #c9e265;
            --theme-highlight: #ec104d;
            --theme-background: #f5fcff;
        }
    ";
    wp_add_inline_style('brightminds-style', $custom_css);
}
add_action('wp_enqueue_scripts', 'brightminds_scripts');

/**
 * Add SEO meta tags
 */
function brightminds_add_meta_tags() {
    if (is_page_template('page-landing.php') || is_front_page()) {
        ?>
        <meta name="description" content="BrightMinds Academy - Innovative education programs for children aged 5-15. Discover personalized learning, creative development, and academic excellence in a nurturing environment.">
        <meta name="keywords" content="education, children learning, academic programs, creative development, personalized education, kids education">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>">
        <meta property="og:title" content="BrightMinds Academy - Innovative Education for Children 5-15">
        <meta property="og:description" content="Discover personalized learning programs that nurture creativity, critical thinking, and academic excellence. Enroll your child today!">
        <meta property="og:image" content="<?php echo esc_url(get_template_directory_uri() . '/assets/images/pexels-rdne-8035138_1758180883690.jpg'); ?>">
        
        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="<?php echo esc_url(home_url('/')); ?>">
        <meta property="twitter:title" content="BrightMinds Academy - Innovative Education for Children 5-15">
        <meta property="twitter:description" content="Discover personalized learning programs that nurture creativity, critical thinking, and academic excellence. Enroll your child today!">
        <meta property="twitter:image" content="<?php echo esc_url(get_template_directory_uri() . '/assets/images/pexels-rdne-8035138_1758180883690.jpg'); ?>">
        
        <!-- JSON-LD Schema -->
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "BrightMinds Academy",
            "description": "Innovative education programs for children aged 5-15, focusing on personalized learning and creative development",
            "url": "<?php echo esc_url(home_url('/')); ?>",
            "logo": "<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.png'); ?>",
            "image": "<?php echo esc_url(get_template_directory_uri() . '/assets/images/pexels-rdne-8035138_1758180883690.jpg'); ?>",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Education Lane",
                "addressLocality": "Learning City",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "US"
            },
            "telephone": "+1-555-BRIGHT",
            "email": "hello@brightmindsacademy.com",
            "sameAs": [
                "https://facebook.com/brightmindsacademy",
                "https://instagram.com/brightmindsacademy"
            ],
            "educationalCredentialAwarded": "Certificate of Completion",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Educational Programs",
                "itemListElement": [
                    {
                        "@type": "Course",
                        "name": "Creative Learning Program",
                        "description": "Innovative curriculum designed to foster creativity and critical thinking",
                        "provider": {
                            "@type": "EducationalOrganization",
                            "name": "BrightMinds Academy"
                        }
                    },
                    {
                        "@type": "Course", 
                        "name": "Academic Excellence Program",
                        "description": "Comprehensive academic support with personalized attention",
                        "provider": {
                            "@type": "EducationalOrganization",
                            "name": "BrightMinds Academy"
                        }
                    },
                    {
                        "@type": "Course",
                        "name": "STEM Innovation Program", 
                        "description": "Hands-on science, technology, engineering, and math education",
                        "provider": {
                            "@type": "EducationalOrganization",
                            "name": "BrightMinds Academy"
                        }
                    }
                ]
            }
        }
        </script>
        <?php
    }
}
add_action('wp_head', 'brightminds_add_meta_tags');

/**
 * Custom excerpt length
 */
function brightminds_excerpt_length($length) {
    return 25;
}
add_filter('excerpt_length', 'brightminds_excerpt_length');

/**
 * Add Contact Form 7 support and customizations
 */
function brightminds_cf7_form_elements($form) {
    // Add custom classes to form elements
    $form = str_replace('<input', '<input class="form-input"', $form);
    $form = str_replace('<select', '<select class="form-select"', $form);
    $form = str_replace('<textarea', '<textarea class="form-textarea"', $form);
    $form = str_replace('<button', '<button class="btn btn-primary"', $form);
    
    return $form;
}
add_filter('wpcf7_form_elements', 'brightminds_cf7_form_elements');

/**
 * Optimize images for performance
 */
function brightminds_image_optimization() {
    // Add lazy loading to images
    add_filter('wp_get_attachment_image_attributes', function($attr) {
        $attr['loading'] = 'lazy';
        return $attr;
    });
    
    // Add responsive image attributes
    add_filter('wp_get_attachment_image_attributes', function($attr, $attachment, $size) {
        if (!empty($attachment)) {
            $attr['decoding'] = 'async';
        }
        return $attr;
    }, 10, 3);
}
add_action('init', 'brightminds_image_optimization');

/**
 * Security enhancements
 */
function brightminds_security() {
    // Remove WordPress version from head
    remove_action('wp_head', 'wp_generator');
    
    // Remove unnecessary REST API info
    remove_action('wp_head', 'rest_output_link_wp_head');
    remove_action('wp_head', 'wp_oembed_add_discovery_links');
}
add_action('init', 'brightminds_security');

/**
 * Custom widget areas
 */
function brightminds_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Contact Info', 'brightminds'),
        'id'            => 'footer-contact',
        'description'   => __('Contact information for footer', 'brightminds'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer Programs', 'brightminds'),
        'id'            => 'footer-programs',
        'description'   => __('Program links for footer', 'brightminds'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'brightminds_widgets_init');

/**
 * Accessibility improvements
 */
function brightminds_accessibility() {
    // Add skip link to navigation
    add_action('wp_body_open', function() {
        echo '<a class="skip-link screen-reader-text" href="#main">' . __('Skip to content', 'brightminds') . '</a>';
    });
}
add_action('init', 'brightminds_accessibility');

/**
 * Performance optimizations
 */
function brightminds_performance() {
    // Remove emoji scripts for better performance
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    
    // Defer JavaScript loading
    add_filter('script_loader_tag', function($tag, $handle) {
        if (is_admin()) return $tag;
        
        $defer_scripts = array('brightminds-script');
        
        if (in_array($handle, $defer_scripts)) {
            return str_replace(' src', ' defer src', $tag);
        }
        
        return $tag;
    }, 10, 2);
}
add_action('init', 'brightminds_performance');

/**
 * Custom post types for testimonials (optional)
 */
function brightminds_custom_post_types() {
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Testimonials', 'brightminds'),
            'singular_name' => __('Testimonial', 'brightminds'),
        ),
        'public' => false,
        'show_ui' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-format-quote',
    ));
}
add_action('init', 'brightminds_custom_post_types');