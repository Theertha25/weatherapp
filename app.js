function check(){
  let city=document.getElementById('place').value
  let name= document.getElementById('name')
  let degrees= document.getElementById('degrees')
  let windSpeed= document.getElementById('wind')
  let humidity= document.getElementById('humidity')
  let apikey='d4326ebc816f3d51df60fcbbfa2b40c9'
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
  fetch(url)
  .then(function(response) {
    return response.json();
    })
    .then(function(data) {
      console.log(data);
      name.innerHTML=data.name
      degrees.innerHTML=Math.floor(data.main.feels_like-273)+'°C'
      windSpeed.innerHTML=data.wind.speed+'km/h'
      humidity.innerHTML=data.main.humidity+'%'
    });
}