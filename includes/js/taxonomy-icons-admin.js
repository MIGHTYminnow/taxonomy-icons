/**
 * Taxonomy Icons admin jQuery.
 *
 * @since 	1.0.0
 *
 * @package Taxonomy Icons
 */

(function($) {

$( document ).ready( function() {

	// Set icons 
	setIconPlaceholders();

	$( 'body' ).on( 'change', '.tax-icons-icon-selector', setIconPlaceholders );
});
	
function setIconPlaceholders() {
	var $iconSelector = $( '.tax-icons-icon-selector' );
	var $iconPlaceholder = $iconSelector.next( '.tax-icons-icon-placeholder' );
	var iconValue = $iconSelector.val();
	
	// Restore icon placeholder to default class
	$iconPlaceholder.attr('class', 'tax-icons-icon-placeholder');;

	// Add icon class to icon placeholder
	$iconPlaceholder.addClass( iconValue );
}
	
})( jQuery );