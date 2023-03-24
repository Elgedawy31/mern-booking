import './Featured.css'
import one  from '../../images/oneHotel.jpg'
import two  from '../../images/twoHotel.jpeg'
import three  from '../../images/threeHotel.jpg'
import { useFetch } from '../../hooks/useFetch'



function Featured() {

   const {data , loading } = useFetch('http://localhost:4000/hotels/countByCity?city=berlin,madrid,london')


   let newData = data.list || [0 , 1 , 3]

  return (


    <div className='featured'> 

    {
        loading ?
        
        "Loading Please Wait":
        
        <div className="all">
        <div className="featuredItem">
            <img src={one} alt="" />
            <div className="titles">
                <h1>berlin</h1>
                <h3>{newData[0]? newData[0] : '11'} Properties</h3>
            </div>
        </div>
        <div className="featuredItem">
            <img src={two} alt="" />
            <div className="titles">
                <h1>Madrid</h1>
                <h3>{newData[1]? newData[1] : '11'} Properites</h3>
            </div>
        </div>
        <div className="featuredItem">
            <img src={three} alt="" />
            <div className="titles">
                <h1>london</h1>
                <h3>{newData[2]? newData[2] : '11'} Propreties</h3>
            </div>
        </div>
        </div>
    }

    </div>
  )
}

export default Featured