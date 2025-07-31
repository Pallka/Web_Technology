const cityUserInput = document.querySelector("#cityUserInput")
const searchBtn = document.querySelector("#searchBtn")

const notFoundCity = document.querySelector(".not-found")



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

async function updateWeaterInfo(city) {
    const weatherData = await getFetchData('weather', city)

    if (weatherData.cod != 200) {
        showDisplaySection(notFoundCity)
        return
    }
    console.log(weatherData)
}

function showDisplaySection(section) {

}