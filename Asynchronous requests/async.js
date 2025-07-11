async function fetchDataAsyncAwait() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        updateContainer('async-container', data);
    } catch (error) {
        console.error('Async/Await error:', error);
    }
}

