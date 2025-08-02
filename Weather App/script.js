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
    if (id < 232) return '4.svg'
    if (id < 321) return '3.svg'
    if (id < 531) return '5.svg'
    if (id < 622) return '.svg'
    if (id < 781) return '.svg'
    if (id < 800) return '.svg'
    else return '2.svg'
}

function getCurrentDate(){
    const currentDate = new Date()
    console.log(currentDate)
}

async function updateWeaterInfo(city) {
    const weatherData = await getFetchData('weather', city)

    if (weatherData.cod != 200) {
        showDisplaySection(notFoundCitySection)
        return
    }
    console.log(weatherData)

    const {
        name: country,
        main: {temp, humidity},
        weather: [{id, main}],
        wind: {speed},

    } = weatherData

    cityTxt.textContent = country
    tempTxt.textContent = Math.round(temp) + '°C'
    humidityTxt.textContent = humidity + '%'
    windTxt.textContent = speed + ' M/s'
    currentDateTxt.textContent = getCurrentDate()
    weatherImg.src = `./images/${getWeatherIcon(id)}`

    showDisplaySection(weatherInfoSection)
}

function showDisplaySection(section) {
    [notFoundCitySection, searchCitySection, weatherInfoSection]
        .forEach(section => section.style.display = 'none')

    section.style.display = 'flex'
}