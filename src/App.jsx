/* eslint-disable no-unused-vars */
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='*' element={<div>Error 404 Page not found</div>}></Route>
      </Routes>
    </>
  )
}

export default App
