import React, { Fragment } from 'react'
import { Button } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';   
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Videos from './Component/Videos';
const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />                  
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/videos' element={<Videos />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  )
}

export default App