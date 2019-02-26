;(function( $ ){
    $.fn.hasAttr = function( name ){
        return this.attr( name ) !== undefined;
    };

})( jQuery );

jQuery(document).ready(function(){
	if( typeof tempo_customize_panel == 'object' && tempo_customize_panel.hasOwnProperty( 'upgrade_url' ) ){
	    if( jQuery( 'li#accordion-section-themes' ).length ){
	        jQuery( 'li#accordion-section-themes' ).append(
                '<span class="upgrade-hint">'  + tempo_customize_panel.upgrade_hint + '</span>' +
	            '<a href="' + tempo_customize_panel.upgrade_url + '" title="' + tempo_customize_panel.upgrade_title + '" class="tempo-button tempo-submit-options">' +
	            '<i class="tempo-icon-publish"></i>' + tempo_customize_panel.upgrade_label +
	            '<small>' + tempo_customize_panel.upgrade_description +'</small>' +
	            '</a>'
	        );
	    }
	}

    if( jQuery( 'li.customize-control.customize-control-range' ).length && tempo_customize_panel.hasOwnProperty( 'range_reset_label' ) ){
        jQuery( 'li.customize-control.customize-control-range' ).each(function(i){
            var self    = jQuery( this );
            var input   = jQuery( this ).find( 'input' );
            var label   = jQuery( this ).find( 'span.customize-control-title' );

            var unit    = '';

            if( input.hasAttr( 'data-unit' ) ){
                unit = ' ' + input.attr( 'data-unit' );
            }

            if( input.hasAttr( 'data-deff' ) ){
                var deff = input.attr( 'data-deff' );
            }

            if( label.find( 'span.tempo-range-counter' ).length ){
                label.find( 'span.tempo-range-counter span.counter' ).html( input.val().toString() );
            }
            else{
                label.append( '<span class="tempo-range-counter"><span class="counter">' + input.val().toString() + '</span>' + unit + '</span>' );
            }

            input.change(function(){
                label.find( 'span.tempo-range-counter span.counter' ).html( jQuery( this ).val().toString() );
            });

            if( typeof deff !== "undefined" ){
                var hint = jQuery( '<a href="javascript:void(null);" class="hint">' + tempo_customize_panel.range_reset_label + '</a>' );
                hint.click(function(){
                    input.val( deff );
                    label.find( 'span.counter' ).html( deff.toString() );
                    input.trigger( "change" );
                });

                hint.appendTo( self );
            }
        });
    }
});
