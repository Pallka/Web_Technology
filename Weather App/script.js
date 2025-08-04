const cityUserInput = document.querySelector("#cityUserInput")
const searchBtn = document.querySelector("#searchBtn")

const notFoundCitySection = document.querySelector(".not-found")
const weatherInfoSection = document.querySelector(".weather-info")
const searchCitySection = document.querySelector(".search-city")

const cityTxt = document.querySelector('.city-txt')
const tempTxt = document.querySelector('.temp-txt')
const conditionTxt = document.querySelector('.condition-txt')
const humidityTxt = document.querySelector('.humidity-txt')
const windTxt = document.querySelector('.wind-txt')
const weatherImg = document.querySelector('.weather-img')
const currentDateTxt = document.querySelector('.current-date-txt')
const forecastItemsContainer = document.querySelector('.div-forecast-items')


document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});

searchBtn.addEventListener('click', () => {
    if(cityUserInput.value.trim() != ''){
        console.log(cityUserInput.value)
        updateWeaterInfo(cityUserInput.value)
        cityUserInput.value = ''
        cityUserInput.blur()
    }
})

cityUserInput.addEventListener('keydown', (event) => {
    if(event.key == 'Enter' && cityUserInput.value.trim() != '') {
        updateWeaterInfo(cityUserInput.value)
        cityUserInput.value = ''
        cityUserInput.blur()
    }
})

async function getFetchData(endPoint, city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`

    const response = await fetch(apiUrl)
    return response.json() 
}

function getWeatherIcon(id){
    if (id < 232) return 'TtStorm.svg'
    if (id < 321) return 'RainCloudy.svg'
    if (id == 511) return 'Sleet.svg'
    if (id < 531) return 'Rain.svg'
    if (id < 622) return 'Snow.svg'
    if (id < 781) return 'wind.svg'
    if (id < 800) return 'sunny.svg'
    if (id < 801) return 'pcloudy.svg'
    if (id < 802) return 'mcloudy.svg'
    else return 'clouds.svg'
}

function getCurrentDate(){
    const currentDate = new Date()
    // const hours = currentDate.getHours();
    // console.log(hours)
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }

    return currentDate.toLocaleDateString('en-US', options)
}

async function updateWeaterInfo(city) {
    const weatherData = await getFetchData('weather', city)

    if (weatherData.cod != 200) {
        showDisplaySection(notFoundCitySection)
        return
    }
    // console.log(weatherData)

    const {
        name: country,
        main: {temp, humidity},
        weather: [{id, main}],
        wind: {speed},

    } = weatherData

    cityTxt.textContent = country
    tempTxt.textContent = Math.round(temp) + '°C'
    conditionTxt.textContent = main
    humidityTxt.textContent = humidity + '%'
    windTxt.textContent = speed + ' M/s'
    currentDateTxt.textContent = getCurrentDate()
    weatherImg.src = `./images/weather_icons/${getWeatherIcon(id)}`

    showDisplaySection(weatherInfoSection)
    updateForecastInfo(city)
}

async function updateForecastInfo(city) {
    const forecastData = await getFetchData('forecast', city)
    const timeTaken = '12:00:00'
    const todayDate = new Date().toISOString().split('T')[0]

    forecastItemsContainer.innerHTML = ''
    forecastData.list.forEach(forecastWeather => {
        if (forecastWeather.dt_txt.includes(timeTaken) && !forecastWeather.dt_txt.includes(todayDate) ) {
            updateForecastItems(forecastWeather)
        }
    })
    
}

function updateForecastItems(weatherData){
    const {
        dt_txt: date,
        weather: [{id}],
        main: {temp}
    } = weatherData

    const dateTaken = new Date(date)
    const dateOption = {
        day: '2-digit',
        month: 'short'
    }

    const dateResult = dateTaken.toLocaleDateString('en-US', dateOption)

    const forecastItem = `
        <div class="forecast-item">
            <h4 class="forecast-date-txt">${dateResult}</h4>
            <img src="./images/weather_icons/${getWeatherIcon(id)}" alt="" class="forecast-img">
            <h4 class="forecast-temp">${Math.round(temp)}°C</h4>
        </div>
    `
    forecastItemsContainer.insertAdjacentHTML('beforeend', forecastItem)
}

function showDisplaySection(section) {
    [notFoundCitySection, searchCitySection, weatherInfoSection]
        .forEach(section => section.style.display = 'none')
    section.style.display = 'flex'
}
