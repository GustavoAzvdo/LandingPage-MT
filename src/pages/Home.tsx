
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import History from '../components/History/History'
import Services from '../components/Services/Services'
import Marcas from '../components/Marcas/Marcas'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner />
        <History />
        <Services/>
        <Marcas />
    </>
  )
}

export default Home