import "./Headers.css";
import { DateRange } from "react-date-range";
import {  useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import {useNavigate} from 'react-router-dom'

function Headers({ type }) {

  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const [dest, setDest] = useState('');

  const [data, setdata] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);




  

const HandleSearch = () => {


  navigate('/hotels' , {state : {data , dest}})

}

  return (
    <div className="header">
      <div className={type === 'list' ? 'container aha' : 'container'}>
        <div className="headerList">
          <div className="headerListItem active">
            <i className="fas fa-bed"></i>
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <i className="fa-solid fa-plane"></i>
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <i className="fa-solid fa-car"></i>
            <span>car Renntals</span>
          </div>
          <div className="headerListItem">
            <i className="fa-solid fa-magnet"></i>
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <i className="fa-solid fa-taxi"></i>
            <span>Airport</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            {" "}
            <h1>A lifetime of discount ? it,s Genus.</h1>
            <p>
              get rewarded for your travels unlock instnat saving of 10% or max
              with a fre GadBooking account
            </p>
          
            <div className="headerSearch">
              <div className="itme">
                <i className="fas fa-bed"></i>
                <input type="text" placeholder="where are your going" onChange={(e) => setDest(e.target.value)} />
              </div>

              <div className="itme">
                <i
                  className="fa-solid fa-calendar-days"
                  onClick={() => setOpen(!open)}
                  style={{ cursor: "pointer" }}
                ></i>
                <span>{`${format(data[0].startDate, "MM/dd/yyyy")} to ${format(
                  data[0].endDate,
                  "MM/dd/yyyy"
                )} `}</span>
                {open && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setdata([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={data}
                    className="data"
                  />
                )}
              </div>

              <div className="itme">
                <i className="fa-solid fa-person"></i>
                <span>2 adults 2 children 1 room</span>
              </div>

              <button className="" onClick={HandleSearch} >Search</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Headers;
