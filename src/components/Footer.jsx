import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" style={{
            padding: '4rem 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            marginTop: '4rem'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="https://github.com/SayoojSb" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', hover: { color: 'var(--text-primary)' } }}>GitHub</a>
                    <a href="https://www.linkedin.com/in/sayooj-s-b-01a712308/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', hover: { color: 'var(--text-primary)' } }}>LinkedIn</a>
                    <a href="mailto:sayoojsb104@gmail.com" style={{ color: 'var(--text-secondary)', hover: { color: 'var(--text-primary)' } }}>Email</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
