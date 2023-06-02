import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from "./components/Signup";
import { PrivateRoute } from "./context/PrivateRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path = '/login' Component = {Login} />
        <Route path = '/signup' Component = {Signup} />
      </Routes>
    </Router>
  )
}

export default App
