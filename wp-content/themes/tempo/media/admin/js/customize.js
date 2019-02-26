function tempo_hex2rgb( hex )
{
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
    var colors = result ? {
        r: parseInt( result[ 1 ], 16 ),
        g: parseInt( result[ 2 ], 16 ),
        b: parseInt( result[ 3 ], 16 )
    } : null;

    var rett = '';

    if( colors.hasOwnProperty( 'r' ) ){
    	rett += colors.r + ' , ';
    }
    else{
    	rett += '255 , ';
    }

    if( colors.hasOwnProperty( 'g' ) ){
    	rett += colors.g + ' , ';
    }
    else{
    	rett += '255 , ';
    }

    if( colors.hasOwnProperty( 'b' ) ){
    	rett += colors.b;
    }
    else{
    	rett += '255';
    }

    return rett;
}

function tempo_brightness( hex, steps )
{
    var steps 	= Math.max( -255, Math.min( 255, steps ) );
    var hex 	= hex.toString().replace( /#/g, "" );

    if ( hex.length == 3 ) {
        hex =
        hex.substring( 0, 1 ) + hex.substring( 0, 1 ) +
        hex.substring( 1, 2 ) + hex.substring( 1, 2 ) +
        hex.substring( 2, 3 ) + hex.substring( 2, 3 );
    }

    var r = parseInt( hex.substring( 0, 2 ).toString() , 16 );
    var g = parseInt( hex.substring( 2, 4 ).toString() , 16 );
    var b = parseInt( hex.substring( 4, 6 ).toString() , 16 );

    r = Math.max( 0, Math.min( 255, r + steps ) ).toString(16).toUpperCase();
    g = Math.max( 0, Math.min( 255, g + steps ) ).toString(16).toUpperCase();
    b = Math.max( 0, Math.min( 255, b + steps ) ).toString(16).toUpperCase();

	var r_hex = Array( 3 - r.length ).join( '0' ) + r;
	var g_hex = Array( 3 - g.length ).join( '0' ) + g;
	var b_hex = Array( 3 - b.length ).join( '0' ) + b;

    return '#' + r_hex + g_hex + b_hex;
}


(function($){

    {   //- BACKGROUND -//

        /* COLORS */
        wp.customize( 'background_color' , function( value ){
            value.bind(function( newval ){

                var bg_color    = newval;
                var bg_image    = wp.customize.instance( 'background_image' ).get();
                var bg_repeat   = wp.customize.instance( 'background_repeat' ).get();
                var bg_position = wp.customize.instance( 'background_position_x' ).get();
                var bg_attach   = wp.customize.instance( 'background_attachment' ).get();

                var background_image = '';

                if( bg_image.length ){
                    background_image =

                    'background-image: url(' + bg_image + ');' +
                    'background-repeat:' + bg_repeat + ';' +
                    'background-position:' + bg_position + ';' +
                    'background-attachment:' + bg_attach + ';'
                }

                jQuery( 'style#background' ).html(
                    'body{' +
                    'background-color: ' + bg_color + ';' +
                    background_image +
                    '}'
                );
            });
        });

        /* BACKGROUND IMAGE */
        wp.customize( 'background_image' , function( value ){
            value.bind(function( newval ){

                var bg_color    = wp.customize.instance( 'background_color' ).get();
                var bg_image    = newval;
                var bg_repeat   = wp.customize.instance( 'background_repeat' ).get();
                var bg_position = wp.customize.instance( 'background_position_x' ).get();
                var bg_attach   = wp.customize.instance( 'background_attachment' ).get();

                var background_image = '';

                if( bg_image.length ){
                    background_image =

                    'background-image: url(' + bg_image + ');' +
                    'background-repeat:' + bg_repeat + ';' +
                    'background-position:' + bg_position + ';' +
                    'background-attachment:' + bg_attach + ';'
                }

                jQuery( 'style#background' ).html(
                    'body{' +
                    'background-color: ' + bg_color + ';' +
                    background_image +
                    '}'
                );
            });
        });

        wp.customize( 'background_repeat' , function( value ){
            value.bind(function( newval ){

                var bg_color    = wp.customize.instance( 'background_color' ).get();
                var bg_image    = wp.customize.instance( 'background_image' ).get();
                var bg_repeat   = newval;
                var bg_position = wp.customize.instance( 'background_position_x' ).get();
                var bg_attach   = wp.customize.instance( 'background_attachment' ).get();

                var background_image = '';

                if( bg_image.length ){
                    background_image =

                    'background-image: url(' + bg_image + ');' +
                    'background-repeat:' + bg_repeat + ';' +
                    'background-position:' + bg_position + ';' +
                    'background-attachment:' + bg_attach + ';'
                }

                jQuery( 'style#background' ).html(
                    'body{' +
                    'background-color: ' + bg_color + ';' +
                    background_image +
                    '}'
                );
            });
        });

        wp.customize( 'background_position_x' , function( value ){
            value.bind(function( newval ){

                var bg_color    = wp.customize.instance( 'background_color' ).get();
                var bg_image    = wp.customize.instance( 'background_image' ).get();
                var bg_repeat   = wp.customize.instance( 'background_repeat' ).get();
                var bg_position = newval;
                var bg_attach   = wp.customize.instance( 'background_attachment' ).get();

                var background_image = '';

                if( bg_image.length ){
                    background_image =

                    'background-image: url(' + bg_image + ');' +
                    'background-repeat:' + bg_repeat + ';' +
                    'background-position:' + bg_position + ';' +
                    'background-attachment:' + bg_attach + ';'
                }

                jQuery( 'style#background' ).html(
                    'body{' +
                    'background-color: ' + bg_color + ';' +
                    background_image +
                    '}'
                );
            });
        });

        wp.customize( 'background_attachment' , function( value ){
            value.bind(function( newval ){

                var bg_color    = wp.customize.instance( 'background_color' ).get();
                var bg_image    = wp.customize.instance( 'background_image' ).get();
                var bg_repeat   = wp.customize.instance( 'background_repeat' ).get();
                var bg_position = wp.customize.instance( 'background_position_x' ).get();
                var bg_attach   = newval;

                var background_image = '';

                if( bg_image.length ){
                    background_image =

                    'background-image: url(' + bg_image + ');' +
                    'background-repeat:' + bg_repeat + ';' +
                    'background-position:' + bg_position + ';' +
                    'background-attachment:' + bg_attach + ';'
                }

                jQuery( 'style#background' ).html(
                    'body{' +
                    'background-color: ' + bg_color + ';' +
                    background_image +
                    '}'
                );
            });
        });
    }

    {   //- SITE IDENTITY APPEARANCE -//

        {   //- SITE TITLE -//

            wp.customize( 'site-title-color' , function( value ){
                value.bind(function( newval ){
                    if( newval ){

                        var hex         = newval;
                        var transp      = parseInt( wp.customize.instance( 'site-title-transp' ).get() ) / 100;
                        var transp_h    = parseInt( wp.customize.instance( 'site-title-h-transp' ).get() ) / 100;

                        var rgba        = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';
                        var rgba_h      = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp_h + ' )';

                        jQuery( 'style#site-title-color').html(
                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-title{' +
                            'color: ' + rgba + ';' +
                            '}' +

                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-title:hover{' +
                            'color: ' + rgba_h + ';' +
                            '}'
                        );
                    }
                });
            });

            wp.customize( 'site-title-transp' , function( value ){
                value.bind(function( newval ){
                    if( newval ){

                        var hex         = wp.customize.instance( 'site-title-color' ).get();
                        var transp      = parseInt( newval ) / 100;
                        var transp_h    = parseInt( wp.customize.instance( 'site-title-h-transp' ).get() ) / 100;

                        var rgba        = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';
                        var rgba_h      = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp_h + ' )';

                        jQuery( 'style#site-title-color').html(
                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-title{' +
                            'color: ' + rgba + ';' +
                            '}' +

                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-title:hover{' +
                            'color: ' + rgba_h + ';' +
                            '}'
                        );
                    }
                });
            });

            wp.customize( 'site-title-h-transp' , function( value ){
                value.bind(function( newval ){
                    if( newval ){

                        var hex         = wp.customize.instance( 'site-title-color' ).get();
                        var transp      = parseInt( wp.customize.instance( 'site-title-transp' ).get() ) / 100;
                        var transp_h    = parseInt( newval ) / 100;

                        var rgba        = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';
                        var rgba_h      = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp_h + ' )';

                        jQuery( 'style#site-title-color').html(
                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-title{' +
                            'color: ' + rgba + ';' +
                            '}' +

                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-title:hover{' +
                            'color: ' + rgba_h + ';' +
                            '}'
                        );
                    }
                });
            });
        }

        {   //- TAGLINE -//

            wp.customize( 'tagline-color' , function( value ){
                value.bind(function( newval ){
                    if( newval ){

                        var hex         = newval;
                        var transp      = parseInt( wp.customize.instance( 'tagline-transp' ).get() ) / 100;
                        var transp_h    = parseInt( wp.customize.instance( 'tagline-h-transp' ).get() ) / 100;

                        var rgba        = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';
                        var rgba_h      = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp_h + ' )';

                        jQuery( 'style#tagline-color').html(
                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-description{' +
                            'color: ' + rgba + ';' +
                            '}' +

                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-description:hover{' +
                            'color: ' + rgba_h + ';' +
                            '}'
                        );
                    }
                });
            });

            wp.customize( 'tagline-transp' , function( value ){
                value.bind(function( newval ){
                    if( newval ){

                        var hex         = wp.customize.instance( 'tagline-color' ).get();
                        var transp      = parseInt( newval ) / 100;
                        var transp_h    = parseInt( wp.customize.instance( 'tagline-h-transp' ).get() ) / 100;

                        var rgba        = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';
                        var rgba_h      = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp_h + ' )';

                        jQuery( 'style#tagline-color').html(
                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-description{' +
                            'color: ' + rgba + ';' +
                            '}' +

                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-description:hover{' +
                            'color: ' + rgba_h + ';' +
                            '}'
                        );
                    }
                });
            });

            wp.customize( 'tagline-h-transp' , function( value ){
                value.bind(function( newval ){
                    if( newval ){

                        var hex         = wp.customize.instance( 'tagline-color' ).get();
                        var transp      = parseInt( wp.customize.instance( 'tagline-transp' ).get() ) / 100;
                        var transp_h    = parseInt( newval ) / 100;

                        var rgba        = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';
                        var rgba_h      = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp_h + ' )';

                        jQuery( 'style#tagline-color').html(
                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-description{' +
                            'color: ' + rgba + ';' +
                            '}' +

                            'header.tempo-header div.tempo-topper div.tempo-site-identity a.tempo-site-description:hover{' +
                            'color: ' + rgba_h + ';' +
                            '}'
                        );
                    }
                });
            });
        }
    }

    {   //- MENU -//

        {   //- LINK MENU COLOR -//

            wp.customize( 'menu-link-color' , function( value ){
                value.bind(function( newval ){
                    if( newval ){

                        var hex         = newval;
                        var transp      = parseInt( wp.customize.instance( 'menu-link-transp' ).get() ) / 100;
                        var rgba        = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#menu-link-color').html(
                            'header.tempo-header nav ul li a,' +
                            'header.tempo-header nav button.tempo-btn-collapse{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    }
                });
            });

            wp.customize( 'menu-link-transp' , function( value ){
                value.bind(function( newval ){
                    if( newval ){

                        var hex         = wp.customize.instance( 'menu-link-color' ).get();
                        var transp      = parseInt( newval ) / 100;
                        var rgba        = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#menu-link-color').html(
                            'header.tempo-header nav ul li a,' +
                            'header.tempo-header nav button.tempo-btn-collapse{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    }
                });
            });
        }

        {   //- LINK MENU COLOR (OVER) -//

            wp.customize( 'menu-link-h-color' , function( value ){
                value.bind(function( newval ){
                    if( newval ){

                        var hex         = newval;
                        var transp      = parseInt( wp.customize.instance( 'menu-link-h-transp' ).get() ) / 100;
                        var rgba        = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#menu-link-h-color').html(
                            'header.tempo-header nav ul li.current-menu-ancestor > a,' +
                            'header.tempo-header nav ul li.current-menu-item > a,' +
                            'header.tempo-header nav ul li:hover > a,' +
                            'header.tempo-header nav button.tempo-btn-collapse:hover{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    }
                });
            });

            wp.customize( 'menu-link-h-transp' , function( value ){
                value.bind(function( newval ){
                    if( newval ){

                        var hex         = wp.customize.instance( 'menu-link-h-color' ).get();
                        var transp      = parseInt( newval ) / 100;
                        var rgba        = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#menu-link-h-color').html(
                            'header.tempo-header nav ul li.current-menu-ancestor > a,' +
                            'header.tempo-header nav ul li.current-menu-item > a,' +
                            'header.tempo-header nav ul li:hover > a,' +
                            'header.tempo-header nav button.tempo-btn-collapse:hover{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    }
                });
            });
        }
    }

    {   //- HEADER -//

        {   //- GENERAL -//
            wp.customize( 'header-top-space' , function( value ){
                value.bind(function( newval ){

                    var space = parseInt( newval );

                    jQuery( 'style#header-top-space').html(
                        'header.tempo-header div.tempo-header-partial .tempo-header-content{' +
                        'padding-top: ' + parseInt( space ) + 'px;' +
                        '}' +

                        '@media (max-width: 991px ){' +
                        'header.tempo-header div.tempo-header-partial .tempo-header-content{' +
                        'padding-top: ' + parseInt( space * 991/1170 ) + 'px;' +
                        '}' +
                        '}' +

                        '@media (max-width: 767px ){' +
                        'header.tempo-header div.tempo-header-partial .tempo-header-content{' +
                        'padding-top: ' + parseInt( space * 767/1170 ) + 'px;' +
                        '}' +
                        '}' +

                        '@media (max-width: 520px ){' +
                        'header.tempo-header div.tempo-header-partial .tempo-header-content{' +
                        'padding-top: ' + parseInt( space * 520/1170 ) + 'px;' +
                        '}' +
                        '}' +

                        '@media (max-width: 480px ){' +
                        'header.tempo-header div.tempo-header-partial .tempo-header-content{' +
                        'padding-top: ' + parseInt( space * 480/1170 ) + 'px;' +
                        '}' +
                        '}'
                    );
                });
            });

            wp.customize( 'header-bottom-space' , function( value ){
                value.bind(function( newval ){

                    var space = parseInt( newval );

                    jQuery( 'style#header-bottom-space').html(
                        'header.tempo-header div.tempo-header-partial .tempo-header-content{' +
                        'padding-bottom: ' + parseInt( space ) + 'px;' +
                        '}' +

                        '@media (max-width: 991px ){' +
                        'header.tempo-header div.tempo-header-partial .tempo-header-content{' +
                        'padding-bottom: ' + parseInt( space * 991/1170 ) + 'px;' +
                        '}' +
                        '}' +

                        '@media (max-width: 767px ){' +
                        'header.tempo-header div.tempo-header-partial .tempo-header-content{' +
                        'padding-bottom: ' + parseInt( space * 767/1170 ) + 'px;' +
                        '}' +
                        '}' +

                        '@media (max-width: 520px ){' +
                        'header.tempo-header div.tempo-header-partial .tempo-header-content{' +
                        'padding-bottom: ' + parseInt( space * 520/1170 ) + 'px;' +
                        '}' +
                        '}' +

                        '@media (max-width: 480px ){' +
                        'header.tempo-header div.tempo-header-partial .tempo-header-content{' +
                        'padding-bottom: ' + parseInt( space * 480/1170 ) + 'px;' +
                        '}' +
                        '}'
                    );
                });
            });

            wp.customize( 'header-buttons-space', function( value ){
                value.bind(function( newval ){
                    if( newval ){
                        var space  = parseInt( newval );

                        jQuery( 'style#header-buttons-space').html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-text + .tempo-header-buttons{' +
                			'padding-top: ' + space + 'px;' +
                			'}' +
                			'@media (max-width: 991px ){' +
                			'header.tempo-header div.tempo-header-partial .tempo-header-text + .tempo-header-buttons{' +
                			'padding-top: ' + parseInt( space * 991/1170 ) + 'px;' +
                			'}' +
                	        '}' +
                	        '@media (max-width: 767px ){' +
                			'header.tempo-header div.tempo-header-partial .tempo-header-text + .tempo-header-buttons{' +
                			'padding-top: ' + parseInt( space * 767/1170 ) + 'px;' +
                			'}' +
                	        '}' +
                	        '@media (max-width: 520px ){' +
                			'header.tempo-header div.tempo-header-partial .tempo-header-text + .tempo-header-buttons{' +
                			'padding-top: ' + parseInt( space * 520/1170 ) + 'px;' +
                			'}' +
                	        '}' +
                			'@media (max-width: 480px ){' +
                			'header.tempo-header div.tempo-header-partial .tempo-header-text + .tempo-header-buttons{' +
                			'padding-top: ' + parseInt( space * 480/1170 ) + 'px;' +
                			'}' +
                			'}'
                        );
                    }
                });
            });

            wp.customize( 'header-bkg-color' , function( value ){
                value.bind(function( newval ){
                    jQuery( 'style#header-bkg-color').html(
                        'div.tempo-header-partial{' +
                        'background-color: ' + newval + ';' +
                        '}'
                    );
                });
            });

            wp.customize( 'header-mask-color' , function( value ){
                value.bind(function( newval ){
                    var rgb     = tempo_hex2rgb( newval );
                    var transp  = parseFloat( wp.customize.instance( 'header-mask-transp' ).get() / 100 ).toString();
                    var rgba    = 'rgba(' + rgb + ' , ' + transp + ')';

                    jQuery( 'style#header-mask-color').html(
                        'header.tempo-header div.tempo-header-partial .tempo-header-mask{' +
                        'background-color: ' + rgba + ';' +
                        '}'
                    );
                });
            });

            wp.customize( 'header-mask-transp' , function( value ){
                value.bind(function( newval ){
                    var rgb     = tempo_hex2rgb( wp.customize.instance( 'header-mask-color' ).get().toString() );
                    var transp  = parseFloat( newval / 100 ).toString();
                    var rgba    = 'rgba(' + rgb + ' , ' + transp + ')';

                    jQuery( 'style#header-mask-color').html(
                        'header.tempo-header div.tempo-header-partial .tempo-header-mask{' +
                        'background-color: ' + rgba + ';' +
                        '}'
                    );
                });
            });
        }


        {   //- CONTENT -//

            {   // HEADLINE
                wp.customize( 'header-headline-text', function( value ){
                    value.bind(function( newval ){
                        if( newval ){
                            jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-headline' ).html( newval );
                        }
                    });
                });

                wp.customize( 'header-headline-color', function( value ){
                    value.bind(function( newval ){
                        if( newval ){
                            jQuery( 'style#header-headline-color').html(
                                'header.tempo-header div.tempo-header-partial .tempo-header-headline{' +
                                'color: ' + newval + ';' +
                                '}'
                            );
                        }
                    });
                });
            }

            {   // DESCRIPTION
                wp.customize( 'header-description-text', function( value ){
                    value.bind(function( newval ){
                        if( newval ){
                            jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-description' ).html( newval );
                        }
                    });
                });

                wp.customize( 'header-description-color', function( value ){
                    value.bind(function( newval ){
                        if( newval ){

                            var hex    = newval;
                            var rgba1  = 'rgba( ' + tempo_hex2rgb( hex ) + ', 0.75 )';
                            var rgba2  = 'rgba( ' + tempo_hex2rgb( hex ) + ', 1.0 )';

                            jQuery( 'style#header-description-color').html(
                                'header.tempo-header div.tempo-header-partial .tempo-header-description{' +
                                'color: ' + rgba1 + ';' +
                                '}' +

                                'header.tempo-header div.tempo-header-partial .tempo-header-description:hover{' +
                                'color: ' + rgba2 + ';' +
                                '}'
                            );
                        }
                    });
                });
            }


            {   // BUTTON 1

                // Text
                wp.customize( 'header-btn-1-text', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( button.length )
                            button.html( newval );
                    });
                });

                // Description
                wp.customize( 'header-btn-1-description', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( button.length )
                            button.attr( 'title', newval );
                    });
                });

                // Url
                wp.customize( 'header-btn-1-url', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( button.length )
                            button.attr( 'href', newval );
                    });
                });

                // Target
                wp.customize( 'header-btn-1-target', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( !button.length )
                            return;

                        if( newval ){
                            button.attr( 'target', "_blank" );
                        }

                        else{
                            button.removeAttr( 'target' );
                        }
                    });
                });

                // Text Color
                wp.customize( 'header-btn-1-text-color', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( !button.length )
                            return;

                        var hex     = newval;
                        var transp  = parseInt( wp.customize.instance( 'header-btn-1-text-transp' ).get() ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-1-text-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Text Transparency
                wp.customize( 'header-btn-1-text-transp', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( !button.length )
                            return;

                        var hex     = wp.customize.instance( 'header-btn-1-text-color' ).get();
                        var transp  = parseInt( newval ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-1-text-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Text Color ( mouse over )
                wp.customize( 'header-btn-1-text-h-color', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( !button.length )
                            return;

                        var hex     = newval;
                        var transp  = parseInt( wp.customize.instance( 'header-btn-1-text-h-transp' ).get() ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-1-text-h-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1:hover{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Text Transparency ( mouse over )
                wp.customize( 'header-btn-1-text-h-transp', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( !button.length )
                            return;

                        var hex     = wp.customize.instance( 'header-btn-1-text-h-color' ).get();
                        var transp  = parseInt( newval ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-1-text-h-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1:hover{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Background Color
                wp.customize( 'header-btn-1-bkg-color', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( !button.length )
                            return;

                        var hex     = newval;
                        var transp  = parseInt( wp.customize.instance( 'header-btn-1-bkg-transp' ).get() ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-1-bkg-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1{' +
                            'background-color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Background Transparency
                wp.customize( 'header-btn-1-bkg-transp', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( !button.length )
                            return;

                        var hex     = wp.customize.instance( 'header-btn-1-bkg-color' ).get();
                        var transp  = parseInt( newval ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-1-bkg-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1{' +
                            'background-color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Background Color ( mouse over )
                wp.customize( 'header-btn-1-bkg-h-color', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( !button.length )
                            return;

                        var hex     = newval;
                        var transp  = parseInt( wp.customize.instance( 'header-btn-1-bkg-h-transp' ).get() ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-1-bkg-h-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1:hover{' +
                            'background-color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Background Transparency ( mouse over )
                wp.customize( 'header-btn-1-bkg-h-transp', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1' );

                        if( !button.length )
                            return;

                        var hex     = wp.customize.instance( 'header-btn-1-bkg-h-color' ).get();
                        var transp  = parseInt( newval ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-1-bkg-h-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-1:hover{' +
                            'background-color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });
            }


            {   // BUTTON 2

                // Text
                wp.customize( 'header-btn-2-text', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( button.length )
                            button.html( newval );
                    });
                });

                // Description
                wp.customize( 'header-btn-2-description', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( button.length )
                            button.attr( 'title', newval );
                    });
                });

                // Url
                wp.customize( 'header-btn-2-url', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( button.length )
                            button.attr( 'href', newval );
                    });
                });

                // Target
                wp.customize( 'header-btn-2-target', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( !button.length )
                            return;

                        if( newval ){
                            button.attr( 'target', "_blank" );
                        }

                        else{
                            button.removeAttr( 'target' );
                        }
                    });
                });

                // Text Color
                wp.customize( 'header-btn-2-text-color', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( !button.length )
                            return;

                        var hex     = newval;
                        var transp  = parseInt( wp.customize.instance( 'header-btn-2-text-transp' ).get() ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-2-text-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Text Transparency
                wp.customize( 'header-btn-2-text-transp', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( !button.length )
                            return;

                        var hex     = wp.customize.instance( 'header-btn-2-text-color' ).get();
                        var transp  = parseInt( newval ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-2-text-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Text Color ( mouse over )
                wp.customize( 'header-btn-2-text-h-color', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( !button.length )
                            return;

                        var hex     = newval;
                        var transp  = parseInt( wp.customize.instance( 'header-btn-2-text-h-transp' ).get() ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-2-text-h-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2:hover{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Text Transparency ( mouse over )
                wp.customize( 'header-btn-2-text-h-transp', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( !button.length )
                            return;

                        var hex     = wp.customize.instance( 'header-btn-2-text-h-color' ).get();
                        var transp  = parseInt( newval ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-2-text-h-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2:hover{' +
                            'color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Background Color
                wp.customize( 'header-btn-2-bkg-color', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( !button.length )
                            return;

                        var hex     = newval;
                        var transp  = parseInt( wp.customize.instance( 'header-btn-2-bkg-transp' ).get() ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-2-bkg-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2{' +
                            'background-color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Background Transparency
                wp.customize( 'header-btn-2-bkg-transp', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( !button.length )
                            return;

                        var hex     = wp.customize.instance( 'header-btn-2-bkg-color' ).get();
                        var transp  = parseInt( newval ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-2-bkg-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2{' +
                            'background-color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Background Color ( mouse over )
                wp.customize( 'header-btn-2-bkg-h-color', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( !button.length )
                            return;

                        var hex     = newval;
                        var transp  = parseInt( wp.customize.instance( 'header-btn-2-bkg-h-transp' ).get() ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-2-bkg-h-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2:hover{' +
                            'background-color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });

                // Background Transparency ( mouse over )
                wp.customize( 'header-btn-2-bkg-h-transp', function( value ){
                    value.bind(function( newval ){
                        var button = jQuery( 'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2' );

                        if( !button.length )
                            return;

                        var hex     = wp.customize.instance( 'header-btn-2-bkg-h-color' ).get();
                        var transp  = parseInt( newval ) / 100;
                        var rgba    = 'rgba( ' + tempo_hex2rgb( hex ) + ', ' + transp + ' )';

                        jQuery( 'style#header-btn-2-bkg-h-color' ).html(
                            'header.tempo-header div.tempo-header-partial .tempo-header-buttons .tempo-btn.btn-2:hover{' +
                            'background-color: ' + rgba + ';' +
                            '}'
                        );
                    });
                });
            }

        }
    }


    {   //- BREADCRUMBS -//

        wp.customize( 'breadcrumbs-home-text' , function( value ){
            value.bind(function( newval ){
            	jQuery( 'div.tempo-breadcrumbs li#home-text a span' ).html( newval );
            });
        });

        wp.customize( 'breadcrumbs-home-description' , function( value ){
            value.bind(function( newval ){
                jQuery( 'div.tempo-breadcrumbs li#home-text a' ).attr( 'title' , newval );
            });
        });

        wp.customize( 'breadcrumbs-space' , function( value ){
            value.bind(function( newval ){

                var padding = parseInt( newval );

                jQuery( 'style#breadcrumbs-space').html(
                    'div.tempo-breadcrumbs div.tempo-container.main{' +
                    'padding-top: ' + parseInt( padding ) + 'px;' +
                    'padding-bottom: ' + parseInt( padding ) + 'px;' +
                    '}' +

                    '@media (max-width: 991px ){' +
                    'div.tempo-breadcrumbs div.tempo-container.main{' +
                    'padding-top: ' + parseInt( padding * 991/1170 ) + 'px;' +
                    'padding-bottom: ' + parseInt( padding * 991/1170 ) + 'px;' +
                    '}' +
                    '}' +

                    '@media (max-width: 767px ){' +
                    'div.tempo-breadcrumbs div.tempo-container.main{' +
                    'padding-top: ' + parseInt( padding * 767/1170 ) + 'px;' +
                    'padding-bottom: ' + parseInt( padding * 767/1170 ) + 'px;' +
                    '}' +
                    '}' +

                    '@media (max-width: 520px ){' +
                    'div.tempo-breadcrumbs div.tempo-container.main{' +
                    'padding-top: ' + parseInt( padding * 520/1170 ) + 'px;' +
                    'padding-bottom: ' + parseInt( padding * 520/1170 ) + 'px;' +
                    '}' +
                    '}'
                );
            });
        });
    }

})(jQuery);
