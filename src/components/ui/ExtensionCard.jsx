import Button from "./Button";

function ExtensionCard({ extension, onRemove, onToggle, className = "" }) {
  if (!extension) {
    return null;
  }
  const { id, logo, name, description, isActive } = extension;

  return (
    <div className={`extension ${className}`}>
      <div className="extension-info">
        <img className="extension-logo" src={logo} alt={`${name} logo`} />

        <div>
          <h2 className="extension-title">{name}</h2>
          <p className="extension-text">{description}</p>
        </div>
      </div>
      <div className="extension-actions">
        <Button
          className="remove-btn"
          aria-label={`Remove ${name}`}
          onClick={() => onRemove(id)}
        >
          Remove
        </Button>
        <div className="focus-state">
          <Button
            className={`toggle-status ${isActive ? "active" : ""}`}
            aria-label={isActive ? `Deactivate ${name}` : `Activate ${name}`}
            onClick={() => onToggle(id)}
          >
            <span></span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExtensionCard;
