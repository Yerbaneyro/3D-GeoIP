import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { SpecificIP } from './specificip';



export default function ApiData() {

    const globeEl:any = useRef(); 
    
    const [loading, setLoading] = useState<boolean>(false)

    interface apiData {
        ip: string;
        country_name: string;
        city: string;
        zip_code: string;
        latitude: number;
        longitude: number;    
    }

    interface specificIpData {
        lat: number;
        lng: number;
        maxR: number;
        propagationSpeed:number;
        repeatPeriod: number; 
    }

    const [apiData, setapiData] = useState<apiData>({} as any)

    const [specificIpData, setSpecificIpData] = useState<specificIpData>({} as any)

    useEffect(() => {
        fetch("https://api.freegeoip.app/json/?apikey=0ef75800-9419-11ec-b1aa-f93e522458e7", {
            "method": "GET",
        })
        .then(response => {
            return response.json()})
        .then(data => {
            setLoading(true)
            setapiData(data)
        })
        .catch(err => {
            console.error(err);
        });
        }, [setLoading]);

    const gData:specificIpData[] = [{
        lat: apiData.latitude,
        lng: apiData.longitude,
        maxR: 5,
        propagationSpeed: 2,
        repeatPeriod: 1000
    }, specificIpData ];

    useEffect(() => {
        
        globeEl.current.pointOfView({lat: apiData.latitude, lng: apiData.longitude, altitude: 1.4 }, 100);
    }, [apiData]);

    if(loading == false) {
        return(
            <div className='globe-container'>
                <div>
                    <p>Loading Data</p>
                </div>
                <Globe 
                ref={globeEl}

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
                    <p>Loading Data</p>
                </div>
            </div>
        )
    }

    return(
        console.log(apiData),
        <div className='globe-container'>
            <div className='data-container-left'>
                <div id='data-header'>
                    <p>Your Public IPv4 Data</p>
                </div>
                <div>
                    <p> IP address:</p>
                    <p>{apiData.ip}</p> 
                </div>
                <div>
                    <p> Country: </p>
                    <p>{apiData.country_name} </p>
                </div>
                <div>
                    <p> City/Zip-code: </p>
                    <p>{apiData.city} {apiData.zip_code} </p> 
                </div>
                <div>
                    <p>Lattude: </p>
                    <p>{apiData.latitude} </p>
                </div>
                <div>
                    <p>Longitude: </p>
                    <p>{apiData.longitude} </p>
                </div>
                <div id='text'>
                    <h3>What is IP Geolocation?</h3>
                    <p>IP geolocation is the mapping of an IP address to the geographic location of the internet from the connected device. By geographically mapping the IP address, it provides you with location information such as the country, state, city, zip code, latitude/longitude, ISP, area code, and other information.</p>
                </div>
            </div>
            <Globe 

            ref={globeEl}
            
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
            <SpecificIP setSpecificIpData={setSpecificIpData}/>
        </div>

    )
}