import axios from 'axios'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useNavigate} from 'react-router-dom'
import './Reserve.css'

function Reserve({hotelId , setOPenRoom , dates}) {


    const navigate = useNavigate()

    const {data} = useFetch(`http://localhost:4000/hotels/room/${hotelId}`)
    const [selectRoom , setSelectRoom] = useState([])
    
        const  getDatesInRange = (startData , endData) => {
    
            const start = new Date(startData)
            const end = new Date(endData)
    
            const date = new Date(start.getTime());
    
            let list =[] 
    
            while(date <= end){
                list.push(new Date(date).getTime())
    
                date.setDate(date.getDate() + 1)
            }
    
            return list
        }
    
    
        
        const allDates = getDatesInRange(dates.data[0].startDate , dates.data[0].endDate)


        const isAvailable = (roomNumber) => {
            const isfound = roomNumber.unvailabaleDates.some((date) => allDates.includes(new Date(date).getTime()))

            return !isfound
        }


    const hndleSelect = (e) => {

        const selected = e.target.checked;
        const value = e.target.value ;


        setSelectRoom(selected ? [...selectRoom , value] : selectRoom.filter(item => item !== value))


    }




    const HnadleClick =async () => {

        try {
            await Promise.all(selectRoom.map(roomid => {
                const res = axios.put(`http://localhost:4000/rooms/avaiable/${roomid}` , {dates:allDates})

                return res.data
            }))


            setOPenRoom(false)


            navigate('/')
            
        } catch (error) {
            
            console.log(error)

        }
    }


  return (
    <div className='reserve' >
        <button className='btn btn-success' onClick={() => setOPenRoom(false)}>Back</button>
        <div className="rooms">
            <h3>Choose Your Room</h3>
            {data.list !==undefined &&data.list.map(room => {

                return(
                    <div key={room._id} className="roomItem">
                        <div className="info">
                        <div className="rtitle" style={{fontWeight:'bold'}}>{room.title}</div>
                        <div className="desc" style={{fontSize:'14px'}}>{room.desc}</div>
                        <div className="max"  style={{fontSize:'14px'}}>Max People : {room.maxPeople}</div>
                        <div className="rprice" style={{fontWeight:'bold'}}> $ {room.price}</div>
                        </div>
                        {room.roomNumbers.map(roomNumber => {
                            return(
                                <div className="room" key={roomNumber._id}>
                                <label htmlFor="one">{roomNumber.number}</label>
                                <input disabled={!isAvailable(roomNumber)} type="checkbox" value={roomNumber._id} onChange={hndleSelect} />
                            </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
            <button onClick={HnadleClick} className='btn btn-success'>Reserve</button>
        
    </div>
  )
}

export default Reserve