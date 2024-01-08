import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import User from './components/user-pages/User'
import NoLogin from './components/user-pages/noLogin'
import PrivateComponent from './components/index-pages/PrivateComponent'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <div className="header"><Header /></div>
      <Routes>
        {/* Enabling Private component to check if user is logged in {or if there is 'user' key in local storage} */}
        <Route path='/' element={<PrivateComponent />}>
          <Route path='/' element={<h1>Product Listing Component will be here</h1>} />
          <Route path='/add' element={<h1>AddProduct Component will be here</h1>} />
          <Route path='/update' element={<h1>Update Product Component will be here</h1>} />
          <Route path='/profile' element={<h1>Profile Component will be here</h1>} />
          <Route path='/logout' element={<h1>Logout Component will be here</h1>} />
        </Route>
        {/* Ending Private component route */}
        <Route path='/user' element={<User />} />
        <Route path='/noLogin' element={<NoLogin />} />
      </Routes>
      <div className="footer"><Footer /></div>

      </BrowserRouter>
    </div>
  )
}

export default App
