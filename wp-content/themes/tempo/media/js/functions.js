/**
 *  Callback Function
 */

 ;var tempo_callback = function( callback, args ){
    (function( c, p ) {
        try{
            c( p );
        }catch ( e ){
            if (e instanceof SyntaxError) {
                console.log( (e.message) );
            }
        }
    })( callback, args );
};


 /**
 *  Images Loaded
 *
 *  Allow to run a callback function after
 *  loading all images from a dom element
 *
 *  eg:
 *
 *  tempo_images.loaded( '.gallery-wrapper', function(){
 *      jQuery( '.tempo-wrapper' ).masonry();
 *  });
 */

;var tempo__images = {
    _class : function(){
        this.loaded = function( el, callback ){
            var total = jQuery( el ).find( 'img' ).length;

            if( total == 0 ){
                callback();
            }
            else{
                jQuery( el ).find( 'img' ).each(function(){
                    var image = new Image();

                    image.onload = function(){
                        total--;

                        if( total == 0 ){
                            callback();
                        }
                    }

                    image.src = jQuery( this ).attr( 'src' );
                });
            }
        }
    }
};

var tempo_images = new tempo__images._class();

/**
 *  Collapse Menu
 */

 function tempo_collapse_navigation( classes )
 {
     jQuery(function(){
         var nav = jQuery( 'div.' + classes + '.nav-collapse' );

         if( !jQuery( nav ).hasClass( 'collapse-in' ) ){
             if( jQuery( nav ).hasClass( 'collapse-out' ) ){
                 jQuery( nav ).removeClass( 'collapse-out' );
             }

             jQuery( nav ).addClass( 'collapse-in' );

             jQuery( 'body' ).css({ 'overflow' : 'hidden' });

             jQuery( nav ).find( 'div.tempo-navigation-shadow' ).click(function(){
                 if( jQuery( nav ).hasClass( 'collapse-in' ) ){
                     jQuery( nav ).addClass( 'collapse-out' ).removeClass( 'collapse-in' );
                 }

                 jQuery( 'body' ).css({ 'overflow' : 'initial' });
             });
         }
     });
 }

/**
 *  Collapse SubMenu
 */

jQuery(function(){
    var nav = jQuery( 'div.tempo-navigation-wrapper.nav-collapse' );

    if( jQuery( nav ).hasClass( 'collapse-submenu' ) ){
        jQuery( nav ).find( 'li.menu-item-has-children' ).prepend( '<span></span>' );

        jQuery( nav ).find( 'li.menu-item-has-children span' ).each(function(){
            jQuery( this ).on( 'click', function( event ){

                event.preventDefault();

                var li = jQuery( this ).parent( 'li' );

                if( jQuery( li ).hasClass( 'collapse-children' ) ){
                    jQuery( this ).parent( 'li' ).children( 'ul' ).slideUp( 'fast', function(){
    					jQuery( li ).removeClass( 'collapse-children' );
    				});
                }

                else{
                    jQuery( this ).parent( 'li' ).children( 'ul' ).slideDown( 'fast', function(){
    					jQuery( li ).addClass( 'collapse-children' );
    				});
                }

            });

            var a = jQuery( this ).parent( 'li' ).children( 'a' );

            jQuery( a ).on( 'click', function(){
                var href = jQuery( this ).attr( 'href' );

                if( '#' == href.substring( 0, 1 ) ){

                    event.preventDefault();

                    var li = jQuery( this ).parent( 'li' );

                    if( jQuery( li ).hasClass( 'collapse-children' ) ){
                        jQuery( this ).parent( 'li' ).children( 'ul' ).slideUp( 'fast', function(){
                            jQuery( li ).removeClass( 'collapse-children' );
                        });
                    }

                    else{
                        jQuery( this ).parent( 'li' ).children( 'ul' ).slideDown( 'fast', function(){
                            jQuery( li ).addClass( 'collapse-children' );
                        });
                    }
                }
            });
        });
    }
});

/**
 *  Scroll to Top Action
 */

function tempo_scroll_up(){
    jQuery(document).ready(function(){
        jQuery( 'html, body' ).animate({
            scrollTop: 0
        }, 1000 );
    });
}



