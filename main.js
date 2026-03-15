const keyAPI= "eaa9ddeaa24a48afa2415515261303";

async function get(city){
    const responce = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${keyAPI}&q=${city}&days=3`);
    const data =await responce.json()
    console.log(data)

cardan(data)

}


 let index = 0

 function cardan(data){

     let bigCard=document.querySelector(".ap");
     bigCard.innerHTML="";

    for(var i=0 ; i<3 ; i++){
        
    let day = data.forecast.forecastday[i];
    let date=day.date;
     let dayName = new Date(date).toLocaleDateString("ar-EG", { weekday: "long" });
    let maxTemp= day.day.maxtemp_c;
    let minTemp= day.day.mintemp_c;
    let dayCondition= day.day.condition.text;
    let dayIcon=day.day.condition.icon;
    let rainChance = day.day.daily_chance_of_rain;
    let humidity = day.day.avghumidity;


    
    let div1=document.createElement("div");
    div1.innerHTML=`
                    <div class="card">
                    <h3 id="day">${dayName}</h3>
                        <p>${data.location.name} </p>
                        <p class="temp">${maxTemp}°C / ${minTemp}°C</p>
                        <img id="img1" src="https:${dayIcon}">
                        <p>${dayCondition}</p>
                        <span><i class="fa-solid fa-umbrella"></i>${rainChance} <span id="span"><i class="fa-solid fa-cloud-rain"></i>${humidity}</span></span>
                        
                    </div>
    
    `;
        bigCard.append(div1);
    }
     };

        let button=document.querySelector(".button");
        
         button.addEventListener(`click`, function(){
        
        let input=document.querySelector(".inp").value;
        
         if(input){
            get(input);
            
         }
         else{
             get("Cairo")
         }
     });


get("Cairo")


