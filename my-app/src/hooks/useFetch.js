import axios from 'axios';
import {useEffect, useState} from 'react'

export const useFetch = (url) => {

    const [data , setData] = useState([])
    const [loading , setloading] = useState(false)
    const [error , seterror] = useState(false)

    useEffect(() => {

        const fetchData = async () => {

            setloading(true)

            try {
                const res  = await axios.get(url)

                setData(res.data)
                
            } catch (error) {
                console.log('error ')
            }

            setloading(false)

        }

        fetchData()


    } ,[url])




    

    const refetch = async () => {
        
        setloading(true)
        
        try {
            const res  = await axios.get(url)
            
            setData(res.data)
            
        } catch (error) {
            console.log('error ')
        }

        

        setloading(false)

}


return {data , loading , error , refetch}

}
    