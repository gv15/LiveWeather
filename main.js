window.addEventListener('load', getGeoLocation);
function getGeoLocation(){
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
}
function locationSuccess(pos){
    getWeather(pos.coords.latitude, pos.coords.longitude);
}
function locationFail(err){

}
function getWeather(lat, long){
    console.log(lat, long)
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric&mode=html`
    let promise = fetch(url);
    promise.then((res)=>{
        console.log(res);
        return res.text();
    }).then((data)=>{
        document.write(data);
    }).catch((err)=>{
        console.log(err);
    })
}
function printDataOnHTML(weatherData){

}