const Footer = () => {
    return (
        <footer className="bg-f1-dark text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo e descrizione */}
                    <div>
                        <h3 className="text-f1-red text-2xl font-bold mb-4">
                            Concessionario F1
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Le migliori auto di Formula 1 per i veri appassionati.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Link Utili</h4>
                        <p className="text-gray-300">Altri Links in arrivo...</p>
                    </div>

                    {/* Contatti */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Contatti</h4>
                        <p className="text-gray-300">Contatti in arrivo...</p>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Seguici</h4>
                        <p className="text-gray-300">Social in arrivo...</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer