const api_key = "a14f1514428343f7a9d34848222202";
const api_url =
  "http://api.weatherapi.com/v1/current.json?key=a14f1514428343f7a9d34848222202";

  const searchbox=document.querySelector(".search input");
  const searchbtn=document.querySelector(".search button");
  const icon = document.querySelector(".weather-icon");

  

async function checkweather(city) {
  const response = await fetch(api_url + `&q=${city}`);

  if(response.status==400){
    document.querySelector(".error").style.display="block"
    document.querySelector(".weather").style.display="none"
  }
  else{
    document.querySelector(".error").style.display="none"
    document.querySelector(".weather").style.display="block"
  }
  var data = await response.json();
  console.log(data.current);


  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML = data.current.temp_c+" °C.";
  document.querySelector(".humidity").innerHTML = data.current.humidity+" %";
  document.querySelector(".wind").innerHTML = data.current.wind_kph+" kmph";


  
 if(data.current.condition.text=="drizzle"){
    icon.src="images/drizzle.png";
  }
  else if(data.current.condition.text=="Mist"){
    icon.src="images/mist.png";
  }
  
  else if(data.current.condition.text=="Sunny"){
    icon.src="images/clear.png";
  }
  else if(data.current.condition.text=="Partly cloudy"){
    icon.src="images/clouds.png";
  }
  else if(data.current.condition.text=="snow"){
    icon.src="images/snow.png";
  }
  else if(data.current.condition.text=="rain"){
    icon.src="images/rain.png";
  }
  else if(data.current.condition.text=="cloudy"){
    icon.src="images/clouds.png";
  }
  else{
    icon.alt="no image available";
  }

  document.querySelector(".weather").style.display="block"


}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value); 
})
