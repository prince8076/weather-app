const button = document.getElementById('search-button');
const input = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const location_button = document.getElementById('get-location-button');


// got location
async function gotLocation(position){
    const result = await getDataa(
        position.coords.latitude,
        position.coords.longitude
    );
    cityName.innerText=`${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText= result.current.condition.text;
    cityTemp.innerText = `${result.current.temp_c} °C`;

    console.log(result)
}

function failedToget(){
    console.log('there was some issue');
}
// location get
location_button.addEventListener('click', async () =>{
    navigator.geolocation.getCurrentPosition(gotLocation, failedToget)
  
});

const flag=false

async function getDataa(lat,long){
const promise = await 
fetch(`http://api.weatherapi.com/v1/current.json?key=cdf656eda3994a29b7391348242304&q=${lat},${long}&aqi=yes`);
return await promise.json()
}

async function getData(cityName){
    const promise = await 
    fetch(`http://api.weatherapi.com/v1/current.json?key=cdf656eda3994a29b7391348242304&q=${cityName}&aqi=yes`);
    flag = true
    return await promise.json()
}

button.addEventListener("click",async ()=>{
    const value=input.value
    const result = await getData(value);
    cityName.innerText=`${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText= result.current.condition.text;
    cityTemp.innerText = `${result.current.temp_c} °C`;

 

});


// http://api.weatherapi.com/v1/current.json?key=cdf656eda3994a29b7391348242304&q=London&aqi=yes