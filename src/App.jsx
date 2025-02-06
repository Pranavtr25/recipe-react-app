import FavouritesComponent from './components/FavouritesComponent'
import MainComponent from './components/MainComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MainComponent/>} />
        <Route path='/favorites' element={<FavouritesComponent/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
