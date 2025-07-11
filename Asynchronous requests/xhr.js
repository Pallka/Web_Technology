function fetchDataXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            updateContainer('xhr-container', data);
        }
    };

    xhr.send();
}
