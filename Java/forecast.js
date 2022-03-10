
const apikey="8dRIIA0juR0Y2TAJXmVShIUZDP0xMnEW"
const getCityInfo= async (city)=>{
    const baseurl = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apikey}&q=${city}`;
    const cityInfo = await fetch(baseurl+query);
    const data = await cityInfo.json();
    //console.log(data)
    return data[0];

}

getCityInfo('Lahore')

const getWeather = async (id)=> {
    const baseurl = 'https://dataservice.accuweather.com/currentconditions/v1/'
    const query =`${id}?apikey=${apikey}`
    const res = await fetch(baseurl+query)
    const data= await res.json();
    //console.log(data);
    return data[0];
}
getWeather('260622') 
