import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { carService } from '../../services/api'

const CarDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [car, setCar] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        loadCar()
    }, [id])

    const loadCar = async () => {
        try {
            setLoading(true)
            const data = await carService.getCarById(id)
            setCar(data)
            setError(null)
        } catch (err) {
            setError('Auto non trovata')
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
                Caricamento...
            </div>
        )
    }

    if (error || !car) {
        return (
            <div style={{ 
                minHeight: '100vh', 
                backgroundColor: '#111827',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px'
            }}>
                <p style={{ color: '#ef4444', fontSize: '1.5rem' }}>{error}</p>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        backgroundColor: '#e10600',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: 'bold'
                    }}
                >
                    Torna alla Home
                </button>
            </div>
        )
    }

    const specs = typeof car.specs === 'string' ? JSON.parse(car.specs) : car.specs
    const hybrid = typeof car.hybrid === 'string' ? JSON.parse(car.hybrid) : car.hybrid
    const performance = typeof car.performance === 'string' ? JSON.parse(car.performance) : car.performance

    return (
        <div style={{ 
            minHeight: '100vh', 
            backgroundColor: '#111827',
            paddingTop: '80px',
            paddingBottom: '64px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                paddingLeft: '16px',
                paddingRight: '16px'
            }}>
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        border: '2px solid white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        marginBottom: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#e10600'
                        e.currentTarget.style.borderColor = '#e10600'
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.borderColor = 'white'
                    }}
                >
                    <span>←</span>
                    <span>Torna indietro</span>
                </button>

                {/* Hero Section */}
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    padding: '32px',
                    marginBottom: '32px'
                }}>
                    <img
                        src={car.image || 'https://via.placeholder.com/1200x600/1f2937/ffffff?text=' + car.name}
                        alt={car.name}
                        style={{
                            width: '100%',
                            borderRadius: '12px',
                            marginBottom: '24px',
                            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)'
                        }}
                    />
                    <h1 style={{
                        color: '#e10600',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        marginBottom: '8px'
                    }}>
                        {car.name}
                    </h1>
                    <p style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        marginBottom: '16px'
                    }}>
                        {car.team} • {car.year}
                    </p>
                    <p style={{
                        color: '#e10600',
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>
                        {car.price}
                    </p>
                </div>

                {/* Specifiche Tecniche */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px',
                    marginBottom: '32px'
                }}>
                    {/* Engine Specs */}
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid rgba(225, 6, 0, 0.3)'
                    }}>
                        <h3 style={{
                            color: '#e10600',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginBottom: '16px'
                        }}>
                            Motore
                        </h3>
                        {Object.entries(specs).map(([key, value]) => (
                            <div key={key} style={{ marginBottom: '8px' }}>
                                <span style={{ color: '#9ca3af', textTransform: 'capitalize' }}>
                                    {key}:{' '}
                                </span>
                                <span style={{ color: 'white', fontWeight: '500' }}>
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Hybrid System */}
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid rgba(225, 6, 0, 0.3)'
                    }}>
                        <h3 style={{
                            color: '#e10600',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginBottom: '16px'
                        }}>
                            Sistema Ibrido
                        </h3>
                        {Object.entries(hybrid).map(([key, value]) => (
                            <div key={key} style={{ marginBottom: '8px' }}>
                                <span style={{ color: '#9ca3af', textTransform: 'capitalize' }}>
                                    {key}:{' '}
                                </span>
                                <span style={{ color: 'white', fontWeight: '500' }}>
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Performance */}
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        padding: '24px',
                        border: '1px solid rgba(225, 6, 0, 0.3)'
                    }}>
                        <h3 style={{
                            color: '#e10600',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginBottom: '16px'
                        }}>
                            Performance
                        </h3>
                        {Object.entries(performance).map(([key, value]) => (
                            <div key={key} style={{ marginBottom: '8px' }}>
                                <span style={{ color: '#9ca3af', textTransform: 'capitalize' }}>
                                    {key}:{' '}
                                </span>
                                <span style={{ color: 'white', fontWeight: '500' }}>
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Details */}
                {(car.chassis || car.suspension_front || car.gearbox || car.weight) && (
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        padding: '24px',
                        marginBottom: '32px'
                    }}>
                        <h3 style={{
                            color: '#e10600',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginBottom: '16px'
                        }}>
                            Dettagli Tecnici
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '16px'
                        }}>
                            {car.chassis && (
                                <div>
                                    <span style={{ color: '#9ca3af' }}>Chassis: </span>
                                    <span style={{ color: 'white' }}>{car.chassis}</span>
                                </div>
                            )}
                            {car.suspension_front && (
                                <div>
                                    <span style={{ color: '#9ca3af' }}>Sospensioni Anteriori: </span>
                                    <span style={{ color: 'white' }}>{car.suspension_front}</span>
                                </div>
                            )}
                            {car.suspension_rear && (
                                <div>
                                    <span style={{ color: '#9ca3af' }}>Sospensioni Posteriori: </span>
                                    <span style={{ color: 'white' }}>{car.suspension_rear}</span>
                                </div>
                            )}
                            {car.gearbox && (
                                <div>
                                    <span style={{ color: '#9ca3af' }}>Cambio: </span>
                                    <span style={{ color: 'white' }}>{car.gearbox}</span>
                                </div>
                            )}
                            {car.weight && (
                                <div>
                                    <span style={{ color: '#9ca3af' }}>Peso: </span>
                                    <span style={{ color: 'white' }}>{car.weight} kg</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Drivers & Stats */}
                {(car.drivers || car.victories || car.podiums) && (
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        padding: '24px'
                    }}>
                        <h3 style={{
                            color: '#e10600',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginBottom: '16px'
                        }}>
                            Piloti e Statistiche
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '16px'
                        }}>
                            {car.drivers && (
                                <div>
                                    <span style={{ color: '#9ca3af' }}>Piloti: </span>
                                    <span style={{ color: 'white' }}>{car.drivers}</span>
                                </div>
                            )}
                            {car.victories && (
                                <div>
                                    <span style={{ color: '#9ca3af' }}>Vittorie: </span>
                                    <span style={{ color: 'white' }}>{car.victories}</span>
                                </div>
                            )}
                            {car.podiums && (
                                <div>
                                    <span style={{ color: '#9ca3af' }}>Podi: </span>
                                    <span style={{ color: 'white' }}>{car.podiums}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CarDetail
