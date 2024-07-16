import About from "../Components/About";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Menu from "../Components/Menu";
import Quantities from "../Components/Quantities";
import Team from "../Components/Team";
import WhoAreWe from "../Components/WhoAreWe";



const Home = () => {
  return (
    <>
        <HeroSection/>
        <Quantities/>
        <Menu/>
        <About/>
        <WhoAreWe/>
        <Team/>
        <Footer/>
    </>
  )
}

export default Home;