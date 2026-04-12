import React from 'react';
import './projectCard.css';

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="min-project-card" onClick={() => onClick && onClick(project)}>
      <div className="min-project-top">
        <div>
          <h3 className="min-project-title">{project.title}</h3>
          <p className="min-project-desc">{project.desc}</p>
        </div>
        {project.keyMetric && (
          <div className="min-project-metric">{project.keyMetric}</div>
        )}
      </div>

      {project.shortHighlights && project.shortHighlights.length > 0 && (
        <ul className="min-project-highlights">
          {project.shortHighlights.map((hl, idx) => (
            <li key={idx}>{hl}</li>
          ))}
        </ul>
      )}

      <div className="min-project-bottom">
        <div className="min-project-tags">
          {(project.tags || []).slice(0, 4).map((tag, idx) => (
            <span key={idx} className="min-project-tag">{tag}</span>
          ))}
        </div>
        <div className="min-project-cta">
          View Details <span>→</span>
        </div>
      </div>
    </div>
  );
}
