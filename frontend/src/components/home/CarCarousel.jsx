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
    return (
        <div className="bg-gray-900 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Ecco i nostri prodotti di punta
                </h2>

                {/* {Quì inseriremo le auto} */}
                <div className="text-center">
                    <p className="text-f1-red text-xl font-bold">
                        {cars[currentIndex].name} - {cars[currentIndex].price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CarCarousel