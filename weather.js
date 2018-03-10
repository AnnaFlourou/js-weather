function weather() {
    const req = new XMLHttpRequest();

    req.onreadystatechange = function (event) {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                quoteReceived(this.responseText);
            } else {
                console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
            }
        }
    };


    /* API key -> https://api.openweathermap.org/data/2.5/find?q=London&APPID=b044bd52a24b5fd37aef3f1f89c4776d&units=metric*/

    req.open('GET', 'http://api.openweathermap.org/data/2.5/find?utf8=✓&q=' + searchCity() + '&appid=b044bd52a24b5fd37aef3f1f89c4776d&units=metric', true);
    req.send(null);
}

function quoteReceived(quote) {
    quote = JSON.parse(quote);
    console.log(quote);
    document.getElementById("city").innerText = quote.list[0].name;
    document.getElementById("temp").innerText = quote.list[0].main.temp;
}
function searchCity() {
    return document.getElementById('searchCity').value;
}
