import React from 'react'

const projects = [
    {
        title: "OSCT - Open Source Contribution Tracker",
        description: "A MERN platform that helps beginners learn pull requests, find beginner-friendly GitHub issues, and track open-source contributions.",
        tags: ["React", "Node.js", "Express", "MongoDB", "GitHub API", "JWT", "OAuth", "Tailwind CSS"],
        github: "https://github.com/SayoojSb/osct-frontend.git",
        demo: "https://open-source-contribution-tracker.netlify.app/"
    },
    {
        title: "AI GitHub Portfolio Reviewer",
        description: "AI-powered app that analyzes GitHub profiles and generates portfolio feedback using FastAPI, Streamlit, LangGraph, and LLMs.",
        tags: ["Python", "FastAPI", "Streamlit", "LangGraph", "LangChain", "Groq", "GitHub API", "LLM"],
        github: "https://github.com/SayoojSb/student-github-reviewer.git",
        demo: "https://student-github-reviewer-ui-04ew.onrender.com/"
    },
    {
        title: "Intelligent Learning Analytics & AI Study Coach",
        description: "An AI-powered platform that predicts academic risk and provides personalized study plans with RAG-based resource recommendations.",
        tags: ["Python", "Streamlit", "Scikit-Learn", "LangChain", "LangGraph", "FAISS", "RAG", "Machine Learning"],
        github: "https://github.com/SayoojSb/intelligent-learning-analytics.git",
        demo: "https://intelligent-learning-analytics.streamlit.app/"
    },
    {
        title: "AetherLearn - Inclusive Flashcard Learning Platform",
        description: "A React-based flashcard platform where students create, review, and manage visual flashcards for smarter learning.",
        tags: ["React", "Vite", "React Router", "CSS", "LocalStorage", "JavaScript"],
        github: "https://github.com/SayoojSb/AetherLearn.git",
        demo: "https://aether-learn.vercel.app/"
    },
    {
        title: "Realtime AI Voice Agent",
        description: "Built a realtime multimodal AI voice agent for discovery, lead qualification, and knowledge-base Q&A using LiveKit Agents. Engineered synchronized visual orchestration with LLM tool calls and LiveKit data channels to render dynamic UI updates during conversations. Implemented automated post-call lead extraction, generating structured JSON summaries from transcripts for downstream workflow automation.",
        tags: ["Python", "Next.js", "React", "TypeScript", "LiveKit Agents", "Groq", "Deepgram", "Cartesia", "WebRTC"],
        role: "AI/ML Engineer",
        github: "https://github.com/SayoojSb/realtime-ai-voice-agent",
        demo: null
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
        {project.role && (
            <p style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontWeight: 500 }}>{project.role}</p>
        )}
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
            {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                    color: 'var(--accent-primary)',
                    fontWeight: 500
                }}>Live Demo &rarr;</a>
            )}
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
