import { useState } from "react";
import Button from "../ui/Button";
import ExtensionCard from "../ui/ExtensionCard";

function Main({ extensions, onRemove, onToggle, setFilter, className = "" }) {
  const [currentFilter, setCurrentFilter] = useState("All");

  const filterButtons = ["All", "Active", "Inactive"];

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    setFilter(filter);
  };

  return (
    <main className={className}>
      <div className="main-heading">
        <h1 className="title">Extensions List</h1>
        <div className="filter-buttons">
          {filterButtons.map((btn) => (
            <div key={btn} className="focus-state">
              <Button
                className={`filter-btn ${currentFilter === btn ? "current" : ""}`}
                onClick={() => handleFilterChange(btn)}
              >
                {btn}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="extensions-grid">
        {extensions &&
          extensions.map((extension) => (
            <ExtensionCard
              key={extension.id}
              extension={extension}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
      </div>
    </main>
  );
}

export default Main;
