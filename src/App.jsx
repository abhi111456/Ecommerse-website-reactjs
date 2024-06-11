import Nav from './components/Nav'
import Hero from './components/Hero'
import { Route,Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import ProductDetail from './about/ProductDetail'
import Detail from './about/Detail'


function App() {
 

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<ProductDetail/>}/>
      <Route path='/detail' element={<Detail/>}/>
      
      
    </Routes>
      
    </>
  )
}

export default App
