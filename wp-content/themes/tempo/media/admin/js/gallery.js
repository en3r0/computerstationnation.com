/* CUSTOM GALLERY */
( function( $ ) {
    var media = wp.media;
    
    media.view.Settings.Gallery = media.view.Settings.Gallery.extend({
        render: function() {
            media.view.Settings.prototype.render.apply( this, arguments );

            // Append the custom template
            this.$el.append( media.template( 'tempo-gallery-settings' ) );

            // Save the setting
            media.gallery.defaults.tempo_style = 'none';
            this.update.apply( this, [ 'tempo_style' ] );
            return this;
        }
    });
} )( jQuery );