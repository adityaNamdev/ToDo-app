import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { BsListCheck } from "react-icons/bs";
function App() {
  const [darkMode, setDarkMode] = useState(false);


  const handleCheckboxChange = () => {
    setDarkMode(!darkMode);
  };

  return (
<div className={`${darkMode ? 'bg' : null}`}>
    <div className={`container ${darkMode ? 'dark-mode ' : null}`}>
      <h1 className="heading fw-bolder">
        <BsListCheck /> To Do App
      </h1>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={darkMode}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {darkMode ? "Dark Mode" : "Light Mode"}
        </label>
      </div>
      <Input darkMode={darkMode} />
    </div>
    </div>
  );
}

export default App;
