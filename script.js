const button = document.getElementById('search-button');
const input = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const location_button = document.getElementById('get-location-button');


// got location
function gotLocation(position){
    console.log(position)
}

function failedToget(){
    console.log('there was some issue');
}
// location get
location_button.addEventListener('click', async () =>{
    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToget)
});

async function getData(cityName){
    const promise = await 
    fetch(`http://api.weatherapi.com/v1/current.json?key=cdf656eda3994a29b7391348242304&q=${cityName}&aqi=yes`);
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