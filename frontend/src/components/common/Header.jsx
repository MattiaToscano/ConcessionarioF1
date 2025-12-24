import React from 'react'

const Header = () => {
    return (
        <header className="bg-f1-dark p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-f1-red text-2xl font-bold"> Concessionario F1 </h1>

                <nav className="flex space-x-6">
                    <a href="/" className="text-white hover:text-f1-red">Home</a>
                    <a href="/auto" className="text-white hover:text-f1-red">Auto</a>
                    <a href="/contatti" className="text-white hover:text-f1-red">Contatti</a>
                    <button className="bg-f1-red text-white px-4 py-2 rounded">Login</button>
                </nav>
            </div>
        </header>
    )
}

export default Header 