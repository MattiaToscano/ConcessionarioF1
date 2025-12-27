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
                    {/* Immagine dell'auto con animazione*/}
                    <div className="mb-8 transition-all duration-500 ease-in-out">
                        <img
                            src={cars[currentIndex].image}
                            alt={cars[currentIndex].name}
                            className="mx-auto rounded-lg shadow-2xl max-w-2xl w-full transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Info auto in card style*/}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mx-auto max-w-lg mb-8 shadow-xl">
                        <h3 className="text-f1-red text-3xl font-bold mb-2">
                            {cars[currentIndex].name}
                        </h3>
                        <p className="text-white text-xl mb-2">
                            {cars[currentIndex].team} • {cars[currentIndex].year}
                        </p>
                        <p className="text-f1-red text-2xl font-bold mb-8">
                            {cars[currentIndex].price}
                        </p>
                    </div>

                    {/* Indicatori */}
                    <div className="flex justify-center space-x-8 mb-8">
                        {cars.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-10 h-10 rounded-full transition-all duration-200 border-4 ${index === currentIndex
                                        ? 'bg-f1-red border-f1-red scale-110 shadow-2xl'
                                        : 'bg-gray-300 border-gray-500 hover:bg-f1-red hover:border-f1-red hover:scale-105'
                                    }`}
                            />
                        ))}
                    </div>



                    {/* Pulsanti */}
                    <div className="flex justify-center space-x-6">
                        <button
                            onClick={prevCar}
                            className="bg-f1-red text-white px-8 py-4 rounded-xl font-bold  hover:bg-red-700 hover:shadow-lg transform hover:scale-105   transition-all duration-200 flex items-center space-x-2">

                            <span>←</span>
                            <span>Precedente</span>
                        </button>
                        <button
                            onClick={nextCar}
                            className="bg-f1-red text-white px-8 py-4 rounded-xl font-bold 
               hover:bg-red-700 hover:shadow-lg transform hover:scale-105 
               transition-all duration-200 flex items-center space-x-2">


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