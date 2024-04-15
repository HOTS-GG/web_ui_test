const jsonFile = "testFile.json";

function readJSON(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open('GET', file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readJSON(jsonFile, function (text) {
    const data = JSON.parse(text);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
});