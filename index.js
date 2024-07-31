const input=document.querySelector(".input-container");
const city=document.querySelector("[cityName]");

const API_KEY="d1845658f92b31c64bd94f06f7188c9c";


const searchForm=document.querySelector("[data-search-form ]");
const searchInput=document.querySelector("[data-search-input]");

searchForm.addEventListener( "submit" , (e)=> {
    e.preventDefault();
    console.log("j");
      if(searchInput.value=="")
          return;
    else
      fetchWeather(searchInput.value);
});




function renderWeather(data)
{
    //fetching
    const city=document.querySelector("[cityName]");
    const flag=document.querySelector("[flagIcon]");
    const desc=document.querySelector("[description]");
    const weatherIcon=document.querySelector("[description-image]");
    const temp=document.querySelector("[temperature]");
    const wind=document.querySelector("[windspeed]");
    const humidity=document.querySelector("[humidity]");
    const clouds=document.querySelector("[clouds]");

    //updating values in variables
    city.innerText=data?.name;
    flag.src=  `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    desc.innerText=  data?.weather?.[0]?.description;
    weatherIcon.src= `https://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    temp.innerText=`${data?.main?.temp} °C`;
    wind.innerText=`${data?.wind?.speed} m/s`;
    humidity.innerText=`${data?.main?.humidity} %`;
    clouds.innerText=`${data?.clouds?.all} %`;




}





async function fetchWeather(city){
        
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)  ;
        const data=await response.json();
        renderWeather(data);
    }
    catch(err)
    {
          console.log("try again",err);
    }
}






































