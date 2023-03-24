import './Item.css'
import ima from '../../images/13sitting-room_hotel_homepage_banner.jpg'
import { useNavigate } from 'react-router-dom'
function Item({data , dates}) {


  const navigate  = useNavigate()


  

    
      

  return (
    <>
        {data.Hotels !== undefined ?
        
        
        <>
           
           {data.Hotels.map((ele  , i ) => {
            
            return(
                <div className='item' key={i}>
                <img src={ele.photos[0] || ima} alt="" style={{width:'200px' , height:'200px' , objectFit:'cover'}} />
                <div className="center">
                    <h1>{ele.name}</h1>
                    <span>{ele.distance} M </span>
                    <span>Free airport taxi</span>
                    <span>studio Apartment with air conditioning</span>
                    <span>{ele.desc}</span>
                    <span>free cancellation</span>
                    <span>You can cancel later , so lock in this great price today !</span>
                </div>
                <div className="right">
                    <div className="rating">
                        {ele.rating ? <><span>Excellent </span>
                        <button>{ele.rating}</button></> : <><span>Excellent </span>
                        <button>8.9</button></>}
                    </div>
                    <div className="texts">
                        <span>${ele.cheapestPrice}</span>
                        <span>Includes Taxes</span>
                        <button  onClick={ () => {
                            navigate(`/hotels/${ele._id}` , {state:{dates}})
                        }}>See availabiltiy</button>
                    </div>
                </div>
            </div> 
            )

           })}

        </>
        
        
        :
        
        
        
        
        
        
        
        
        
        
        
        <div className='item'>
        <img src={ima} alt="" style={{width:'200px' , height:'200px' , objectFit:'cover'}} />
        <div className="center">
            <h1>Tower Street Apartments</h1>
            <span>500m from Center</span>
            <span>Free airport taxi</span>
            <span>studio Apartment with air conditioning</span>
            <span>Entire studio * 1 bathroom * 31 m 1 full bed</span>
            <span>free cancellation</span>
            <span>You can cancel later , so lock in this great price today !</span>
        </div>
        <div className="right">
            <div className="rating">
                <span>Excellent </span>
                <button>8.9</button>
            </div>
            <div className="texts">
                <span>$123</span>
                <span>Includes Taxes</span>
                <button>See availabiltiy</button>
            </div>
        </div>
    </div>}
    </>
  )
}

export default Item