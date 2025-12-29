const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#15151e',
            color: 'white',
            paddingTop: '48px',
            paddingBottom: '48px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                paddingLeft: '16px',
                paddingRight: '16px'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '32px',
                    '@media (min-width: 768px)': {
                        gridTemplateColumns: 'repeat(4, 1fr)'
                    }
                }}>

                    {/* Logo e descrizione */}
                    <div>
                        <h3 style={{
                            color: '#e10600',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginBottom: '16px'
                        }}>
                            Concessionario F1
                        </h3>
                        <p style={{
                            color: '#d1d5db',
                            marginBottom: '16px'
                        }}>
                            Le migliori auto di Formula 1 per i veri appassionati.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{
                            color: 'white',
                            fontWeight: 'bold',
                            marginBottom: '16px'
                        }}>Link Utili</h4>
                        <p style={{
                            color: '#d1d5db'
                        }}>Altri Links in arrivo...</p>
                    </div>

                    {/* Contatti */}
                    <div>
                        <h4 style={{
                            color: 'white',
                            fontWeight: 'bold',
                            marginBottom: '16px'
                        }}>Contatti</h4>
                        <p style={{
                            color: '#d1d5db'
                        }}>Contatti in arrivo...</p>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 style={{
                            color: 'white',
                            fontWeight: 'bold',
                            marginBottom: '16px'
                        }}>Seguici</h4>
                        <p style={{
                            color: '#d1d5db'
                        }}>Social in arrivo...</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer