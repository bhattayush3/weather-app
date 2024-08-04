const apikey="f97d3e2d6c85014d97a5ecaa31b916d4";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const text=document.querySelector('#inputbox');
const button=document.querySelector('#btn')
const weatherimg=document.querySelector("#weathericon")

async function checkweather(city) {
    const response=await fetch(apiurl+ city + `&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    
    document.querySelector('#City').textContent=data.name
    document.querySelector('#temp').textContent=Math.round(data.main.temp)
    document.querySelector('#humidity').textContent=data.main.humidity + "%"
    document.querySelector('#speed').textContent=data.wind.speed + " Km/h"

    if(data.weather[0].main =="Clouds"){
        weatherimg.src="clouds.png"
    }
    else if(data.weather[0].main =="Clear"){
        weatherimg.src="clear.png"
    }
    else if(data.weather[0].main =="Rain"){
        weatherimg.src="rain.png"
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherimg.src="drizzle.png"
    }
    else if(data.weather[0].main =="Mist"){
        weatherimg.src="mist.png"
    }
    
    else if(data.weather[0].main =="Snow"){
        weatherimg.src="snow.png"
    }
    
}
button.addEventListener("click",()=>{
    checkweather(text.value);
    
    
})