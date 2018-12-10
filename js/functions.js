function initMap() {

	var latlng = {
		lat: 42.391158,
		lng: -8.7012068
	};

	var map = new google.maps.Map(document.getElementById('address'), {
		center: latlng,
		zoom: 18
	});

	var addressData = '<div style="padding: 0.2em 1em; background-color: #00ADB5;"><img src="http://www5.rdconsultores.pe/img/logo.svg" alt="Clínica Dental Doctor Andrés Antelo Añón">';

	var data = new google.maps.InfoWindow({
		content: addressData,
		maxWidth: 250
	});

	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: 'EDE'
	});

	// marker.addListener('click', function(){
		data.open(map, marker);
	// });

}

$( document ).ready(function() {

  $(".scroll").on("click", function() {
    var el = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(el).offset().top
    }, 600);
  });



	$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 600) {
      $('#main-header').addClass('fixed');
    } else {
      $('#main-header').removeClass('fixed');
    }
	});


	// Modal Menu
	$("#btn-responsive").click(function(){
		$("#menu-responsive").fadeIn();
	});

	$(".close").click(function(){
		$("#menu-responsive").fadeOut();
	});

	$(".scroll").click(function(){
		$("#menu-responsive").fadeOut();
	});

});

