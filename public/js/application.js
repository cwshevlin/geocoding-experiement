$(document).ready(function() {
  var baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
  var apiKeyQuery = "&key=AIzaSyBiuGXmRpfN1Q3NT2S3_pYHCVT7kUzwaWA";
  
  $("#address").on("submit", function(event){
  	event.preventDefault();
  
  	var address = $("#address").serialize();

  	$.get(baseUrl + address + apiKeyQuery, function(serverResponse){
  	  console.log(serverResponse);
  	});
  });

  $("#coords").on("submit", function(event){
  	event.preventDefault();

  	var coords = $("#coords").serialize();

  	$.get(baseUrl + coords + apiKeyQuery, function(serverResponse){
  	  console.log(serverResponse);
  	});
  });
});
