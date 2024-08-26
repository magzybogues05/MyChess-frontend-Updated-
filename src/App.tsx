import { Route, Routes } from 'react-router-dom'
import Landing from './screens/Landing'
import Game from './screens/Game'

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    </div>
  )
}

export default App
