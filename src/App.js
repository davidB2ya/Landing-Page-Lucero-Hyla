import React from 'react';
import { Switch , Route} from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import Catalogue from './components/Catalogue/Catalogue';
import Accessories from './components/Accessories/Accessories';
import Trolley from './components/Trolley/Trolley';
import NavBar from './components/NavBAr/NavBar';
import { AppProvider } from './components/Context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Banner/>
        <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/home'><Home/></Route>
            <Route path='/catalogue'><Catalogue/></Route>
            <Route path='/home/accessories'><Accessories/></Route>
            <Route path='/home/trolley'><Trolley/></Route>
            <Route path='/home/navbar'><NavBar/></Route>
        </Switch>
      
        <a
          href="https://wa.me/573052290670"
          class="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </div>
    </AppProvider>
  );
}

export default App;
