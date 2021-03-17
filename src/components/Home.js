import React, {useEffect, useState} from 'react'
import axios from 'axios'

import TunesCard from './TunesCard'

export default function Home(props) {
    const [baseUrl] = useState("https://looney-toons-api.herokuapp.com/api/characters")
    const [data, setData] = useState([])

    const [refresh, setRefresh] = useState(true)
    
    const refreshHandler = () => {
        setRefresh(!refresh)
      }

    useEffect(() => {
        axios.get(`${baseUrl}`)
        .then((res) =>{
            console.log(data)
            setData(res.data.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }, [refresh])

    return (
        <>
            {data.map(tune => (
                <TunesCard key={tune.id} tune={tune} refreshHandler={refreshHandler} baseUrl={baseUrl} />
            ))}
        </>
    )
}
