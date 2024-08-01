( function( $ ) {

	// ready event
	$( function() {
		watermarkFileUpload = {
			frame: function() {
				if ( this._frameWatermark )
					return this._frameWatermark;

				this._frameWatermark = wp.media( {
					title: iwArgsUpload.title,
					frame: iwArgsUpload.frame,
					button: iwArgsUpload.button,
					multiple: iwArgsUpload.multiple,
					library: {
						type: 'image'
					}
				} );

				this._frameWatermark.on( 'open', this.updateFrame ).state( 'library' ).on( 'select', this.select );

				return this._frameWatermark;
			},
			select: function() {
				var attachment = this.frame.state().get( 'selection' ).first();

				if ( $.inArray( attachment.attributes.mime, [ 'image/gif', 'image/jpg', 'image/jpeg', 'image/png', 'image/svg+xml' ] ) !== -1 ) {
					$( '#iw_upload_image' ).val( attachment.attributes.id );

					if ( $( 'div#previewImg_imageDiv img#previewImg_image' ).attr( 'src' ) !== '' )
						$( 'div#previewImg_imageDiv img#previewImg_image' ).replaceWith( '<img id="previewImg_image" src="' + attachment.attributes.url + '" alt="" width="300" />' );
					else
						$( 'div#previewImg_imageDiv img#previewImg_image' ).attr( 'src', attachment.attributes.url );

					$( '#iw_turn_off_image_button' ).removeAttr( 'disabled' );
					$( 'div#previewImg_imageDiv img#previewImg_image' ).show();

					var img = new Image();

					img.src = attachment.attributes.url;

					img.onload = function() {
						$( 'p#previewImageInfo' ).html( iwArgsUpload.originalSize + ': ' + this.width + ' ' + iwArgsUpload.px + ' / ' + this.height + ' ' + iwArgsUpload.px );
					}
				} else {
					$( '#iw_turn_off_image_button' ).attr( 'disabled', 'true' );
					$( '#iw_upload_image' ).val( 0 );
					$( 'div#previewImg_imageDiv img#previewImg_image' ).attr( 'src', '' ).hide();
					$( 'p#previewImageInfo' ).html( '<strong>' + iwArgsUpload.notAllowedImg + '</strong>' );
				}
			},
			init: function() {
				$( '#wpbody' ).on( 'click', 'input#iw_upload_image_button', function( e ) {
					e.preventDefault();
					watermarkFileUpload.frame().open();
				} );
			}
		};

		watermarkFileUpload.init();

		$( document ).on( 'click', '#iw_turn_off_image_button', function() {
			$( this ).attr( 'disabled', 'true' );
			$( '#iw_upload_image' ).val( 0 );
			$( 'div#previewImg_imageDiv img#previewImg_image' ).attr( 'src', '' ).hide();
			$( 'p#previewImageInfo' ).html( iwArgsUpload.noSelectedImg );
		} );


		
		
		// Watermark pattern image upload
		watermarkPatternFileUpload = {
			frame: function() {
				if ( this._frameWatermark )
					return this._frameWatermark;

				this._frameWatermark = wp.media( {
					title: iwArgsUpload2.title,
					frame: iwArgsUpload2.frame,
					button: iwArgsUpload2.button,
					multiple: iwArgsUpload2.multiple,
					library: {
						type: 'image'
					}
				} );

				this._frameWatermark.on( 'open', this.updateFrame ).state( 'library' ).on( 'select', watermarkPatternFileUpload.select );

				return this._frameWatermark;
			},
			select: function() {
				var attachment = this.frame.state().get( 'selection' ).first();

				// Watermark pattern image
				if ( $.inArray( attachment.attributes.mime, [ 'image/gif', 'image/jpg', 'image/jpeg', 'image/png', 'image/svg+xml' ] ) !== -1 ) {
					$( '#iw_upload_pattern_image' ).val( attachment.attributes.id );

					if ( $( 'div#previewImg_pattern_imageDiv img#previewImg_pattern_image' ).attr( 'src' ) !== '' )
						$( 'div#previewImg_pattern_imageDiv img#previewImg_pattern_image' ).replaceWith( '<img id="previewImg_pattern_image" src="' + attachment.attributes.url + '" alt="" width="300" />' );
					else
						$( 'div#previewImg_pattern_imageDiv img#previewImg_pattern_image' ).attr( 'src', attachment.attributes.url );

					$( '#iw_turn_off_pattern_image_button' ).removeAttr( 'disabled' );
					$( 'div#previewImg_pattern_imageDiv img#previewImg_pattern_image' ).show();

					var img = new Image();

					img.src = attachment.attributes.url;

					img.onload = function() {
						$( 'p#previewPatternImageInfo' ).html( iwArgsUpload2.originalSize + ': ' + this.width + ' ' + iwArgsUpload2.px + ' / ' + this.height + ' ' + iwArgsUpload2.px );
					}
				} else {
					$( '#iw_turn_off_pattern_image_button' ).attr( 'disabled', 'true' );
					$( '#iw_upload_pattern_image' ).val( 0 );
					$( 'div#previewImg_pattern_imageDiv img#previewImg_pattern_image' ).attr( 'src', '' ).hide();
					$( 'p#previewPatternImageInfo' ).html( '<strong>' + iwArgsUpload2.notAllowedImg + '</strong>' );
				}
			},
			init: function() {
				$( '#wpbody' ).on( 'click', 'input#iw_upload_pattern_image_button', function( e ) {
					e.preventDefault();
					watermarkPatternFileUpload.frame().open();
				} );
			}
		};

		watermarkPatternFileUpload.init();

		$( document ).on( 'click', '#iw_turn_off_pattern_image_button', function() {
			$( this ).attr( 'disabled', 'true' );
			$( '#iw_upload_pattern_image' ).val( 0 );
			$( 'div#previewImg_pattern_imageDiv img#previewImg_pattern_image' ).attr( 'src', '' ).hide();
			$( 'p#previewPatternImageInfo' ).html( iwArgsUpload2.noSelectedImg );
		} );
	} );

} )( jQuery );