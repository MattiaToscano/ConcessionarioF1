import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { carService } from '../services/api'

const CarList = () => {
    const navigate = useNavigate()
    
    // Stati base del componente
    const [cars, setCars] = useState([]) // Array con tutte le auto dal database
    const [loading, setLoading] = useState(true) // true quando sto caricando i dati
    const [error, setError] = useState(null) // Contiene eventuali errori
    
    // Stati per i filtri di ricerca
    const [searchTerm, setSearchTerm] = useState('') // Testo cercato dall'utente
    const [searchTeam, setSearchTeam] = useState('') // Team selezionato (es: "Ferrari")
    const [selectedYear, setSelectedYear] = useState('') // Anno selezionato (es: "2023")
    const [selectedPrice, setSelectedPrice] = useState('') // Fascia prezzo: 'low', 'medium', 'high'

    // Filtro l'array cars in base ai criteri selezionati dall'utente
    const filteredCars = cars.filter(car => {
        // Estraggo il valore numerico del prezzo (rimuovo €, punti e virgole)
        // Es: "€15.000.000" diventa 15000000
        const priceValue = parseInt(car.price.replace(/\D/g, ''))
        
        // Controllo se il nome dell'auto contiene il testo cercato (case-insensitive)
        // Es: cerca "ferrari" trova "Ferrari SF-23"
        const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase())
        
        // Controllo se il team corrisponde (se searchTeam è vuoto, accetto tutte)
        const matchesTeam = !searchTeam || car.team === searchTeam
        
        // Controllo se l'anno corrisponde (se selectedYear è vuoto, accetto tutte)
        const matchesYear = !selectedYear || car.year === selectedYear
        
        // Controllo fascia di prezzo
        let matchesPrice = true // Default: accetto tutte le auto
        if (selectedPrice === 'low') {
            // Fascia bassa: sotto i 13 milioni
            matchesPrice = priceValue < 13000000
        } else if (selectedPrice === 'medium') {
            // Fascia media: tra 13 e 16 milioni
            matchesPrice = priceValue >= 13000000 && priceValue < 16000000
        } else if (selectedPrice === 'high') {
            // Fascia alta: sopra i 16 milioni
            matchesPrice = priceValue >= 16000000
        }
        
        // L'auto viene mostrata solo se passa TUTTI i filtri
        return matchesSearch && matchesTeam && matchesYear && matchesPrice
    })

    // Creo array di team unici per il dropdown (senza duplicati e in ordine alfabetico)
    // Es: ["Alpine F1 Team", "Ferrari", "Mercedes", ...]
    const teams = [...new Set(cars.map(car => car.team))].sort()
    
    // Creo array di anni unici per il dropdown (dal più recente al più vecchio)
    // Es: ["2023", "2022", "2021", ...]
    const years = [...new Set(cars.map(car => car.year))].sort().reverse()

    // useEffect si esegue quando il componente viene montato (caricato)
    useEffect(() => {
        loadCars() // Carico le auto dal backend
    }, [])

    // Funzione asincrona per caricare le auto dall'API
    const loadCars = async () => {
        try {
            setLoading(true) // Mostro il messaggio "Caricamento..."
            const data = await carService.getAllCars() // Chiamo l'API
            setCars(data) // Salvo le auto ricevute nello state
            setError(null) // Pulisco eventuali errori precedenti
        } catch (err) {
            setError('Errore nel caricamento delle auto') // Mostro errore all'utente
            console.error(err) // Log dell'errore nella console per debug
        } finally {
            setLoading(false) // Nascondo il messaggio "Caricamento..."
        }
    }

    // Se sto ancora caricando, mostro solo il messaggio di attesa
    if (loading) {
        return (
            <div style={{
                minHeight: '100vh',
                backgroundColor: '#111827',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '1.5rem'
            }}>
                Caricamento auto...
            </div>
        )
    }

    // Se c'è un errore, mostro il messaggio di errore
    if (error) {
        return (
            <div style={{
                minHeight: '100vh',
                backgroundColor: '#111827',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#ef4444',
                fontSize: '1.5rem'
            }}>
                {error}
            </div>
        )
    }

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#111827',
            paddingTop: '80px',
            paddingBottom: '64px'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                paddingLeft: '16px',
                paddingRight: '16px'
            }}>
                {/* Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '48px'
                }}>
                    <h1 style={{
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        marginBottom: '16px'
                    }}>
                        Tutte le Auto F1
                    </h1>
                    <p style={{
                        color: '#9ca3af',
                        fontSize: '1.25rem'
                    }}>
                        {cars.length} auto disponibili
                    </p>
                </div>

                {/* Barra di ricerca e filtri */}
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    padding: '24px',
                    marginBottom: '32px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    {/* Barra di ricerca */}
                    <input
                        type="text"
                        placeholder="🔍 Cerca per nome auto..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            color: 'white',
                            fontSize: '1rem',
                            marginBottom: '16px',
                            outline: 'none'
                        }}
                    />

                    {/* Filtri dropdown in griglia */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '16px'
                    }}>
                        {/* Filtro Team */}
                        <select
                            value={searchTeam}
                            onChange={(e) => setSearchTeam(e.target.value)}
                            style={{
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                color: 'white',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                outline: 'none'
                            }}
                        >
                            <option value="" style={{ backgroundColor: '#1f2937' }}>Tutti i Team</option>
                            {teams.map(team => (
                                <option key={team} value={team} style={{ backgroundColor: '#1f2937' }}>
                                    {team}
                                </option>
                            ))}
                        </select>

                        {/* Filtro Anno */}
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            style={{
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                color: 'white',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                outline: 'none'
                            }}
                        >
                            <option value="" style={{ backgroundColor: '#1f2937' }}>Tutti gli Anni</option>
                            {years.map(year => (
                                <option key={year} value={year} style={{ backgroundColor: '#1f2937' }}>
                                    {year}
                                </option>
                            ))}
                        </select>

                        {/* Filtro Prezzo */}
                        <select
                            value={selectedPrice}
                            onChange={(e) => setSelectedPrice(e.target.value)}
                            style={{
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                color: 'white',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                outline: 'none'
                            }}
                        >
                            <option value="" style={{ backgroundColor: '#1f2937' }}>Tutte le Fasce</option>
                            <option value="low" style={{ backgroundColor: '#1f2937' }}>Economico (&lt; €13M)</option>
                            <option value="medium" style={{ backgroundColor: '#1f2937' }}>Medio (€13-16M)</option>
                            <option value="high" style={{ backgroundColor: '#1f2937' }}>Premium (&gt; €16M)</option>
                        </select>

                        {/* Pulsante Reset */}
                        <button
                            onClick={() => {
                                setSearchTerm('')
                                setSearchTeam('')
                                setSelectedYear('')
                                setSelectedPrice('')
                            }}
                            style={{
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid #e10600',
                                backgroundColor: 'transparent',
                                color: '#e10600',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#e10600'
                                e.target.style.color = 'white'
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'transparent'
                                e.target.style.color = '#e10600'
                            }}
                        >
                            Reset Filtri
                        </button>
                    </div>

                    {/* Contatore risultati */}
                    <p style={{
                        color: '#9ca3af',
                        fontSize: '0.875rem',
                        marginTop: '16px',
                        textAlign: 'center'
                    }}>
                        Mostrate {filteredCars.length} di {cars.length} auto
                    </p>
                </div>
            
                 {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '32px'
                }}>
                    {filteredCars.map((car) => (
                        <div
                            key={car.id}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s',
                                cursor: 'pointer'
                            }}
                            onClick={() => navigate(`/cars/${car.id}`)}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)'
                                e.currentTarget.style.boxShadow = '0 25px 50px rgba(225, 6, 0, 0.3)'
                                e.currentTarget.style.borderColor = '#e10600'
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            {/* Image */}
                            <div style={{
                                height: '200px',
                                overflow: 'hidden',
                                backgroundColor: '#1f2937'
                            }}>
                                <img
                                    src={car.image || `https://via.placeholder.com/400x200/1f2937/ffffff?text=${car.name}`}
                                    alt={car.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div style={{
                                padding: '24px'
                            }}>
                                <h3 style={{
                                    color: '#e10600',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    marginBottom: '8px'
                                }}>
                                    {car.name}
                                </h3>
                                <p style={{
                                    color: '#9ca3af',
                                    fontSize: '1rem',
                                    marginBottom: '4px'
                                }}>
                                    {car.team}
                                </p>
                                <p style={{
                                    color: '#6b7280',
                                    fontSize: '0.875rem',
                                    marginBottom: '16px'
                                }}>
                                    Stagione {car.year}
                                </p>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingTop: '16px',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <span style={{
                                        color: '#e10600',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold'
                                    }}>
                                        {car.price}
                                    </span>
                                    <button
                                        style={{
                                            backgroundColor: '#e10600',
                                            color: 'white',
                                            padding: '8px 16px',
                                            borderRadius: '8px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '0.875rem',
                                            fontWeight: 'bold',
                                            transition: 'all 0.2s'
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            navigate(`/cars/${car.id}`)
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#b91c1c'
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#e10600'
                                        }}
                                    >
                                        Dettagli →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarList





