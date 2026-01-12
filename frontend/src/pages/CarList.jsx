import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { carService } from '../services/api'

const CarList = () => {
    const navigate = useNavigate()
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        loadCars()
    }, [])

    const loadCars = async () => {
        try {
            setLoading(true)
            const data = await carService.getAllCars()
            setCars(data)
            setError(null)
        } catch (err) {
            setError('Errore nel caricamento delle auto')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

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
            
                 {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '32px'
                }}>
                    {cars.map((car) => (
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





