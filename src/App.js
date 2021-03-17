import React from 'react'
import {Switch, Route} from 'react-router-dom'

import './css/App.css'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import Home from './components/Home'

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div class='main'>
        <Switch>
          {/* <Route path='/about' component={About} /> */}
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
      <footer>
        <Footer />
      </footer>

    </div>
  );
};

export default App;