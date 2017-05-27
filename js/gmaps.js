function initMap() {
  var location = {lat: 45.556305, lng: 18.689596};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });

  var marker = new google.maps.Marker({
		position: location,
		icon: 'img/icons/ic_location_on_white_48dp_2x.png',
		map: map
  });
}