
import './App.css'
import Button from '@mui/material/Button';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
    <ToastContainer />
    <div>
        <Navbar />
        <Routes>
          <Route path="/"  element={<HomePage />}/>
          <Route path="/create"  element={<CreatePage />}/>

        </Routes>
        
    </div>
    </>
  )
}

export default App
