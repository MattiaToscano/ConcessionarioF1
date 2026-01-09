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

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px', marginTop: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: '#1f2937', marginBottom: '32px' }}>Benvenuto nel Concessionario dei tuoi sogni</h2>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '1.125rem' }}>
          Le leggendarie auto della Formula 1 ti aspettano!
        </p>
      </main>


      <Footer />
    </div>
  )
}

export default App