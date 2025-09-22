console.log('Hello');


const cityInput = document.getElementById("userInput");
const weather = document.getElementById("getWeather");
const weatherBtn = document.getElementById("weatherResult");

const apiKey = "d8e43ce19476850bc5c8af72b0743347";

weatherBtn.addEventListener("click", async()=> {

    const city = cityInput.value.trim();

    if (city === "") {
        weather.innerHTML = "Please enter a city name";
        return;
    } 
    try {
        // weather.innerHTML = "Please Wait....!!!";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);

        if (data.cod === "404") {
             weather.innerHTML = "Enter Valid City Name";
        } else {
            const temperature = data.main.temp;
            const weatherType  = data.weather[0].main;
            const name = data.name;

            weather.innerHTML = `City 🌆 : <b>${name}</b> <br> Temperature 🌡️ : <b>${temperature} </b> <br> Weather 🌤️ :<b> ${weatherType}</b>`
        }
         
    } catch (error) {
        weather.innerHTML = "Something Went Wrong..";
        console.log('Error:' , error);
        
    }

})