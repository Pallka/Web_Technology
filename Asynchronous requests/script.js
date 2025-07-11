const API_URL = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded', () => {
    fetchDataXHR();
    fetchDataFetch();
    fetchDataAsyncAwait();

    setInterval(fetchDataXHR, 5000);
    setInterval(fetchDataFetch, 5000);
    setInterval(fetchDataAsyncAwait, 5000);
});

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function updateContainer(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    shuffleArray(data); 
    const slicedData = data.slice(0, 10); 

    slicedData.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.textContent = item.body;
        container.appendChild(div);
    });
}
