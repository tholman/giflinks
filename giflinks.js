var GifLinks = (function() {

  'use strict';
    
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
        activate( this ); // Start the party!
      },  false ); 

      element.addEventListener( 'mouseout',  function() {
        deactivate(); // End the party, aww :(
      }, false); 
    }
  }

  function activate( element ) {
    console.log( "activate!", element )
  }

  function deactivate() {
    console.log( "aww" )
  }


  function main() {

    // Gather elements, initialize giflinks
    var elements = document.querySelectorAll( '.giflink' );
    init( elements );
  }

  return extend( main, {
      
  });

})();