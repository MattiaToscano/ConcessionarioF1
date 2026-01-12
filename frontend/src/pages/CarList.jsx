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













}