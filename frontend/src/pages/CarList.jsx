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






}