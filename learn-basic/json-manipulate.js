let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        let data = JSON.parse(xhttp.responseText);
        return data;
    }
};
xhttp.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?latlng=1.269834,101.181206&sensor=true&key=AIzaSyAlwYrcZtcx_IDEsZo_JSzBNZ7I7sXAedk", true);
xhttp.send();
console.info(data);