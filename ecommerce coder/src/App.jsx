import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/Navbar/ItemListContainter/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'
import { NotificationProvider } from './components/notifications/NotificationService'
import { CartProvider } from './context/CartContext'


function App() {
 
  return (
    <>
    <BrowserRouter>
    <NotificationProvider>        
          <CartProvider>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Comprá en ShoeStore! Adidas, Nike y mucho más!'}/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<CartView/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
              </Routes>
          </CartProvider>
          </NotificationProvider> 
       
      </BrowserRouter>

    </>
  )
}

export default App
