
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import History from '../components/History/History'
import Services from '../components/Services/Services'
import Marcas from '../components/Marcas/Marcas'
import Localization from '../components/Localization/Localization'
import Contatos from '../components/Contatos/Contatos'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner />
        <History />
        <Services/>
        <Marcas />
        <Localization />
        <Contatos />
        <Footer />
    </>
  )
}

export default Home