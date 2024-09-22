
import { Routes , Route} from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { User } from './pages/user'
import Navigation from './components/navigation'


function App() {
  return (
    <div>
      <Navigation/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='login'element={<Login/>}/>
          <Route path='/user'element={<User/>}/>
        </Routes>
    </div>
  )
}

export default App
