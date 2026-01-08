import React from 'react'

const Header = () => {
    return (
        <header style={{
            height: 'var(--header-height)',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            position: 'sticky',
            top: 0,
            background: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 100
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    Portfolio<span className="gradient-text">.</span>
                </div>
                <nav>
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        <li><a href="#projects" style={{ color: 'var(--text-secondary)' }}>Projects</a></li>
                        <li><a href="#contact" style={{ color: 'var(--text-secondary)' }}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
