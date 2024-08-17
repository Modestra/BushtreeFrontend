import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import FlowersPage from './pages/FlowersPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='flowers' element={<FlowersPage/>}></Route>
          <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
