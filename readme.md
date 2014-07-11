# GifLinks

A simple javascript library used for adding full screen gif action as a hover effect. This is very serious stuff, [here's a demo](http://tholman.com/giflinks)! You can also play with the source [live on CodePen](http://codepen.io/tholman/pen/gJBdi).

### Instructions

GifLinks is a stand alone library (no jquery, or the likes) so usage is pretty straight forward. All styling of elements is up to the user, `GifLinks.js` only handles the creation, styling and management of the gif popup, as well as providing a few css classes for custom styling.

#### HTML

There aren't many restrictions for the `html` elements you want to use to activate GifLinks, the one mandatory attribute a `data-src`, which needs to point to the gif/image you wish to flash up when hovering.

```html
<a href="awesome.html" data-src="./img/awesome.gif"> Check this out! </a>

<!-- You can use any html element, really -->

<span class="anything" data-src="./img/amazing.gif" /> Kapow! </span>
```

#### JS

GifLinks.js is fairly robust when it comes to assigning elements to be used, its as simple as passing them to the ```Giflinks``` function, once they have been rendered. You can do this with `document.querySelector` finding your elements however you like.

```html
<a href="awesome.html" data-src="./img/awesome.gif"> Check this out! </a>

<script>
window.onload = function() {
	// Add GifLinks to all anchor tags on the page!
    var element = document.querySelector( 'a' );
	GifLinks( element );
}
</script>
```

Or doing multiple at once, with a classname.

```html
<a class="giflink-to-be" href="awesome.html" data-src="./img/awesome.gif"> Check this out! </a>
<a class="giflink-to-be" href="incredible.html" data-src="./img/incredible.gif"> Just Incredible! </a>

<script>
window.onload = function() {
	// Giflinkify all images with the 'giflink-to-be' classname.
    var elements = document.querySelectorAll( '.giflink-to-be' );
	GifLinks( elements );
}
</script>
```

You can also pass in an option to preload the image, In this case the giflinks will only become active when loading is complete!

```html
<a href="awesome.html" data-src="./img/awesome.gif"> Check this out! </a>

<script>
window.onload = function() {
	// Add GifLinks to all a tags on the page, and preload!
    var element = document.querySelector( 'a' );
	GifLinks( element, { preload: true } );
}
</script>
```

#### CSS
There are a few little things to play with, when it comes to css.

All active giflinks will have a `ready` and a `giflink` class. As well as a `has-link` and `no-link` class, if the element contains an active href.

Also, if you preload, the giflinks will recieve a `preloaded` class, which can be used to show the link is ready to be hovered, for example:

```css
.giflink.preloaded {
	transition: color 300ms;
	color: #ff0000;
}
```

### License

The MIT License (MIT)

Copyright (C) 2014 ~ [Tim Holman](http://tholman.com) ~ timothy.w.holman@gmail.com
