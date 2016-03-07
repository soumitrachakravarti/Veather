if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $(document).ready(function() {
      //Weather Fetch
      $.ajax({
        dataType: "jsonp",
        url: 'https://api.forecast.io/forecast/b1b995d7e5210b2ae93b82f7cbe91416/' + position.coords.latitude + ',' + position.coords.longitude,
        success: function(res) {
          // $('.main-temp').html(res.currently.temperature);

          if (res.currently.icon === 'clear-day') {
            $('.icon').addClass('wi wi-day-sunny');
          } else if (res.currently.icon === 'clear-night') {
            $('.icon').addClass('wi wi-night-clear');
          } else if (res.currently.icon === 'rain') {
            $('.icon').addClass('wi wi-rain');
          } else if (res.currently.icon === 'snow') {
            $('.icon').addClass('wi wi-snow');
          } else if (res.currently.icon === 'sleet') {
            $('.icon').addClass('wi wi-sleet');
          } else if (res.currently.icon === 'wind') {
            $('.icon').addClass('wi wi-strong-wind');
          } else if (res.currently.icon === 'fog') {
            $('.icon').addClass('wi wi-fog');
          } else if (res.currently.icon === 'cloudy') {
            $('.icon').addClass('wi wi-cloudy');
          } else if (res.currently.icon === 'partly-cloudy-day') {
            $('.icon').addClass('wi wi-day-cloudy');
          } else if (res.currently.icon === 'partly-cloudy-night') {
            $('.icon').addClass('wi wi-night-cloudy');
          } else if (res.currently.icon === 'hail') {
            $('.icon').addClass('wi wi-hail');
          } else if (res.currently.icon === 'thunderstorm') {
            $('.icon').addClass('wi wi-thunderstorm');
          } else if (res.currently.icon === 'tornado') {
            $('.icon').addClass('wi wi-tornado');
          }
          $('#weather-summary').html(res.currently.summary);
          $('#tempF').html(res.currently.temperature);
          $('#tempC').html(Math.round((parseFloat(res.currently.temperature) - 32) * (5 / 9) * 100) / 100);

          $('.unit-toggle').click(function() {
            $('.temp-unit ').toggle();
          });
          $('.unit-toggle').click(function() {
            $('.temp-value ').toggle();
          });

        }
      });
      //Address Fetch
      $.ajax({
        datatype: "jsonp",
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=true",
        success: function(res) {
          $('#address').html(res.results[0].formatted_address);
        } 
      });
    });
  });
} else {
  alert("Geolocation is not supported by this browser. We recommend using Google Chrome");
}