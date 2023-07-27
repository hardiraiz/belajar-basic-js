const http = new XMLHttpRequest();

const url = "https://decafsm.this.id";
const startTime = new Date().getTime();

http.open("GET", url, /*async*/ true);

http.onreadystatechange = function() {
    if (http.readyState === XMLHttpRequest.DONE) {
    const endTime = new Date().getTime();
    const responseTime = endTime - startTime;
    const dataSize = http.responseText.length;
    const dataRate = (dataSize / 1024 / 1024) / (responseTime / 1000);

    console.log(`Data rate: ${dataRate.toFixed(2)} MB/s`);
    }
};

http.send();