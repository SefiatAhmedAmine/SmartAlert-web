import React, { useEffect, useRef } from "react";
import useCustomSelect from "../components/hooks/useCustomSelect";

const SelectComponent = ({ options, placeholder, open, customClass, onChange }) => {
  const {
    isOpen,
    selectedOption,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectOption,
  } = useCustomSelect(options, open);

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click is outside the dropdown, close the dropdown
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Add event listener when the component mounts
      document.addEventListener("click", handleClickOutside);
    }

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const dropdownClassName = `nice-select ${customClass || ""} ${isOpen ? "open" : ""}`;

  const handleOptionClick = (option) => {
    selectOption(option);
    if (onChange) {
      onChange({ target: { value: option } }); // Trigger the onChange event
    }
    closeDropdown(); // Close the dropdown after selection
  };

  return (
    <div
      className={dropdownClassName}
      tabIndex="0"
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <span className="current">
        {selectedOption || placeholder}
      </span>
      <ul className="list">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option${selectedOption === option ? " selected focus" : ""}`}
            data-value={index}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectComponent;
