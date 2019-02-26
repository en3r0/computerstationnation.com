;(function( $ ){
	$.fn.hasAttr = function( name ){
   		return this.attr( name ) !== undefined;
	};

})( jQuery );


function tempo_callback( callback, args ){
	(function( c, p ) {
        try{
            c( p );
        }catch ( e ){
            if (e instanceof SyntaxError) {
                console.log( (e.message) );
            }
        }
    })( callback, args );
}

var tempo_uploader = {

	run : function( selector, args, callback ){

		var self = this;

	    jQuery(document).ready(function($){

	        var custom_uploader;

	        if (custom_uploader) {
	            custom_uploader.open();
	            return;
	        }

	        custom_uploader = wp.media({
	            title: 'Choose Image',
	            button: {
	                text: 'Choose Image'
	            },
	            multiple: false
	        });

	        custom_uploader.on( 'select', function() {
	            var attachment = custom_uploader.state().get('selection').first().toJSON();

	            var post_id = parseInt( jQuery('#post_ID' ).val() );

	            if( post_id > 0 ){
	                jQuery.post( ajaxurl, {
	                        action: 'attach_to_post',
	                        attachment_id: attachment.id,
	                        post_id: post_id
	                }).done( function( result ){});
	            }

	            if( typeof args === "object" ){
	            	args.attachment = attachment;
	            	args.selector 	= selector;

	            	if( self.callback.hasOwnProperty( callback ) ){
	            		tempo_callback( self.callback[ callback ], args )
	            	}
	            }
	            else{
	            	console.log( 'MISSING ARGS [ OBJECT TYPE ARGS ]:', typeof args, args );
	            }
	        });

	        custom_uploader.open();
	    });
	},
	callback : {

		// default
		input : function( args ){
			jQuery(document).ready(function(){
				if( args.hasOwnProperty( 'selector' ) ){
					jQuery( args.selector ).parent().children( 'input[type="url"]' ).val( args.attachment.url );
				}
		    });
		},

		// upload with ID
		id : function( args ){
			jQuery(document).ready(function(){
				if( args.hasOwnProperty( 'selector' ) ){
					jQuery( args.selector ).parent().children( 'input[type="url"]' ).val( args.attachment.url );

					if( args.hasOwnProperty( 'id' ) ){
		        		jQuery( args.id ).find( 'input[type="hidden"]' ).val( args.attachment.id );
		        	}
				}
		    });
		},

		// Shortcode Manager Upload
		shortcode : function( args ){
			jQuery(document).ready(function(){
				if( args.hasOwnProperty( 'selector' ) ){
					jQuery( args.selector ).parent().children( 'input[type="url"]' ).val( args.attachment.url );

		        	var name = jQuery( args.selector ).parent().children( 'input[type="url"]' ).attr( 'name' );

		        	if( args.hasOwnProperty( 'shortcode' ) ){
		        		jQuery( args.shortcode ).find( 'div.zeon-shortcode-code-wrapper span.zeon-shortcode-code' ).find( 'span.' + name + ' span.value').text( args.attachment.url );
		        	}
		        }
		    });
		},
	}
}


