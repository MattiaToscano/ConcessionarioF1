import Header from './components/common/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Benvenuto nel Concessionario dei tuoi sogni</h2>
        <p className="text-center text-gray-600">
          Le leggendarie auto della Formula 1 ti aspettano!
        </p>
      </main>
    </div>
  )
}

export default App