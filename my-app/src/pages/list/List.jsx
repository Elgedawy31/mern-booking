import './List.css'
import Navbar from '../../components/navbar/Navbar'
import Headers from '../../components/headers/Headers'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { format } from "date-fns";
import { DateRange } from 'react-date-range'
import Item from '../../components/ItemSearch/Item'
import {useFetch} from '../../hooks/useFetch.js'
function List() {

  const location = useLocation()

  const [Data , setData] = useState(location.state.data)
  const [dest , setDest] = useState(location.state.dest)
  const [open, setOpen] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);



  const {data , refetch} = useFetch(`http://localhost:4000/hotels?city=${dest}&min=${min||0}&max=${max||999}`)


  let newData = data


  const HandleSubmit = () => {


    refetch()



  }




  return (
    <div className='ahetin'>
      <Navbar />
      <Headers type ='list' />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1>Search</h1>
            <label htmlFor="dest">Destination</label>
            <input type="text" name="dest" id="dest" placeholder={dest} />

            <label htmlFor="dest">dete-to-data</label>

            <span onClick={() => setOpen(!open)}>{`${format(Data[0].startDate, "MM/dd/yyyy")} to ${format(
                  Data[0].endDate,
                  "MM/dd/yyyy"
                )} `}</span>
                                {open && (
                  <DateRange
                    onChange={(item) => setData([item.selection])}
                    endDate={new Date()}
                    ranges={Data}
                  />
                )}


              <label htmlFor="option">options</label>
              <div className="optiontiem">
                <span>Min Price <small>per night</small></span>
                <input min={1} type="number" name="number" id="number" placeholder='1' value={min} onChange={(e) => setMin(e.target.value)}  />
              </div>
              <div className="optiontiem">
                <span>max Price <small>per night</small></span>
                <input min={101} type="number" name="number" id="number" placeholder={101} value={max} onChange={(e) => setMax(e.target.value)}  />
              </div>
              <div className="optiontiem">
                <span>Adults</span>
                <input min={1} type="number" name="number" id="number" placeholder='1'  />
              </div>
              <div className="optiontiem">
                <span>Children</span>
                <input min={1} type="number" name="number" id="number" placeholder='1'  />
              </div>
              <div className="optiontiem">
                <span>rooms</span>
                <input min={1} type="number" name="number" id="number" placeholder='1'  />
              </div>

               <button className='button' onClick={HandleSubmit}>Search</button>
                
          </div>
          <div className="listResult">

          {newData && <Item data={newData} dates = {location.state} />}


          </div>
        </div>
      </div>
    </div>
  )
}

export default List