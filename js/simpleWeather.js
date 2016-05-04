// JavaScript File
// v3.1.0
//Docs at http://simpleweatherjs.com

$(document).ready(function() {
  $.simpleWeather({
    location: 'New York, NY',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});


/*
$.simpleWeather({
	zipcode: '10001',
	unit: 'f',
	success: function(weather) {
		html = '<h2>'+weather.city+', '+weather.region+'</h2>';
		html += '<img style="float:left;" width="125px" src="../img/mn_one-world-trade-center.jpg"/'+weather.code+'.png">';
		html += '<p>'+weather.temp+'&deg; '+weather.units.temp+'<br /><span>'+weather.currently+'</span></p>';
		html += '<a href="'+weather.link+'">View Forecast &raquo;</a>';

		$("#weather").html(html);
	},
	error: function(error) {
		$("#weather").html("<p>"+error+"</p>");
	}
});*/

/*
// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'New York, NY',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});*/