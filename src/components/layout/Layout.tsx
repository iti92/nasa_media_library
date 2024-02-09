import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="mode-switch">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;

