import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RootPage from './pages/RootPage.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
