function fetchDataFetch() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => updateContainer('fetch-container', data))
        .catch(error => console.error('Fetch error:', error));
}
