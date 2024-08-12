import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/header';
import {Home} from './pages/home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,      
    },
  ]);
  
  return (
    <>
     <div style={{marginTop:50}}>
      <RouterProvider router={router}/>
     </div>
     <Header/>
    </>
  )
}

export default App
