=== Taxonomy Icons ===
Contributors:      McGuive7, MIGHTYminnow, Braad
Donate link:       http://wordpress.org/plugins/taxonomy-icons
Tags:              taxonomy, category, tag, taxonomies, categories, tags, term, icon, better, font, awesome
Requires at least: 3.5
Tested up to:      4.2
Stable tag:        1.0.3
License:           GPLv2 or later
License URI:       http://www.gnu.org/licenses/gpl-2.0.html

Add custom icons to your categories, tags, and custom taxonomies.

== Description ==
Taxonomy Icons allows you to easily add icons to your taxononomy, category, and tag terms. The plugin automatically integrates the latest version of [Font Awesome Icons](http://fortawesome.github.io/Font-Awesome/), allowing you to choose from hundreds of icons to assign to your taxonomy terms.

= Assigning Icons =
Taxonomy Icons gives you an easy-to-use icon selector that is available when creating new taxonomy terms (categories, tags, custom taxonomies), or editing existing ones. Simply navigate to the taxonomy screen in the WordPress admin (e.g. Posts > Categories), and you'll see the drop down selector under the heading "Taxonomy Icon". When you select a new icon, a preview of that icon will appear to the side of the dropdown.

= Outputting Icons =
*Note: By default, Taxonomy Icons does not automatically output any icons for you - this is due to the wide variety of hooks/filters that varying themes and plugins use to ouput taxonomy terms.* Taxonomy Icons gives you two methods to output icons:

**1. Shortcode**
`[tax_icon term_id="" class=""]`

**2. PHP Function**
`<?php tax_icons_output_term_icon( $term_id, $class ); ?>`

Both methods of output utilize the same attributes/parameters:

**term_id**
The ID of the taxonomy term for which to output the associated icon. If no term_id is specified, the plugin will attempt to determine the current taxonomy term.

**class**
Any extra classes you would like appened to the output HTML icon element.

= Example =
Assuming we have a "Travel" category with an term ID of 1 which has been assigned the "Plane" icon, both of the following methods will output the same thing:

**Shortcode/PHP:**
`[tax_icon term_id="1" class="extra-class"]`
`<?php tax_icons_output_term_icon( 1, 'extra-class' ); ?>`

**Output:**
`<i class="fa fa-plane extra-class"></i>`

= Adding Custom Icons =
To add your own icons to the Taxonomy Icons dropdown selector, you'll need to 1) Add your icons to the list with the `tax_icons_icon_array` filter, and 2) Enqueue you custom icon font CSS.

**1. Add your icons to the list**
Use the `tax_icons_icon_array` filter to add your custom icons as follows:
`
add_filter( 'tax_icons_icon_array', 'prefix_add_tax_icons' );
function prefix_add_tax_icons( $icons ) {

	$icons = array(
		'Icon One' => 'icon-one-class',
		'Icon Two' => 'icon-two-class',
	);

	return $icons;
}
`

Just make sure you return an array with the icon names as keys, and the icon CSS classes as values.

**2. Enqueue your custom icon font CSS**
Use the `wp_enqueue_scripts` and `admin_enqueue_scripts` hooks to enqueue your custom icon font stylesheet in both the front-end and back-end. This is necessary for the icons to render on both the public and admin sides of your site.

== Installation ==

= Manual Installation =

1. Upload the entire `/taxonomy-icons` directory to the `/wp-content/plugins/` directory.
2. Activate Taxonomy Icons through the 'Plugins' menu in WordPress.

== Screenshots ==
1. Adding a new "Travel" category with the plane icon.
2. Icons automatically display in all admin views to easily see which taxonomy terms do/don't have icons.

== Changelog ==

= 1.0.3 =
* Update Better Font Awesome Library to version 1.3.4.
* Fix double shortcode insert issue.
* Fix behavior in which clicking shortcode insert button scrolls to top of page.

= 1.0.2 =
* Update Better Font Awesome Library with better prefix removal method and updated JS to initialize icon picker.

= 1.0.1 =
* Update JS to allow for custom icon filtering without prefixes.

= 1.0.0 =
* First release

== Upgrade Notice ==

= 1.0.3 =
* Update Better Font Awesome Library to version 1.3.4.
* Fix double shortcode insert issue.
* Fix behavior in which clicking shortcode insert button scrolls to top of page.

= 1.0.2 =
* Update Better Font Awesome Library with updated JS to initialize icon picker.

= 1.0.1 =
* Update JS to allow for custom icon filtering without prefixes.

= 1.0.0 =
First Release
