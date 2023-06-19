import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbartest from './Component/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home } from './pages/Home';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';
function Layout() {
  return (
    <div>
      <Navbartest/>
      <Outlet/>
    </div>
  );
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='Page1' element={<Page1/>}/>
      <Route path='Page2' element={<Page2/>}/>
      <Route path='Page3' element={<Page3/>}/>
      <Route path='Page4' element={<Page4/>}/>
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
