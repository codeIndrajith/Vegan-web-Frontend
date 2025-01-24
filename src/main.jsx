import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import AuthPage from './pages/AuthPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AllProductsPage from './pages/AllProductsPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import AllShopPage from './pages/AllShopPage.jsx'
import ShopPage from './pages/ShopPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<HomePage />} />
        <Route path='/signin' element={<AuthPage />} />
        <Route path='/signup' element={<AuthPage />} />
        <Route path='/all-products' element={<AllProductsPage />} />
        <Route path='/all-products/:productId' element={<ProductPage />} />
        <Route path='/all-shops' element={<AllShopPage />} />
        <Route path='/all-shops/:shopId' element={<ShopPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
)
