import React from 'react'

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store built with Next.js, Stripe, and Tailwind CSS.",
        tags: ["Next.js", "Stripe", "Tailwind"],
        github: "https://github.com",
        demo: "https://demo.com"
    },
    {
        title: "Task Management App",
        description: "Real-time collaboration tool for teams using React, Firebase, and Redux.",
        tags: ["React", "Firebase", "Redux"],
        github: "https://github.com",
        demo: "https://demo.com"
    },
    {
        title: "AI Dashboard",
        description: "Analytics dashboard visualizing AI model performance with D3.js.",
        tags: ["React", "D3.js", "Python"],
        github: "https://github.com",
        demo: "https://demo.com"
    }
]

const ProjectCard = ({ project }) => (
    <div style={{
        background: 'var(--bg-card)',
        padding: '2rem',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {project.tags.map(tag => (
                <span key={tag} style={{
                    fontSize: '0.875rem',
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '100px',
                    color: 'var(--text-secondary)'
                }}>
                    {tag}
                </span>
            ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--text-primary)',
                fontWeight: 500,
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
            }}>GitHub</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--accent-primary)',
                fontWeight: 500
            }}>Live Demo &rarr;</a>
        </div>
    </div>
)

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '3rem',
                    textAlign: 'center'
                }}>
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
