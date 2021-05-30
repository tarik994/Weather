const apiUrl = 'http://api.weatherapi.com/v1/current.json';
const apiKey = '90427770a1954e448df182439212805';
//LET LOKACIJE = []


function getWeather(city){
    var xhr = new XMLHttpRequest();


    let url = apiUrl + '?' + 'key=' + apiKey + '&q=' + city + '&aqi=yes';

    xhr.open('GET', url);

    xhr.onreadystatechange = function(){
        if(this.readyState ===4 ){
            let response = JSON.parse(this.response); 
            console.log(response);
            document.getElementById('city').innerHTML = response.location.name;
            document.getElementById('img').src = response.current.condition.icon;
            document.getElementById('temperature').innerHTML = response.current.temp_c + '°C';
            document.getElementById('condition').innerHTML = response.current.condition.text;
            document.getElementById('wind').innerHTML = response.current.wind_kph + ' km/h';

        }


    }

    xhr.send();
}


document.getElementById('search').addEventListener('click',function(){
    let city = document.getElementById('city-input').value;


    getWeather(city)
});

