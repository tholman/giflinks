var GifLinks = (function() {

  'use strict';
  var body;
  var container;
    
  /* -------------------------
  /*          UTILS
  /* -------------------------*/

  // Soft object augmentation
  function extend( target, source ) {

    for ( var key in source ) {
      if ( !( key in target ) ) {
        target[ key ] = source[ key ];
      }
    }
    
    return target;
  }

  // Applys a dict of css properties to an element
  function applyProperties( target, properties ) {

    for( var key in properties ) {
      target.style[ key ] = properties[ key ];
    }
  }

  /* -------------------------
  /*          App
  /* -------------------------*/

  // Initialize
  function init( elements ) {

    if ( elements.length ) {

      // Loop and assign
      for( var i = 0; i < elements.length; i++ ) {
        track( elements[ i ] );
      }

    } else {
        track( elements );
    }
  }

  function track( element ) {

    // Only track if the element has a gif source!
    if( element.getAttribute( 'data-src' ) ) {

      element.addEventListener( 'mouseover', function() {
        startPartying( this ); // "Party on Wayne" ~ "Party on Garth"
      },  false ); 

      element.addEventListener( 'mouseout',  function() {
        stopParting(); // Someone called the cops.
      }, false); 
    }
  }

  // Create and cache the gif container.
  function createContainer() {

    var containerProperties = {
      'backgroundPosition': '50% 50%',
      'backgroundSize': 'cover',
      'pointerEvents': 'none',
      'position': 'fixed',
      'zIndex': '999999',
      'height': '100%',
      'width': '100%',
      'margin': '0px',
      'left': '0px',
      'top': '0px'
    }

    container = document.createElement( 'div' );
    applyProperties( container, containerProperties );
  }

  // Add the background to the container, and the container to the page!
  function startPartying( element ) {

    var awesomeGif = element.getAttribute( 'data-src' )
    if( awesomeGif ) {
      container.style[ 'backgroundImage' ] = 'url(' + awesomeGif + ')';
      body.appendChild( container );
    }
  }

  // Remove the container
  function stopParting() {
    
    body.removeChild( container );
  }


  function main() {

    // Caching
    body = document.body;
    createContainer();

    // Gather elements, initialize giflinks
    var elements = document.querySelectorAll( '.giflink' );
    init( elements );
  }

  return extend( main, {
      
  });

})();