import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Headers from '../../components/headers/Headers'
import Featured from '../../components/featured/Featured'
import PList from '../../components/pList/PList'
import FList from '../../components/flist/FList'
import Mail from '../../components/maik/Mail'
import Footer from '../../components/footer/Footer'


function Home() {
  return (
    <div>
      
      <Navbar/>

      <Headers />

      <div className="homeContainer">
        <Featured />

        <h3>Browse By Property Type </h3>

        <PList />

        <h3>Homes Guests love </h3>

        <FList />

        <Mail />

        <Footer />

      </div>
      
      </div>
  )
}

export default Home