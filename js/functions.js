function initMap() {

	var latlng = {
		lat: 42.391158,
		lng: -8.7012068
	};

	var map = new google.maps.Map(document.getElementById('address'), {
		center: latlng,
		zoom: 18
	});

	var addressData = '<div class="footer-map"><b>AQUITA</b> <img src="https://edempresarial.com/wp-content/themes/edepro/images/logo.svg" alt=""></div>';

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
    if ($(window).scrollTop() > 800) {
      $('#main-header').addClass('fixed');
    } else {
      $('#main-header').removeClass('fixed');
    }
	});


});

