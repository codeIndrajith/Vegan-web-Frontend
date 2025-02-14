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
import store from './store.js'
import { Provider } from 'react-redux'
import AuthPage from './pages/AuthPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AllProductsPage from './pages//ProductPages/AllProductsPage.jsx'
import ProductPage from './pages/ProductPages/ProductPage.jsx'
import AllShopPage from './pages/ShopPages/AllShopPage.jsx'
import ShopPage from './pages/ShopPages/ShopPage.jsx'
import AllFoodsPage from './pages/FoodPages/AllFoodsPage.jsx'
import FoodPage from './pages/FoodPages/FoodPage.jsx'
import AllUpcomingEventsPage from './pages/EventPages/AllUpcomingEventsPage.jsx'
import EventPage from './pages/EventPages/EventPage.jsx'
import ResturantManufactureDashboard from './pages/resturant-manufacture/resturantManufactureDashboard.jsx'
import ProductManufactureDashboard from './pages/product-manufacture/productManufactureDashboard.jsx'

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
        <Route path='/all-foods' element={<AllFoodsPage />} />
        <Route path='/all-foods/:foodId' element={<FoodPage />} />
        <Route path='/all-events' element={<AllUpcomingEventsPage />} />
        <Route path='/all-events/:eventId' element={<EventPage />} />

        {/* Manufacture Routes */}
        <Route path='/product-manufacture' element={<ProductManufactureDashboard />} />

      {/* resturant-manufacture Routes */}
        <Route path='/resturant-manufacture' element={<ResturantManufactureDashboard />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
  </Provider>
)
