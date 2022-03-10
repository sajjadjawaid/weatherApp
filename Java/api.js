const cityform =document.querySelector('.city-form');
const icon= document.querySelector('.icon');
const card=document.querySelector('.card');

const updateCity =async(city) => {
    const cityDetails = await getCityInfo(city);
    const weather= await getWeather(cityDetails.Key)
    return {
        cityDetails,weather
    }
    
}

cityform.addEventListener('submit', e =>{
    e.preventDefault();
    const city= cityform.city.value.trim();
    cityform.reset();

    card.classList.remove('d-none');
     updateCity(city).then(data => updateUI(data))
     .catch(err=> console.log(err))
})

const time =document.querySelector('.time')
const details = document.querySelector('.details')

const updateUI =(data)=> {
    const {cityDetails,weather} =data;
    details.innerHTML=`
    <h5 class ="my-5">${cityDetails.EnglishName} </h5>
    <div class="my-3 "> ${weather.WeatherText}</div>
    
    <div class="display-4 my-4"><h2>${weather.Temperature.Metric.Value} <span>&deg;C</span> </h2></div>
    
    `
    console.log(weather.WeatherText);



    let timesource =null;
    if(weather.IsDayTime){
        timesource= './img/day2.jpg'
    }else{
        timesource='./img/night.svg'
    }

    time.setAttribute('src',timesource);

    let iconSource= `./img/icons/${weather.WeatherIcon}.svg`

    icon.setAttribute('src',iconSource);


}