import './App.css'
import Nav from './components/header/Header'
import Footer from './components/footer/Footer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <div className="header"><Nav /></div>
      <Routes>
        <Route path='/' element={<h1>Product Listing Component will be here</h1>} />
        <Route path='/add' element={<h1>AddProduct Component will be here</h1>} />
        <Route path='/update' element={<h1>Update Product Component will be here</h1>} />
        <Route path='/profile' element={<h1>Profile Component will be here</h1>} />
        <Route path='/logout' element={<h1>Logout Component will be here</h1>} />
      </Routes>
      <div className="footer"><Footer /></div>

      </BrowserRouter>
    </div>
  )
}

export default App
