const weather = new Weather('San_Francisco','CA');
const ui = new UI;

// get weather on DOM load
document.addEventListener('DOMContentLoaded',getForecast);
// change Locale
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    // add change to modal
    weather.changeLocale(city,state);
    getForecast();
    // close modal
    $('#locModal').modal(hide);
});


function getForecast(){
    weather.getWeather()
        .then((data) => {
            ui.paint(data)})
        .catch((error) =>console.log(error));
}