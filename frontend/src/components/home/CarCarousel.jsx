import { useState } from 'react'

const CarCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const cars = [
        {
            id: 1,
            name: "Ferrari SF-25",
            year: "2023",
            team: "Scuderia Ferrari",
            price: "€2.500.000",
            image: "https://via.placeholder.com/600x300/dc2626/ffffff?text=Ferrari+SF-23",
        },
        {
            id: 2,
            name: "Red Bull RB19",
            year: "2023",
            team: "Red Bull Racing",
            price: "€3.000.000",
            image: "https://via.placeholder.com/600x300/1e40af/ffffff?text=Red+Bull+RB19",
        },
        {
            id: 3,
            name: "Mercedes W14",
            year: "2023",
            team: "Mercedes-AMG F1",
            price: "€2.800.000",
            image: "https://via.placeholder.com/600x300/059669/ffffff?text=Mercedes+W14",
        }
    ]

    const nextCar = () => {
        setCurrentIndex((prev) => (prev + 1) % cars.length)
    }

    const prevCar = () => {
        setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length)
    }

    return (
        <div className="bg-gray-900 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Ecco i nostri prodotti di punta
                </h2>

                <div className="text-center">
                    {/* Immagine dell'auto */}
                    <div className="mb-8">
                        <img
                            src={cars[currentIndex].image}
                            alt={cars[currentIndex].name}
                            className="mx-auto rounded-lg shadow-2xl max-w-2xl w-full"
                        />
                    </div>

                    {/* Info auto */}
                    <h3 className="text-f1-red text-3xl font-bold mb-2">
                        {cars[currentIndex].name}
                    </h3>
                    <p className="text-white text-xl mb-2">
                        {cars[currentIndex].team} • {cars[currentIndex].year}
                    </p>
                    <p className="text-f1-red text-2xl font-bold mb-8">
                        {cars[currentIndex].price}
                    </p>

                    {/* Pulsanti */}
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={prevCar}
                            className="bg-f1-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700">
                            ← Precedente
                        </button>
                        <button
                            onClick={nextCar}
                            className="bg-f1-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700">
                            Successiva →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCarousel