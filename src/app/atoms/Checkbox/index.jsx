import React from "react";

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div key={id} className="flex items-center">
      <input
        type="checkbox"
        id={id}
        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="ml-2 text-sm">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
