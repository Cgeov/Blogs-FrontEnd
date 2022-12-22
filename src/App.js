import Cabecera from './pags/Cabecera';
import Principal from './pags/Principal';
import Blogs from './pags/Blogs';
import Login from './pags/login';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Cabecera/>}>
      <Route path='/' element={<Principal/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/gestionar' element={<Blogs/>}/>
      <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
  );
}

export default App;
