import React from 'react'
import {Container} from '@material-ui/core'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import useStyles from './styles'

export const App =()=> (
    <BrowserRouter>
     <Container maxidth="lg">
      <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/auth" exact element={<Auth/>} />
    </Routes>
      </Container>
   
    </BrowserRouter>
    )
