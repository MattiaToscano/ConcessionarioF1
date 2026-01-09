import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            {/* Header stile Ferrari */}
            <header style={{
                backgroundColor: '#000000',
                color: 'white',
                position: 'sticky',
                top: 0,
                zIndex: 50,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                overflowX: 'hidden',
                minHeight: '80px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    height: '80px',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    paddingTop: '20px',
                    paddingBottom: '20px'
                }}>
                    {/* Menu Hamburger a sinistra */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            color: 'white',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'color 0.2s',
                            zIndex: 20,
                            position: 'relative',
                            padding: '12px'
                        }}
                        onMouseOver={(e) => e.target.style.color = '#e10600'}
                        onMouseOut={(e) => e.target.style.color = 'white'}
                    >
                        <Bars3Icon className="h-7 w-7" />
                        <span style={{
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            letterSpacing: '0.1em'
                        }}>MENU</span>
                    </button>

                    {/* Logo centrale con messaggio benvenuto */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        pointerEvents: 'none',
                        textAlign: 'center'
                    }}>
                        <h1 style={{
                            color: '#e10600',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            letterSpacing: '0.05em',
                            paddingTop: '4px',
                            paddingBottom: '4px',
                            whiteSpace: 'nowrap'
                        }}>
                            🏎️ Benvenuto nel Concessionario dei tuoi sogni
                        </h1>
                        <p style={{ 
                            color: '#9ca3af', 
                            fontSize: '0.875rem',
                            marginTop: '4px'
                        }}>
                           
                        </p>
                    </div>

                    {/* Login a destra */}
                    <span
                        onClick={() => console.log('Login clicked')}
                        className="login-button"
                        style={{
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            letterSpacing: '0.1em',
                            color: 'white',
                            transition: 'color 0.2s',
                            zIndex: 20,
                            position: 'relative',
                            cursor: 'pointer',
                            userSelect: 'none',
                            padding: '12px'
                        }}
                        onMouseOver={(e) => e.target.style.color = '#e10600'}
                        onMouseOut={(e) => e.target.style.color = 'white'}
                    >
                        ACCEDI
                    </span>
                </div>
            </header>

            {/* Sidebar Menu */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: '288px',
                backgroundColor: '#000000',
                color: 'white',
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.3s ease',
                zIndex: 50,
                overflowY: 'auto'
            }}>
                <div style={{ padding: '24px' }}>
                    {/* Header del menu */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                        <h2 style={{ color: '#e10600', fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>MENU</h2>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
                            onMouseOver={(e) => e.target.style.color = '#e10600'}
                            onMouseOut={(e) => e.target.style.color = 'white'}
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <a href="/" style={{
                            display: 'block',
                            fontSize: '1.125rem',
                            fontWeight: '500',
                            letterSpacing: '0.1em',
                            color: 'white',
                            textDecoration: 'none',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            borderBottom: '1px solid #374151',
                            transition: 'color 0.2s'
                        }}
                            onMouseOver={(e) => e.target.style.color = '#e10600'}
                            onMouseOut={(e) => e.target.style.color = 'white'}>
                            HOME
                        </a>
                        <a href="/auto" style={{
                            display: 'block',
                            fontSize: '1.125rem',
                            fontWeight: '500',
                            letterSpacing: '0.1em',
                            color: 'white',
                            textDecoration: 'none',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            borderBottom: '1px solid #374151',
                            transition: 'color 0.2s'
                        }}
                            onMouseOver={(e) => e.target.style.color = '#e10600'}
                            onMouseOut={(e) => e.target.style.color = 'white'}>
                            SPORTS CARS
                        </a>
                        <a href="/racing" style={{
                            display: 'block',
                            fontSize: '1.125rem',
                            fontWeight: '500',
                            letterSpacing: '0.1em',
                            color: 'white',
                            textDecoration: 'none',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            borderBottom: '1px solid #374151',
                            transition: 'color 0.2s'
                        }}
                            onMouseOver={(e) => e.target.style.color = '#e10600'}
                            onMouseOut={(e) => e.target.style.color = 'white'}>
                            RACING
                        </a>
                        <a href="/collezioni" style={{
                            display: 'block',
                            fontSize: '1.125rem',
                            fontWeight: '500',
                            letterSpacing: '0.1em',
                            color: 'white',
                            textDecoration: 'none',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            borderBottom: '1px solid #374151',
                            transition: 'color 0.2s'
                        }}
                            onMouseOver={(e) => e.target.style.color = '#e10600'}
                            onMouseOut={(e) => e.target.style.color = 'white'}>
                            COLLEZIONI
                        </a>
                        <a href="/experiences" style={{
                            display: 'block',
                            fontSize: '1.125rem',
                            fontWeight: '500',
                            letterSpacing: '0.1em',
                            color: 'white',
                            textDecoration: 'none',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            borderBottom: '1px solid #374151',
                            transition: 'color 0.2s'
                        }}
                            onMouseOver={(e) => e.target.style.color = '#e10600'}
                            onMouseOut={(e) => e.target.style.color = 'white'}>
                            EXPERIENCES
                        </a>
                        <a href="/contatti" style={{
                            display: 'block',
                            fontSize: '1.125rem',
                            fontWeight: '500',
                            letterSpacing: '0.1em',
                            color: 'white',
                            textDecoration: 'none',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            borderBottom: '1px solid #374151',
                            transition: 'color 0.2s'
                        }}
                            onMouseOver={(e) => e.target.style.color = '#e10600'}
                            onMouseOut={(e) => e.target.style.color = 'white'}>
                            CONTATTI
                        </a>
                    </nav>
                </div>
            </div>

            {/* Overlay quando il menu è aperto */}
            {isMenuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 40
                    }}
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    )
}

export default Header