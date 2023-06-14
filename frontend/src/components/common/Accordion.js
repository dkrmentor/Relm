import React, { useState } from "react";

const Accordion = ({ title, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <h2 onClick={handleToggle}>{title}</h2>
      {isOpen && (
        <select name={value} value={value} onChange={onChange} required>
     
          <option value="Undergraduate">Undergraduate</option>
          <option value="Graduate">Graduate</option>
          <option value="Masters">Masters</option>
          <option value="Doctorate">Doctorate</option>
          <option value="Greek Associations">Greek Associations</option>
          <option value="Foreign Exchange">Foreign Exchange</option>
        </select>
      )}
    </div>
  );
};

export default Accordion;
