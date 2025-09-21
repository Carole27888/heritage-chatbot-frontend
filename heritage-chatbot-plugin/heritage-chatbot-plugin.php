<?php


if ( ! defined( 'ABSPATH' ) ) exit;

function heritage_chatbot_find_asset( $pattern ) {
    $paths = glob( plugin_dir_path(__FILE__) . 'dist/assets/' . $pattern );
    if ( ! $paths || ! isset( $paths[0] ) ) {
        return null;
    }
    return array(
        'url'  => plugin_dir_url(__FILE__) . 'dist/assets/' . basename($paths[0]),
        'path' => plugin_dir_path(__FILE__) . 'dist/assets/' . basename($paths[0]),
    );
}


function heritage_chatbot_enqueue_assets() {
    $js  = heritage_chatbot_find_asset('index-*.js');
    $css = heritage_chatbot_find_asset('index-*.css');

    
    if ( ! $css ) {
        error_log('Chatbot CSS not found');
    } else {
        error_log(' Chatbot CSS found: ' . $css['url']);
    }

    //  Enqueue CSS
    if ( $css ) {
        wp_enqueue_style(
            'heritage-chatbot-style',
            $css['url'],
            array(),
            filemtime( $css['path'] )
        );
    }

    // Enqueue JS
    if ( $js ) {
        wp_register_script(
            'heritage-chatbot-script',
            $js['url'],
            array(),
            filemtime( $js['path'] ),
            true
        );

        wp_localize_script(
            'heritage-chatbot-script',
            'aiChatConfig',
            array(
                'apiUrl' => 'https://api.heritageinsurance.co.tz/ai/chat'
            )
        );

        wp_enqueue_script( 'heritage-chatbot-script' );
    } else {
        error_log('Chatbot JS not found');
    }
}
add_action( 'wp_enqueue_scripts', 'heritage_chatbot_enqueue_assets' );


function heritage_chatbot_add_root_div() {
    echo '<div id="ai-chat-root"></div>';
    echo '<!-- DEBUG: heritage_chatbot_add_root_div executed -->';
}
add_action('wp_head', function() {
    $css = heritage_chatbot_find_asset('index-*.css');
    if ($css) {
        echo '<link rel="stylesheet" href="' . esc_url($css['url']) . '?v=' . filemtime($css['path']) . '" />';
        echo '<!-- DEBUG: Forced CSS load -->';
    }
});
add_action( 'wp_footer', 'heritage_chatbot_add_root_div' );