var tempo_html = {
	in_array : function( key, array ){

    	var i = array.length;
    	while( i-- ){
        	if ( array[ i ] === key ) {
            	return true;
        	}
    	}
    	return false;
	},

	// is selected
	is_selected : function( selector, args ){

		var self 	= this;

		jQuery(document).ready(function(){

			var show 	= [];
	        var hide 	= [];

	        jQuery( selector ).find( 'option' ).each(function(){
	            if( jQuery( this ).is(':selected') ){
	                var val = jQuery( this ).val().trim();

	                if( args.hasOwnProperty( 'show' ) ){
	                	show = args.show;
	                }

	                if( args.hasOwnProperty( 'hide' ) ){
	                	hide = args.hide;
	                }

	                for ( var key in args ) {

	                    if( key == val ){
	                        if( args[ key ].hasOwnProperty( 'show' ) ){
	                            for( var i = 0; i < args[ key ].show.length; i++ ){
	                            	if( !self.in_array( args[ key ].show[ i ], show ) ){
	                            		show[ show.length ] = args[ key ].show[ i ];
	                            	}
	                            	if( self.in_array( args[ key ].show[ i ], hide ) ){
	                            		hide.splice( hide.indexOf( args[ key ].show[ i ] ) , 1 );
	                            	}
	                            }
	                        }
	                        if( args[ key ].hasOwnProperty( 'hide' ) ){
	                            for( var i = 0; i < args[ key ].hide.length; i++ ){
	                            	if( !self.in_array( args[ key ].hide[ i ], hide ) ){
	                            		hide[ hide.length ] = args[ key ].hide[ i ];
	                            	}
	                            	if( self.in_array( args[ key ].hide[ i ], show ) ){
	                            		show.splice( show.indexOf( args[ key ].hide[ i ] ) , 1 );
	                            	}
	                            }
	                        }
	                        if( !args[ key ].hasOwnProperty( 'show' ) && !args[ key ].hasOwnProperty( 'hide' ) ){
	                            for( var i = 0; i < args[ key ].length; i++ ){
	                            	if( !self.in_array( args[ key ][ i ], show ) ){
	                            		show[ show.length ] = args[ key ][ i ];
	                            	}
	                            	if( self.in_array( args[ key ][ i ], hide ) ){
	                            		hide.splice( hide.indexOf( args[ key ][ i ] ) , 1 );
	                            	}
	                            }
	                        }
	                    }
	                    else{
	                        if( args[ key ].hasOwnProperty( 'hide' ) ){
	                            for( var i = 0; i < args[ key ].hide.length; i++ ){
	                            	if( !self.in_array( args[ key ].hide[ i ], show ) ){
	                            		hide[ hide.length ] = args[ key ].hide[ i ];
	                            	}
	                            }
	                        }
	                    }
	                }
	            }
	        });

			if( hide.length ){
				jQuery( hide.toString() ).hide( 'slow' );
			}

			if( show.length ){
				jQuery( show.toString() ).show( 'slow' );
			}
		});
	}
};

var tempo_input_icon_select = function( input ){
	jQuery(document).ready(function(){

		var self 	= jQuery( input );
		var parent  = jQuery( input ).parent();

		// open panel
		var panel = jQuery( parent ).find( '.tempo-icon-select-options' );

		if( !panel.hasClass( 'enabled' ) ){
			jQuery( 'body' ).css({ 'overflow' : 'hidden' });
			panel.addClass( 'enabled' );
		}

		// init close action
		jQuery( panel ).find( 'span.tempo-icon-options-cancel a' ).click(function(){
			if( panel.hasClass( 'enabled' ) ){
				jQuery( 'body' ).css({ 'overflow' : 'initial' });
				panel.removeClass( 'enabled' );
			}
		});

		// init search action
		jQuery( panel ).find( 'input[type="text"].tempo-icon-search-input').on( 'focusin' , function(){
            jQuery( this ).on( 'keyup' , function(){
                jQuery( panel ).find( '.tempo-icon-select-options-content i[class^="tempo-icon-"]' ).parent('div.tempo-icon-select-option').hide();

                var value = jQuery( this ).val();
                jQuery( panel ).find( '.tempo-icon-select-options-content i[class^="tempo-icon-' + value + '"]' ).parent('div.tempo-icon-select-option').show();
            });
        });

        // init select item
        jQuery( parent ).find( '.tempo-icon-select-option' ).click(function(){
			var value = jQuery( this ).find( 'i' ).attr( 'data-value' );

			jQuery( parent ).find( '.tempo-icon-select-option' ).removeClass( 'selected' );
			jQuery( this ).addClass( 'selected' );
			jQuery( parent ).find( '.tempo-icon-select-value i' ).attr( 'class' , value );
			jQuery( parent ).find( '.tempo-icon-select-value i' ).attr( 'data-value' , value );
			jQuery( parent ).find( 'input[type="hidden"]' ).val( value );
			jQuery( parent ).find( 'input[type="text"].tempo-icon-search-input' ).val( value.replace( "tempo-icon-" , '' , "gi" ) );

			var show 	= [];
			var hide    = [];

			if( jQuery( this ).find( 'i' ).hasAttr( 'data-action' ) ){
				show = jQuery( this ).find('i').attr( 'data-action' ).toString().split(',');
			}

			jQuery( parent ).find( '.tempo-icon-select-option' ).each(function(){

				if( jQuery( this ).find( 'i' ).hasAttr( 'data-action' ) ){
					var array = jQuery( this ).find('i').attr( 'data-action' ).toString().split(',');

					for( var i = 0; i < array.length; i++ ){
						if( !tempo_ahtml.in_array( array[ i ] , show ) ){
							hide[ hide.length ] = array[ i ];
						}
					}
				}
			});

			if( hide.length ){
				jQuery( hide.toString() ).hide( 'slow' );
			}

			if( show.length ){
				jQuery( show.toString() ).show( 'slow' );
			}

			var panel = jQuery( parent ).find( '.tempo-icon-select-options' );

			if( panel.hasClass( 'enabled' ) ){
				jQuery( 'body' ).css({ 'overflow' : 'initial' });
				panel.removeClass( 'enabled' );
			}
		});
	});
}

