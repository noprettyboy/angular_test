var EL = window.EL || {};
;(function(){

	var self = EL.AngularTest = function(){
		$('a').on('mouseover', function(){
			$(this).tooltip('show');
			// $('#mowo').tooltip('show');
		});
		
		// alert(1);
	};
	// EL.AngularTest();
}());