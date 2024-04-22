import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from '../src/pages/Landingpage'
import Home from '../src/pages/Home'
import Watchhistory from '../src/pages/Watchhistory'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
     <Header/>
     
     <Routes>
      <Route path='/'  element={<Landingpage/>}/>
      <Route path='/Home' element={<Home/>} />
      <Route path='/watch-history' element={<Watchhistory/>} />

     </Routes>
     <Footer/>

    </>
  )
}

export default App
