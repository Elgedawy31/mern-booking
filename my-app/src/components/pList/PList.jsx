import './PList.css'
import four from '../../images/fourHotel.jpg'
import five from '../../images/sevenHotel.jpg'
import sex from '../../images/sexHotel.webp'
import seven from '../../images/fiveHotel.jpg'
import eight from '../../images/eightHotelwebp.webp'
import { useFetch } from '../../hooks/useFetch'

function PList() {



    const {data , loading } = useFetch('http://localhost:4000/hotels/countByType')

    const arr = [{type:'hotel' , count:1}, {type:'hotel' , count:1}, {type:'hotel' , count:1},{type:'hotel' , count:1},{type:'hotel' , count:1}]
    
    let newData = data || arr

  return (
    <div className='plist'>

        {
            !data[0] ?"Loading":<><div className="plistItem">
            <img src={five} alt="" />
            <div className="titles">
                <h1>{data[0].type}</h1>
                <h3>{data[0].count} {data[0].type}</h3>
            </div>
        </div>
        <div className="plistItem">
            <img src={sex} alt="" />
            <div className="titles">
            <h1>{data[1].type}</h1>
                <h3>{data[1].count} {data[1].type}</h3>
            </div>
        </div>
        <div className="plistItem">
            <img src={seven} alt="" />
            <div className="titles">
            <h1>{data[2].type}</h1>
                <h3>{data[2].count} {data[2].type}</h3>
            </div>
        </div>
        <div className="plistItem">
            <img src={eight} alt="" />
            <div className="titles">
            <h1>{data[3].type}</h1>
                <h3>{data[3].count} {data[3].type}</h3>
            </div>
        </div>
        <div className="plistItem">
            <img src={four} alt="" />
            <div className="titles">
            <h1>{data[4].type}</h1>
                <h3>{data[4].count} {data[4].type}</h3>
            </div>
        </div></>
        }
        
    </div>
  )
}

export default PList