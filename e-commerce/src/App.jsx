import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Button from '@mui/material/Button'
import Header from './components/Header'
import Layout from './components/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route index path="/cart" element={<Cart />} />
      <Route index path="/login" element={<Login />} />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
