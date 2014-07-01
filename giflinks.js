var GifLinks = (function() {

  'use strict';
    
  /* -------------------------
  /*          UTILS
  /* -------------------------*/

  // Soft object augmentation
  function extend( target, source ) {

      for ( var key in source )

          if ( !( key in target ) )

              target[ key ] = source[ key ];

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
  }


  function main() {

    // Gather elements, initialize giflinks
    var elements = document.querySelectorAll( '.giflink' );
    init( elements );
  }

  return extend( main, {
      
  });

})();