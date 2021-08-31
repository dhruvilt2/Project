let v1={
    apikey:"f18dc1a2cf6df4b1cdcf969f281f5176"
}

function Getvalue()
{
    
    const city=document.getElementById("bar");
    console.log(city.value);
    getLoc(city.value);
}

var mymap = L.map('mapid').setView([0, 0], 1); 
const marker = L.marker([0,0]).addTo(mymap);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tiles= L.tileLayer(tileUrl,{attribution});
tiles.addTo(mymap);

async function getLoc(val){
    const url='https://api.openweathermap.org/data/2.5/weather?q='+val+'&appid='+v1.apikey;
    const response= await fetch(url);
    const data= await response.json();
    const{lon,lat}=data.coord;
    //L.marker([lat,lon]).addTo(mymap);
    marker.setLatLng([lat,lon]);
    console.log(lon,lat);
}


document
    .querySelector(".btn")
    .addEventListener("click",function()
    {
        Getvalue();
    });

document
    .querySelector('.search-bar')
    .addEventListener('keypress', function (e) 
    {
    if (e.key === 'Enter') {
        Getvalue();
    }
});