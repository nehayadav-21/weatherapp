const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date().toDateString();
    date.innerText = `${todayDate}`;

    
    // if(weatherType.textContent == 'Clear') {
    //     document..style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbiklXv4YZZC4JFB_FodWQw5v2yes2PIG5w&usqp=CAU')";
        
    // } else if(weatherType.textContent == 'Clouds') {

    //     document.body.style.backgroundImage = "url('https://c0.wallpaperflare.com/preview/572/961/266/sky-dark-light-clouds.jpg')";
        
    // } else if(weatherType.textContent == 'Haze') {

    //     document.body.style.backgroundImage = "url('images/cloud.jpg')";
        
    // }     else if(weatherType.textContent == 'Rain') {
        
    //     document.body.style.backgroundImage = "url('images/rain.jpg')";
        
    // } else if(weatherType.textContent == 'Snow') {
        
    //     document.body.style.backgroundImage = "url('images/snow.jpg')";
    
    // } else if(weatherType.textContent == 'Thunderstorm') {
    
    //     document.body.style.backgroundImage = "url('https://www.ge.com/news/sites/default/files/Reports/2020-03/Silverlining.jpg')";
        
    // } 
}

