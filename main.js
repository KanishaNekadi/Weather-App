let form = document.querySelector("form");
let input = document.querySelector("input");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let img = document.querySelector("img");
let weatherData = document.querySelector(".weather_data");

form.addEventListener("submit", searchData)

async function searchData(e){
    e.preventDefault()

    let res = await fetch(`http://api.weatherstack.com/current?access_key=eac5c3fe230ad6fa084b651cba508f34&query=${input.value}`)
    let data = await res.json()
    
    if (data.success === false){
        window.alert("Enter correct city")
    }else{
        let temperature = data.current.temperature;
        let cityName = data.location.name;
        let weatherDescription = data.current.weather_descriptions;
        let icon = data.current.weather_icons;

        h1.innerText = `${temperature}°C`;
        h2.innerText = cityName;
        p.innerText = weatherDescription;
        img.setAttribute("src", icon)   
        
        let maincontainer = document.querySelector(".maincontainer")
      

        if(temperature > 30){
            maincontainer.style.backgroundImage = "url('https://images.pexels.com/photos/2749600/pexels-photo-2749600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }else if(temperature >25){
            maincontainer.style.backgroundImage ="url('https://www.wfla.com/wp-content/uploads/sites/71/2022/04/RAIN-WX.jpg?w=2560&h=1440&crop=1')"
            
        }else{
            maincontainer.style.backgroundImage = "url('https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

        }



    
     

    }
    console.log(data)
    form.reset();
}