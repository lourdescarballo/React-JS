import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/Navbar/ItemListContainter/ItemListContainer'
function App() {
  

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Comprá en ShoeStore! Adidas, Nike y mucho más!"/>
    </>
  )
}

export default App
