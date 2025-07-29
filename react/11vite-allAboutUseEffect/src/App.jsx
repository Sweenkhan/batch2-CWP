import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function App() {

  const [cityName, setCityName] = useState("jaipur")
  const [selectedCity, setSelectedCity] = useState("jaipur")
  const [data, setData] = useState({})


  useEffect(() => {
 
    function fetchData() {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=1a4e51c7377e8cf939cbc51bb433a57f")
        .then((res) => res.json())
        .then((result) => {  

          setData(result)
        })
        .catch((err) => {
          console.log(err)
        })
    }
 
      fetchData()

  }, [selectedCity ])



 

  return (
    <>
      <div>
        <h2>Weather data</h2>
        <Link to="/testing">testing</Link>

        <select id='city' onChange={(e) => setSelectedCity(e.target.value)}>
          <option disabled>select your city name</option>
          <option value="jaipur">jaipur</option>
          <option value="delhi">delhi</option>
          <option value="hyderabad">hyderabad</option>
          <option value="nagpur">nagpur</option>
          <option value="chandigarh">chandigarh</option>
        </select>


        <input placeholder='type your city' type="text" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} />

        {data.name !== undefined &&
         
          <div className='result'>
            <h3>City {data.name}</h3>
            <p>Temprature {Math.round(data.main.temp - 273)}° celcius</p>
            <p>Weather {data.weather[0].main}</p>
            <p>Humidity {data.main.humidity}</p>

          </div>
        }
      </div>
    </>
  )
}

export default App
