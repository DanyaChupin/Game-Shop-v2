import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer/Footer'
import GamesFeatures from './components/GamesFeatures/GamesFeatures'
import Header from './components/Header/Header'

import SideBar from './components/SideBar/SideBar'
import GamePage from './pages/GamePage/GamePage'
import { fetchGames } from './store/gamesSlice'

function App() {
  // const { status, error } = useSelector(state => state.games)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGames())
  }, [dispatch])
  return (
    <div className="app">
      <Header />
      <div
        style={{
          display: 'flex',
          minHeight: '85vh',
          position: 'relative',
        }}
      >
        <SideBar />
        {/* {status === 'loading' && <h2>Loading...</h2>}
        {error ? <h2>An error occured:{error}</h2> : <GamesFeatures />} */}
        <Routes>
          <Route path="/games" element={<GamesFeatures />} exact />
        </Routes>
        <Routes>
          <Route path="games/:title" element={<GamePage />} exact />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
