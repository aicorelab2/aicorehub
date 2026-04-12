import { useNavigate } from 'react-router-dom';
import { BTN_CONFIG } from '../data';

function CardButton({ item, isAlt }) {
  const navigate = useNavigate();
  if (item.type === 'colab') {
    return (
      <a href={item.link} target="_blank" rel="noreferrer">
        <img
          src="https://colab.research.google.com/assets/colab-badge.svg"
          alt="Open In Colab"
          className="badge"
        />
      </a>
    );
  }

  // requestAccess items → navigate to Contact instead of GitHub
  if (item.requestAccess) {
    const cfg = BTN_CONFIG[item.type];
    const cls = isAlt ? 'btn-p' : cfg.cls;
    const icon = cfg.icon;
    return (
      <button
        className={`btn ${cls}`}
        onClick={(e) => { e.stopPropagation(); navigate('/contact'); }}
      >
        <i className={icon}></i> Request Source Access →
      </button>
    );
  }

  const cfg = BTN_CONFIG[item.type];
  const cls = isAlt ? 'btn-p' : cfg.cls;
  const icon = isAlt && item.type === 'kaggle' ? 'fab fa-kaggle' : cfg.icon;
  return (
    <a href={item.link} target="_blank" rel="noreferrer" className={`btn ${cls}`}
       onClick={(e) => e.stopPropagation()}>
      <i className={icon}></i> {cfg.label}
    </a>
  );
}

export default function Card({ item, index, onDetailClick }) {
  const isAlt = index % 2 !== 0;
  const cardClass = [
    isAlt ? 'card p' : 'card',
    item.clickable ? 'card-clickable' : '',
  ].join(' ').trim();

  const handleClick = () => {
    if (item.clickable && onDetailClick) onDetailClick(item);
  };

  return (
    <div className={cardClass} onClick={handleClick} role={item.clickable ? 'button' : undefined}>
      {item.clickable && (
        <div className="card-detail-hint">
          <i className="fas fa-expand-alt" /> View Details
        </div>
      )}
      <h3 className="card-title" style={isAlt ? { color: 'var(--purple)' } : {}}>
        {item.title}
      </h3>
      <p className="card-desc">{item.desc}</p>
      {item.tags && (
        <div className="tags">
          {item.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}
      <CardButton item={item} isAlt={isAlt} />
    </div>
  );
}
