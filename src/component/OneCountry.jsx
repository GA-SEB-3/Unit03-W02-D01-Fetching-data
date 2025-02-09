import {useState, useEffect} from 'react'
import axios from 'axios'
function OneCountry() {
    const [country,setCountry] = useState(null)

    async function getOneCountry(){
        const countryValue = await axios.get('https://restcountries.com/v3.1/name/bahrain')
        console.log(countryValue.data[0])
        setCountry(countryValue.data)
    }

    useEffect(()=>{
        getOneCountry()
    },[])


  return (
    <div>
      {country && <h2>{country[0].name.common}</h2>}
    </div>
  )
}

export default OneCountry
