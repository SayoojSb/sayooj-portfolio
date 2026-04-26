import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="container animate-fade-in">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h1 style={{
                                fontSize: 'clamp(3rem, 8vw, 6rem)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                marginBottom: '1.5rem'
                            }}>
                                Hello, I'm <br />
                                <span className="gradient-text">Sayooj S B</span>
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
                                <a href="https://github.com/SayoojSb" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img 
                                src="/sayooj-photo.jpg" 
                                alt="Sayooj S B" 
                                style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    borderRadius: '12px',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

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
                </div>
            </section>
        </>
    )
}

export default Hero
