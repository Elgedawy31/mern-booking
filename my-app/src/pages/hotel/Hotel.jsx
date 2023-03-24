import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Headers from "../../components/headers/Headers.jsx";
import Mail from "../../components/maik/Mail";
import Footer from "../../components/footer/Footer";
import img1 from "../../images/16.jpg";
import img2 from "../../images/20.jpg";
import img3 from "../../images/19.jpg";
import img4 from "../../images/18.jpg";
import img5 from "../../images/17.jpg";
import img6 from "../../images/21.jpg";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useFetch} from '../../hooks/useFetch.js'
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";


function Hotel() {



  const array = [img1, img2, img3, img4, img5, img6];

  const [slider , setSlider] = useState(0)
  const [open , setopen] = useState(false)
  const [openRoom , setOPenRoom] = useState(false)

  const location = useLocation()

  const navigate = useNavigate()

  

  const newId = location.pathname.split('/')[2]

  const {data}  = useFetch(`http://localhost:4000/hotels/find/${newId}`)


  const {user} = useContext(AuthContext)




  const handleimg = (i) => {

    setSlider(i)

    setopen(!open)

  }

  const leftHandle = () => {
    if(slider >= 1){
      setSlider(state => state - 1)
    }
  }
  const rightHandle = () => {
    if(slider <= 4){

      setSlider(state => state + 1)
    }
  }


  const HandleReserve = () => {

    if(user){
      setOPenRoom(true)
    }else{
      navigate('/login')
    }

  }

  return (
    <div>
        {open && <div className="overlay">
          
        <i className="fa-solid fa-arrow-left she fa-2xl" onClick={leftHandle}></i>

          <img src={data.Hotel.photos[0] ? data.Hotel.photos[slider]  :array[slider]} alt="" />

          <i className="fa-solid fa-arrow-right right fa-2xl" onClick={rightHandle}></i>

          <button onClick={() => setopen(!open)}>  X</button>


          </div>}


        {openRoom && <Reserve setOPenRoom={setOPenRoom} hotelId = {newId} dates={location.state.dates} />}






      <Navbar />
      <Headers type="list" />
      {data.Hotel !== undefined &&<div className="hotel">

<button onClick={HandleReserve}>Reserve or Book Now </button>
<div className="help">
  <h1>{data.Hotel.name}</h1>
  <div className="address">
    <i className="fas fa-location"></i>
    <span>{data.Hotel.address}</span>
  </div>
  <span>
    Excellent Location - 500m from center 
  </span>
  <span>Book a stay over {data.Hotel.cheapestPrice} a this
    property and get a free airport taxi</span>
  <div className="imgss">
    {data.Hotel.photos[0] ? data.Hotel.photos.map((e , i) => {
      return <img key={i} onClick={() => handleimg(i)} src={e} alt="" />;
    }): array.map((e , i) => {
      return <img key={i} onClick={() => handleimg(i)} src={e} alt="" />;
    })}
  </div>
</div>
</div>}
      <div className="homeContainer">
        <Mail />

        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
