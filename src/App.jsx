import './App.css'
import {Route, Routes} from 'react-router-dom'
import Counter from './pages/Counter'
import Password from './pages/Password'
import UsersList from './pages/UsersList'
import ControllerForm from './pages/ControlledForm'

function App() {
  return (
    <Routes>
      <Route path="/counter" element={<Counter/>} />
      <Route path="/password" element={<Password/>} />
      <Route path='/users' element={<UsersList/>}/>
      <Route path='/form' element={<ControllerForm/>}/>
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}

export default App
