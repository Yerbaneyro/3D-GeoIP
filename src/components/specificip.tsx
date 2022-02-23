import { useState } from "react";



type Props = {
    setState: React.Dispatch<React.SetStateAction<any>>;
};

interface specificIpData {
    lat: number;
    lng: number;
    color: string;
    maxR: number;
    propagationSpeed:number;
    repeatPeriod: number; 
}

function SpecificIP<Props>({ setSpecificIpData }:any) {

    interface SpecificApiData {
        ip: string;
        country_name: string;
        city: string;
        zip_code:string;
        latitude: number;
        longitude: number;    
    }

    

    const [inputIP, setinputIP] = useState<string>('')
    const [specificApiData, setSpevificApiData] = useState<SpecificApiData>({} as any)
    const [checking, setChecking] = useState<boolean>(false)
    const [error, setError] = useState<string>('')


    function GetSpecificIP(ip:string) {
        setinputIP('')
        fetch(`https://api.freegeoip.app/json/${ip}?apikey=0ef75800-9419-11ec-b1aa-f93e522458e7`, {
            "method": "GET",
        })
        .then(response => {
            return response.json()})
        .then(data => {
            setError('')
            console.log(data)
            setSpevificApiData(data)
            setSpecificIpData({
                lat: data.latitude,
                lng: data.longitude,
                color: 'blue',
                maxR: 5,
                propagationSpeed: 2,
                repeatPeriod: 1000
            })
            setChecking(true)
        })
        .catch(err => {
            console.error(err);
            setError('Error')
        });
    }

    if(checking != false) {
        return(
            <div className='data-container-right'>
                <div id='data-header'>
                        <p>Check other IPv4 Data</p>
                        
                    </div>
                    <div>
                        <p> IP address:</p>
                        <p id="specific-ip">{specificApiData.ip}</p> 
                    </div>
                    <div>
                        <p> Country: </p>
                        <p>{specificApiData.country_name}</p>
                    </div>
                    <div>
                        <p> City/Zip-code: </p>
                        <p>{specificApiData.city} {specificApiData.zip_code}</p> 
                    </div>
                    <div>
                        <p>Lattude: </p>
                        <p> {specificApiData.latitude} </p>
                    </div>
                    <div>
                        <p>Longitude: </p>
                        <p>{specificApiData.longitude}</p>
                    </div>
                    <div id='text'>
                        <h3>Enter Data:</h3>
                        <form>
                            <label>
                                IP Addres:
                                <input 
                                type="text"
                                placeholder="0.0.0.0"
                                value={inputIP}
                                onChange={(e) => setinputIP(e.target.value)}>
                                </input>
                            </label>
                            
                        </form>
                        <p id="error">{error}</p>
                        <button onClick={() => GetSpecificIP(inputIP)}>Check</button>
                    </div>
                </div>
        )
    }

    return(
        <div className='data-container-right'>
            <div id='data-header'>
                    <p>Check other IPv4 Data</p>
                    <p></p>
                </div>
                <div>
                    <p> IP address:</p>
                    <p></p> 
                </div>
                <div>
                    <p> Country: </p>
                    <p></p>
                </div>
                <div>
                    <p> City/Zip-code: </p>
                    <p></p> 
                </div>
                <div>
                    <p>Lattude: </p>
                    <p> </p>
                </div>
                <div>
                    <p>Longitude: </p>
                    <p></p>
                </div>
                <div id='text'>
                    <h3>Enter Data:</h3>
                    <form>
                        <label>
                            IP Addres:
                            <input 
                            type="text"
                            placeholder="0.0.0.0"
                            value={inputIP}
                            onChange={(e) => setinputIP(e.target.value)}>
                            </input>
                        </label>
                        
                    </form>
                    <button onClick={() => GetSpecificIP(inputIP)}>Check</button>
                </div>
            </div>
    )
}

export {SpecificIP}