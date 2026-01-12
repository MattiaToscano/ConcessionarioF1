import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import CarCarousel from './components/home/CarCarousel'
import CarDetail from './components/cars/CarDetail'
import CarList from './/pages/CarList'
import Footer from './components/common/footer'

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
        <Header />
        
        <Routes>
          <Route path="/" element={<CarCarousel />} />
          <Route path="/" element={<CarList />} />
          <Route path="/cars/:id" element={<CarDetail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App