jQuery(document).ready(function(){

	// logic
	jQuery( '.tempo-input-logic' ).click(function(){
		if( jQuery( this ).hasClass( 'is-on' ) ){
			jQuery( this ).removeClass( 'is-on' );
			jQuery( this ).addClass( 'is-off' );

			if( jQuery( this ).hasAttr( 'data-action' ) ){
				jQuery( jQuery( this ).attr( 'data-action' ) ).hide( 'slow' );
			}

			jQuery( this ).find( 'input' ).val( 0 );
		}
		else{
			jQuery( this ).removeClass( 'is-off' );
			jQuery( this ).addClass( 'is-on' );

			if( jQuery( this ).hasAttr( 'data-action' ) ){
				jQuery( jQuery( this ).attr( 'data-action' ) ).show( 'slow' );
			}

			jQuery( this ).find( 'input' ).val( 1 );
		}
	});

	// image select
	jQuery( '.tempo-input-image-select' ).each(function(){
		var self 	= this;

		jQuery( self ).find( '.tempo-image-select-option' ).click(function(){
			var value = jQuery( this ).find( 'img' ).attr( 'data-value' );
			var src = jQuery( this ).find( 'img' ).attr( 'src' );

			jQuery( self ).find( '.tempo-image-select-option' ).removeClass( 'selected' );
			jQuery( this ).addClass( 'selected' );
			jQuery( self ).find( '.tempo-image-select-value img' ).attr( 'src' , src );
			jQuery( self ).find( '.tempo-image-select-value img' ).attr( 'data-value' , value );
			jQuery( self ).find( 'input[type="hidden"]' ).val( value );

			var show 	= [];
			var hide    = [];

			if( jQuery( this ).find( 'img' ).hasAttr( 'data-action' ) ){
				show = jQuery( this ).find('img').attr( 'data-action' ).toString().split(',');
			}

			jQuery( self ).find( '.tempo-image-select-option' ).each(function(){

				if( jQuery( this ).find( 'img' ).hasAttr( 'data-action' ) ){
					var array = jQuery( this ).find('img').attr( 'data-action' ).toString().split(',');

					for( var i = 0; i < array.length; i++ ){
						if( !tempo_ahtml.in_array( array[ i ] , show ) ){
							hide[ hide.length ] = array[ i ];
						}
					}
				}
			});

			if( hide.length ){
				jQuery( hide.toString() ).hide( 'slow' );
			}

			if( show.length ){
				jQuery( show.toString() ).show( 'slow' );
			}
		});
	});

	jQuery( '.tempo-pickcolor' ).each(function(){
		jQuery( this ).wpColorPicker();
	});

    // multilanguages flags
    jQuery('.tempo-lang-flags a' ).click(function(){
		var self = jQuery( this ).parent();
		if( !jQuery( this ).hasClass( 'current-lang' ) ){
			jQuery( self ).find( 'a' ).removeClass( 'current-lang' );
			jQuery( this ).addClass( 'current-lang' );
			var input = jQuery( this ).attr( 'data-lang' );

			jQuery( self ).parent().children( '.tempo-lang' ).removeClass( 'current-lang' );
			jQuery( self ).parent().children( '.tempo-lang.' + input ).addClass( 'current-lang' );
			jQuery( self ).parent().children( '.tempo-lang.' + input ).focus();
		}
	});
});
