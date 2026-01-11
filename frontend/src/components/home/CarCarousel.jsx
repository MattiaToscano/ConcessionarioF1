import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { carService } from '../../services/api'

const CarCarousel = () => {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0)
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

    const nextCar = () => {
        setCurrentIndex((prev) => (prev + 1) % cars.length)
    }

    const prevCar = () => {
        setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length)
    }

    if (loading) {
        return (
            <div style={{
                backgroundColor: '#111827',
                paddingTop: '64px',
                paddingBottom: '64px',
                textAlign: 'center',
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
                backgroundColor: '#111827',
                paddingTop: '64px',
                paddingBottom: '64px',
                textAlign: 'center',
                color: '#ef4444',
                fontSize: '1.5rem'
            }}>
                {error}
            </div>
        )
    }

    if (cars.length === 0) {
        return (
            <div style={{
                backgroundColor: '#111827',
                paddingTop: '64px',
                paddingBottom: '64px',
                textAlign: 'center',
                color: 'white',
                fontSize: '1.5rem'
            }}>
                Nessuna auto disponibile
            </div>
        )
    }

    return (
        <div style={{
            backgroundColor: '#111827',
            paddingTop: '64px',
            paddingBottom: '64px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                paddingLeft: '16px',
                paddingRight: '16px'
            }}>
                <h2 style={{
                    fontSize: '2.25rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'white',
                    marginBottom: '48px'
                }}>
                    Ecco i nostri prodotti di punta
                </h2>

                <div style={{ textAlign: 'center' }}>
                    {/* Immagine dell'auto con animazione*/}
                    <div style={{
                        marginBottom: '32px',
                        transition: 'all 0.5s ease-in-out'
                    }}>
                        <img
                            src={cars[currentIndex].image}
                            alt={cars[currentIndex].name}
                            style={{
                                margin: '0 auto',
                                borderRadius: '8px',
                                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)',
                                maxWidth: '672px',
                                width: '100%',
                                transform: 'scale(1)',
                                transition: 'transform 0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    </div>

                    {/* Info auto in card style*/}
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        padding: '24px',
                        margin: '0 auto',
                        maxWidth: '512px',
                        marginBottom: '32px',
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)'
                    }}>
                        <h3 style={{
                            color: '#e10600',
                            fontSize: '1.875rem',
                            fontWeight: 'bold',
                            marginBottom: '8px'
                        }}>
                            {cars[currentIndex].name}
                        </h3>
                        <p style={{
                            color: 'white',
                            fontSize: '1.25rem',
                            marginBottom: '8px'
                        }}>
                            {cars[currentIndex].team} • {cars[currentIndex].year}
                        </p>
                        <p style={{
                            color: '#e10600',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginBottom: '16px'
                        }}>
                            {cars[currentIndex].price}
                        </p>
                        
                        <button
                            onClick={() => navigate(`/cars/${cars[currentIndex].id}`)}
                            style={{
                                backgroundColor: '#e10600',
                                color: 'white',
                                padding: '12px 32px',
                                borderRadius: '8px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                transition: 'all 0.2s',
                                width: '100%'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#b91c1c'
                                e.target.style.transform = 'scale(1.02)'
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#e10600'
                                e.target.style.transform = 'scale(1)'
                            }}
                        >
                            Vedi Dettagli
                        </button>
                    </div>

                    {/* Indicatori */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '32px',
                        marginBottom: '32px'
                    }}>
                        {cars.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    transition: 'all 0.2s',
                                    border: '4px solid',
                                    backgroundColor: index === currentIndex ? '#e10600' : '#d1d5db',
                                    borderColor: index === currentIndex ? '#e10600' : '#6b7280',
                                    transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)',
                                    boxShadow: index === currentIndex ? '0 25px 50px rgba(225, 6, 0, 0.6)' : 'none',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => {
                                    if (index !== currentIndex) {
                                        e.target.style.backgroundColor = '#e10600';
                                        e.target.style.borderColor = '#e10600';
                                        e.target.style.transform = 'scale(1.05)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (index !== currentIndex) {
                                        e.target.style.backgroundColor = '#d1d5db';
                                        e.target.style.borderColor = '#6b7280';
                                        e.target.style.transform = 'scale(1)';
                                    }
                                }}
                            />
                        ))}
                    </div>



                    {/* Pulsanti */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px'
                    }}>
                        <button
                            onClick={prevCar}
                            style={{
                                backgroundColor: '#e10600',
                                color: 'white',
                                paddingLeft: '32px',
                                paddingRight: '32px',
                                paddingTop: '16px',
                                paddingBottom: '16px',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                transform: 'scale(1)'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#b91c1c';
                                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#e10600';
                                e.target.style.boxShadow = 'none';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >

                            <span>←</span>
                            <span>Precedente</span>
                        </button>
                        <button
                            onClick={nextCar}
                            style={{
                                backgroundColor: '#e10600',
                                color: 'white',
                                paddingLeft: '32px',
                                paddingRight: '32px',
                                paddingTop: '16px',
                                paddingBottom: '16px',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                transform: 'scale(1)'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#b91c1c';
                                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#e10600';
                                e.target.style.boxShadow = 'none';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >


                            <span>Successiva</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCarousel