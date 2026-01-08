import React from 'react'

const Hero = () => {
    return (
        <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container animate-fade-in">
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: '1.5rem'
                }}>
                    Building digital <br />
                    <span className="gradient-text">experiences</span> that matter.
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    marginBottom: '2.5rem'
                }}>
                    I'm a Full Stack Developer passionate about creating clean, modern, and performant web applications.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#projects" className="btn btn-primary">View Work</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
                </div>
            </div>
        </section>
    )
}

export default Hero
