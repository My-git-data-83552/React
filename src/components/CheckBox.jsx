import { useState } from "react";

function CheckBox(title, onChange) {
  const [checked,setChecked] = useState(false)

  return (
    <div className="form-check">
      <input
        onChange={(e) => {
          console.log(e.target.checked);
          setChecked(e.target.checked);
          onChange(e.target.checked);
        }}
        className="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
      />
      <label className="form-check-label" for="flexCheckDefault">
        {title}
      </label>
    </div>
  );
}
export default CheckBox;
