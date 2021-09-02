import './App.css';
import Banner from './components/Banner/Banner';
// import BannerLarge from './components/BannerLarge/BannerLarge';
import Certificates from './components/Certificates-Hyla/Certificates';
import Models from './components/Equipment Models/Models';
import Header from './components/Header/Header';
import InfoCard from './components/Info Card/InfoCard';
import Movie from './components/Movie Intro/Movie';


function App() {
  return (
    <div className="App">
      <Banner/>
      {/* <BannerLarge/> */}
      <Header/>
      <Movie/>
      <InfoCard/>
      <Models/>
      <Certificates/>
    </div>
  );
}

export default App;