/**
 *  jQuery Tools
 *  tempo_height    - setting a proportional height based on current width.
 *  hasAttr         - check if DOM element has an attribute
 *
 *  eg:
 *  jQuery( '.tempo-youtube-thumbnail' ).tempo_height( 16/9 )
 */

;(function( $, window ){

    // tempo height
    $.fn.tempo_height = function( ratio ){
        if( typeof ratio == 'undefined' || ratio == 0 )
            ratio = 16/9;

        return this.each(function(){
            if ( !$.data(this, 'ratio_instantiated' ) ){
                $.data(this, 'ratio_instantiated', (function( el, ratio ){

                    var resize = function( ratio ){
                        setTimeout(function(){
                            var

                            width   = parseInt( jQuery( el ).width() ),
                            height  = parseInt( width / ratio );

                            jQuery( el ).css({ 'height' : height + 'px' });
                        }, 100 );
                    }

                    resize( ratio );

                    // reset height on resize
                    jQuery( window ).resize(function(){
                        resize( ratio );
                    });

                })( this, ratio ));
            }
        });
    };

    $.fn.tempo_youtube_height = function( ratio ){
        if( typeof ratio == 'undefined' || ratio == 0 )
            ratio = 16/9;

        return this.each(function(){
            if ( !$.data(this, 'ratio_instantiated' ) ){
                $.data(this, 'ratio_instantiated', (function( el, ratio ){

                    var resize = function( ratio ){
                        setTimeout(function(){
                            var

                            width   = parseInt( jQuery( el ).width() ),
                            pWidth,
                            height  = parseInt( jQuery( el ).height() ),
                            pHeight
                            $tplayer = jQuery( el ).find( '#wp-custom-header-video' );

                            $tplayer.attr('width', '100%').attr( 'height' , '100%');


                            if( width / ratio < height ){
                                pWidth = Math.ceil( height * ratio );
                                $tplayer.width(pWidth).height(height).css({
                                    'left'  : parseInt((width - pWidth) / 2),
                                    'top'   : 0
                                });
                            }
                            else{
                                pHeight = Math.ceil(width / ratio);
                                $tplayer.width(width).height( pHeight ).css({
                                    'left'  : 0,
                                    'top'   : parseInt((height - pHeight) / 2)
                                });
                            }

                        }, 100 );
                    }

                    resize( ratio );

                    // reset height on resize
                    jQuery( window ).resize(function(){
                        resize( ratio );
                    });

                })( this, ratio ));
            }
        });
    }

    $.fn.tempo_min_height = function( w, ratio ){
        if( typeof ratio == 'undefined' || ratio == 0 )
            ratio = 16/9;

        return this.each(function(){
            if ( !$.data(this, 'ratio_instantiated' ) ){
                $.data(this, 'ratio_instantiated', (function( el, ratio ){

                    var resize = function( ratio ){

                        var

                        width   = parseInt( jQuery( el ).width() ),
                        height  = parseInt( width / ratio );

                        if( w > width )
                            jQuery( el ).css({ 'height' : height + 'px' });
                    }

                    resize( ratio );

                    // reset height on resize
                    jQuery( window ).resize(function(){
                        resize( ratio );
                    });

                })( this, ratio ));
            }
        });
    };

    // has attribute
    $.fn.hasAttr = function( name ){
        return this.attr( name ) !== undefined;
    };

})( jQuery, window);



/////   SETUP    /////


