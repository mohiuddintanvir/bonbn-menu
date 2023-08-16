
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';
import Menu from './component/Menu/Menu';

function App() {
  
  return (
    <div className="">
 <RouterProvider router={router} />

   
    </div>
  );
}

export default App;
