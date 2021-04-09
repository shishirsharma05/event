// event data

	var logDiv = $( "#log" );
	 
	for ( var i = 0; i < 5; i++ ) {
	  $( "button" ).eq( i ).on( "click", { value: i }, function( event ) {
	    var msgs = [
	      "button = " + $( this ).index(),
	      "event.data.value = " + event.data.value,
	      "i = " + i
	    ];
	    logDiv.append( msgs.join( ", " ) + "<br>" );
	  });
	}


	// Default Prevented event 

	$( "a" ).click(function( event ) {
	  alert( event.isDefaultPrevented() );
	  event.preventDefault();
	  alert( event.isDefaultPrevented() ); 
	});


// Is immediate Propagation Stopped

	function immediatePropStopped( event ) {
	  var msg = "";
	  if ( event.isImmediatePropagationStopped() ) {
	    msg = "hello";
	  } else {
	    msg = "hi";
	  }
	  $( "#stop-log" ).append( "<div>" + msg + "</div>" );
	}
	 
	$( "#i-button" ).click(function( event ) {
	  immediatePropStopped( event );
	  event.stopImmediatePropagation();
	  immediatePropStopped( event );
	});



// Event Meta Key

$( "#checkMetaKey" ).click(function( event ) {

  $( "#display" ).text( event.metaKey );

});


// event namespace

$( "p" ).on( "test.something", function( event ) {
  alert( event.namespace );
});
$( "button" ).click(function( event ) {
  $( "p" ).trigger( "test.something" );
});


// Stop Immediate Propagation

$( "p" ).click(function( event ) {
  event.stopImmediatePropagation();
});
$( "p" ).click(function( event ) {
  // This function won't be executed
  $( this ).css( "background-color", "#f00" );
});
$( "div" ).click(function( event ) {
  // This function will be executed
  $( this ).css( "background-color", "#f00" );
});

