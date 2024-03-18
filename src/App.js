import './App.css';
import Home from './Home';
import Create from './Pages/Create';
import Employee from './Pages/Employee';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>}  />
        <Route path='/register' element={<Signup/>}
          />
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/employelist' element={<Employee/>}/>
      </Routes>

   </BrowserRouter>


  );
}

export default App;
