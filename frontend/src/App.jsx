import Header from './components/common/Header'
import CarCarousel from './components/home/CarCarousel'
import Footer from './components/common/footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <Header />
      
      <div>
        <CarCarousel />
      </div>

      <Footer />
    </div>
  )
}

export default App