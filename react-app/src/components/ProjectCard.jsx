import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projectCard.css';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="min-project-card" onClick={() => navigate('/contact')}>
      <div className="min-project-top">
        <h3 className="min-project-title">{project.title}</h3>
        <p className="min-project-desc">{project.desc}</p>
        {project.dataset && (
          <p className="min-project-dataset">
            <i className="fas fa-database"></i> Dataset:{" "}
            <a
              href={project.datasetUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="min-project-dataset-link"
            >
              {project.dataset}
            </a>
          </p>
        )}
      </div>

      <div className="min-project-bottom">
        <div className="min-project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="min-project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="min-project-cta">
          Request Access <span>→</span>
        </div>
      </div>
    </div>
  );
}
