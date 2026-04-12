import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// ── Animated neural-network background canvas ──
function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2.5 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.pulse += 0.02;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        nodes.forEach(m => {
          const dx = n.x - m.x, dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(34,197,94,${0.08 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });

        const glow = Math.sin(n.pulse) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,197,94,${0.3 + glow * 0.4})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="pd-neural-canvas" />;
}

// ── Dataset cards ──
function DatasetCards({ datasets }) {
  return (
    <div className="pd-datasets">
      {datasets.map((ds, i) => (
        <a
          key={i}
          href={ds.url}
          target="_blank"
          rel="noreferrer"
          className="pd-dataset-card"
        >
          <div className="pd-ds-top">
            <span className="pd-ds-icon"><i className="fab fa-kaggle" /></span>
            <span className="pd-ds-source">{ds.source}</span>
            <span className="pd-ds-ext-icon"><i className="fas fa-external-link-alt" /></span>
          </div>
          <div className="pd-ds-label">{ds.label}</div>
          <div className="pd-ds-meta">
            <span><i className="fas fa-tags" /> {ds.classes}</span>
            <span><i className="fas fa-cut" /> {ds.split}</span>
            <span><i className="fas fa-image" /> {ds.format}</span>
          </div>
        </a>
      ))}
    </div>
  );
}


// ── Main modal component ──
export default function ProjectDetailModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, [onClose]);

  if (!project) return null;

  const detail = project.detail || {};
  const techStack = detail.techStack || project.tags || [];
  const architecture = detail.architecture || [];
  const datasets = detail.datasets || [];

  return (
    <div className="pd-overlay" ref={overlayRef} onClick={(e) => e.target === overlayRef.current && onClose()}>
      <div className="pd-modal">

        {/* ── Neural animation header ── */}
        <div className="pd-header">
          <NeuralCanvas />
          <div className="pd-header-content">
            <div className="pd-badge">
              <i className="fas fa-brain" /> AI · Deep Learning · Medical Imaging
            </div>
            <h2 className="pd-title">{project.title}</h2>
            <p className="pd-subtitle">{project.desc}</p>
            <div className="pd-header-actions">
              {project.requestAccess ? (
                <button
                  className="btn btn-c pd-github-btn"
                  onClick={() => { onClose(); navigate('/contact'); }}
                >
                  <i className="fab fa-github" /> Request Source Access →
                </button>
              ) : (
                <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-c pd-github-btn">
                  <i className="fab fa-github" /> View on GitHub
                </a>
              )}
              {detail.status && (
                <span className="pd-status">
                  <span className="pd-status-dot" /> {detail.status}
                </span>
              )}
            </div>
          </div>
          <button className="pd-close" onClick={onClose} aria-label="Close">
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="pd-body">


          <div className="pd-cols">

            {/* ── Left column ── */}
            <div className="pd-left">

              {/* Architecture flow */}
              {architecture.length > 0 && (
                <div className="pd-section">
                  <h3 className="pd-sec-title">
                    <i className="fas fa-project-diagram" /> Model Architecture
                  </h3>
                  <div className="pd-arch">
                    {architecture.map((layer, i) => (
                      <div key={i} className="pd-arch-row">
                        <div
                          className="pd-arch-block"
                          style={{ '--accent': layer.color || 'var(--cyan)' }}
                        >
                          <span className="pd-arch-name">{layer.name}</span>
                        </div>
                        {i < architecture.length - 1 && (
                          <div className="pd-arch-arrow">
                            <i className="fas fa-arrow-down" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* ── Right column ── */}
            <div className="pd-right">

              {/* Dataset cards */}
              {datasets.length > 0 && (
                <div className="pd-section">
                  <h3 className="pd-sec-title">
                    <i className="fas fa-database" /> Datasets
                  </h3>
                  <DatasetCards datasets={datasets} />
                </div>
              )}


              {/* Tech stack */}
              {techStack.length > 0 && (
                <div className="pd-section">
                  <h3 className="pd-sec-title">
                    <i className="fas fa-layer-group" /> Tech Stack
                  </h3>
                  <div className="pd-stack">
                    {techStack.map((t, i) => (
                      <span
                        key={t}
                        className="pd-stack-tag"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