jQuery(document).ready(function(){

    // video thumbnail ratio 16:9
    jQuery( 'div.tempo-video-thumbnail' ).tempo_height();

    // header video youtube
    setTimeout(function(){
        jQuery( 'div#wp-custom-header.wp-custom-header' ).tempo_youtube_height();
    }, 1000 );


    // grid and portfolio with masonry
    tempo_images.loaded( 'div.tempo-shortcode.posts div.loop-row', function(){
        setTimeout(function(){
            jQuery( 'div.tempo-shortcode.posts div.loop-row' ).masonry();
        }, 500 );

        // reset masonry on resize
        jQuery(window).resize(function(){
            setTimeout(function(){
                jQuery( 'div.tempo-shortcode.posts div.loop-row' ).masonry();
            }, 500 );
        });
    });

    // grid and portfolio with masonry
    tempo_images.loaded( 'section.tempo-blog-grid div.row', function(){
        setTimeout(function(){
            jQuery( 'section.tempo-blog-grid div.row' ).masonry();
        }, 500 );

        // reset masonry on resize
        jQuery(window).resize(function(){
            setTimeout(function(){
                jQuery( 'section.tempo-blog-grid div.row' ).masonry();
            }, 500 );
        });
    });

    // grid and portfolio with masonry
    tempo_images.loaded( 'section.tempo-blog-portfolio div.row', function(){
        setTimeout(function(){
            jQuery( 'section.tempo-blog-portfolio div.row' ).masonry();
        }, 500 );

        // reset masonry on resize
        jQuery(window).resize(function(){
            setTimeout(function(){
                jQuery( 'section.tempo-blog-portfolio div.row' ).masonry();
            }, 500 );
        });
    });

    tempo_images.loaded( '.tempo-gallery:not(.features):not(.story)', function(){
        setTimeout(function(){
            jQuery( '.tempo-gallery:not(.features):not(.story)' ).masonry();
        }, 500 );

        // reset masonry on resize
        jQuery(window).resize(function(){
            setTimeout(function(){
                jQuery( '.tempo-gallery:not(.features):not(.story)' ).masonry();
            }, 500 );
        });
    });

    var tempo_widget_masonry = false;

    // header and foorter sidebars with masonry
    tempo_images.loaded( 'aside .widgets-row', function(){
        setTimeout(function(){
            jQuery( 'aside .widgets-row' ).masonry();
            tempo_widget_masonry = true;
        }, 500 );

        // reset masonry on resize
        jQuery(window).resize(function(){
            setTimeout(function(){
                jQuery( 'aside .widgets-row' ).masonry();
            }, 500 );
        });
    });

    if( !tempo_widget_masonry ){
        setTimeout(function(){
            jQuery( 'aside .widgets-row' ).masonry();
            tempo_widget_masonry = true;
        }, 500);

        jQuery(window).resize(function(){
            setTimeout(function(){
                jQuery( 'aside .widgets-row' ).masonry();
            }, 500);
        });
    }

    // woocommerce products
    tempo_images.loaded( 'div.tempo-section-content ul.products', function(){
        setTimeout(function(){
            jQuery( 'div.tempo-section-content ul.products' ).masonry();
        }, 500 );

        // reset masonry on resize
        jQuery(window).resize(function(){
            setTimeout(function(){
                jQuery( 'div.tempo-section-content ul.products' ).masonry();
            }, 500 );
        });
    });


    /**
     *  Scroll to Top Button
     */

    jQuery( window ).scroll(function(){
        var top     = parseInt( jQuery( window ).scrollTop());

        /**
         *  Scroll to Top
         */

        if( top > 150 && !jQuery( 'div.tempo-scroll-up' ).hasClass( 'display-scroll-up' ) ){
            jQuery( 'div.tempo-scroll-up' ).addClass( 'display-scroll-up' );
        }else if( top < 150 && jQuery( 'div.tempo-scroll-up' ).hasClass( 'display-scroll-up' ) ){
            jQuery( 'div.tempo-scroll-up' ).removeClass( 'display-scroll-up' );
        }
    });


    // Counter UP on scroll page
    jQuery('.counter').counterUp({
        delay: 10,
        time: 1500
    });


    /**
     *  Comments
     *
     *  show / hide button
     *  show comments list after submit a comments
     */

    jQuery( 'div.comments-list-collapse a' ).click(function(){
        jQuery( this ).parent().fadeOut('slow');
        jQuery( 'div.tempo-comments-wrapper' ).fadeIn('slow');
    });

    // show comments after submit
    if( document.location.href.match( /^(.*)#comment\-[0-9]+/ ) ){
        var comments = jQuery( 'div#comments.tempo-comments-wrapper' );

        if( comments.length && !jQuery( comments ).hasClass( 'tempo-not-collapsing' ) ){
            jQuery( comments ).addClass( 'tempo-not-collapsing' );
        }
    }
});
