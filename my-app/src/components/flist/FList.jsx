import './FList.css'

import nine from '../../images/9hotel.jpg'
import ten from '../../images/15.jpg'
import eleven from '../../images/11hotel.jpg'
import tewelv from '../../images/12hjotel.jpg'
import {useFetch} from '../../hooks/useFetch.js'

function FList() {

    const {data  } = useFetch('http://localhost:4000/hotels?featured=true&limits=4')

    const arr = [nine , ten , eleven , tewelv]


  return (
    <div className='flist'>

        {!data.Hotels ? 'aha' :data.Hotels.map((itme ,i) => {
            return(
                <div className="myItem"key={itme._id}>
            <img src={itme.photos[i] || arr[i]} alt="" />
            <span>{itme.name}</span>
            <span>{itme.city}</span>
            <span>Starting from ${itme.cheapestPrice}</span>
            {
                !itme.rating ? <div className="rating">
                <button>8.9</button>
                <span>Excellent</span>
            </div> : <div className="rating">
                <button>{itme.rating}</button>
                <span>Excellent</span>
            </div>
            }
        </div>
            )
        })}
      

    </div>
  )
}

export default FList