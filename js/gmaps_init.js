function initMap() {
  var position, div, isDraggable, latitude, longitude, map, mapOptions, marker, position, ref;
  var styles = [];

  if (($(".js-gmap").length)) {
    isDraggable = (ref = $(document).width() > 480) != null ? ref : {
      "true": false
    };

    div = $(".js-gmap");

    latitude = div.data("latitude");
    longitude = div.data("longitude");

    position = new google.maps.LatLng(latitude, longitude);

    mapOptions = {
      draggable: isDraggable,
      center: position,
      zoom: 15,
      scrollwheel: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      },
      styles: styles
    };

    map = new google.maps.Map($(".js-gmap-canvas")[0], mapOptions);

    return marker = new google.maps.Marker({
      position: position,
      map: map,
      visible: true
    });
  }
};
