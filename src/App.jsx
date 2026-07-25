import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

import data from "./data/data.json";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [filter, setFilter] = useState("All");
  const [extensions, setExtensions] = useState(data);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleExtensionRemoval = (id) => {
    setExtensions((prev) => prev.filter((extension) => extension.id !== id));
  };

  const handleIsActiveToggle = (id) => {
    setExtensions((prev) =>
      prev.map((extension) =>
        extension.id === id
          ? { ...extension, isActive: !extension.isActive }
          : extension,
      ),
    );
  };

  const getFilteredExtensions = () => {
    switch (filter) {
      case "Active":
        return extensions.filter((extension) => extension.isActive);

      case "Inactive":
        return extensions.filter((extension) => !extension.isActive);

      default:
        return extensions;
    }
  };
  const filteredExtensions = getFilteredExtensions();

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="wrapper">
      <Header isDarkMode={isDarkMode} onToggleTheme={handleThemeToggle} />
      <Main
        extensions={filteredExtensions}
        onRemove={handleExtensionRemoval}
        onToggle={handleIsActiveToggle}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
