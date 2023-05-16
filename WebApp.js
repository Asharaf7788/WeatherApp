const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a21f29e611msh5303748e0c3a9d4p1dfad3jsn986409e44ad4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

 try{ 

function getweather(city){

	document.getElementById("header").innerHTML=city;
     const response = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
        document.getElementById("feels_like").innerHTML = response.feels_like;
        document.getElementById("humidity").innerHTML = response.humidity;
		document.getElementById("humidity2").innerHTML = response.humidity;
         document.getElementById("max_temp").innerHTML = response.max_temp;
         document.getElementById("min_temp").innerHTML = response.min_temp;
         document.getElementById("sunset").innerHTML = response.sunset;
        document.getElementById("temp").innerHTML = response.temp;
		document.getElementById("temp2").innerHTML = response.temp;
        document.getElementById("wind_degrees").innerHTML = response.wind_degrees;
        document.getElementById("wind_speed").innerHTML = response.wind_speed;
		document.getElementById("wind_speed2").innerHTML = response.wind_speed;
	});

}
}
catch (error) {
   console.error(error);
}



document.getElementById("submit").addEventListener("click",(e)=>{
e.preventDefault();
getweather(document.getElementById("input").value)

});
 
try{
function getfixedWeather(city1,element_id){

     const response = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city1, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		document.getElementById(element_id+"1").innerHTML = response.cloud_pct;
        document.getElementById(element_id+"2").innerHTML = response.feels_like;
        document.getElementById(element_id+"3").innerHTML = response.humidity;
         document.getElementById(element_id+"4").innerHTML = response.max_temp;
         document.getElementById(element_id+"5").innerHTML = response.min_temp;
		 document.getElementById(element_id+"6").innerHTML = response.sunrise;
         document.getElementById(element_id+"7").innerHTML = response.sunset;
        document.getElementById(element_id+"8").innerHTML = response.temp;
        document.getElementById(element_id+"9").innerHTML = response.wind_degrees;
        document.getElementById(element_id+"10").innerHTML = response.wind_speed;
	});

}
}
catch (error) {
   console.error(error);
}

var city1="Delhi";
var ele1="del";
getfixedWeather(city1,ele1);
var city2="Riyadh";
var ele2="ryd";
getfixedWeather(city2,ele2);
var city3="London";
var ele3="lnd";
getfixedWeather(city3,ele3);
var city4="Beijing";
var ele4="bej";
getfixedWeather(city4,ele4);
var city5="Washington";
var ele5="wdc";
getfixedWeather(city5,ele5);





