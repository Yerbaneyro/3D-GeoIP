import { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Globe from 'react-globe.gl';





function App() {

  const [ipData, setIpData] = useState<boolean>(false)

  interface apiData {
    ip: string;
    country_name: string;
    city: string;
    zip_code:string;
    latitude: number;
    longitude: number;    
  }

  const [apiData, setapiData] = useState<apiData>({} as any)

  useEffect(() => {
    fetch("https://api.freegeoip.app/json/?apikey=0ef75800-9419-11ec-b1aa-f93e522458e7", {
      "method": "GET",
    })
    .then(response => {
      return response.json()})
    .then(data => {
      setIpData(true)
      setapiData(data)
    })
    .catch(err => {
      console.error(err);
    });
  }, [ipData]);


  const gData:object[] = [{
    lat: apiData.latitude,
    lng: apiData.longitude,
    maxR: 5,
    propagationSpeed: 2,
    repeatPeriod: 1000
  }];

  

  if(ipData !== false) {

    console.log(ipData)
    console.log(apiData)
    
    return (
      <div className="App">
        <div className='globe-container'>
          <div>
            <h3> {apiData.ip} </h3>
            <h3> {apiData.country_name} </h3>
            <h3> {apiData.city} {apiData.zip_code} </h3>
            <h3>Lat: {apiData.latitude}</h3>
            <h3>Long: {apiData.longitude}</h3>
          </div>
          <Globe 
          
          width={500}
          height={500}

          backgroundColor={"white"}
          globeImageUrl={'//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'}
          showGraticules={true}
          
          ringsData={gData}
          ringColor={() => 'rgba(255, 0, 0, 0.75)'}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
          
          
          />
          <div>
            <h3> {apiData.ip} </h3>
            <h3> {apiData.country_name} </h3>
            <h3> {apiData.city} {apiData.zip_code} </h3>
            <h3>Lat: {apiData.latitude}</h3>
            <h3>Long: {apiData.longitude}</h3>
          </div>
        </div>
        <div className='title'>
          <h1>GeoIp</h1>
          <h2>Check IP Localisation</h2>
          
        </div>
      </div>
    );
  } else {

      return (
        <div className="App">
          <div className='globe-container'>
          <Globe 
          
          backgroundColor={"green"}
          globeImageUrl={'//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'}
          showGraticules={true}
          
          ringsData={gData}
          ringColor={() => 'rgba(255, 0, 0, 0.75)'}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
          
          
          />
          </div>
          <div className='title'>
            <h1>GeoIp</h1>
            <h2>Check IP Localisation</h2>
            <h3>Loading</h3>
          </div>
        </div>
      );
    }}

export default App;
