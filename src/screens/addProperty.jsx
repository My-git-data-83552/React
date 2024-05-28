import { useState } from "react";
import CheckBox from "../components/CheckBox.jsx";
import NavBar from "../components/NavBar.jsx";

function AddProperty() {
  const [lakeView, setLakeView] = useState(false);
  const [tv, setTv] = useState(false);
  const [ac, setAc] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [miniBar, setMiniBar] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [parking, setParking] = useState(false);
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>AddProperty Page</h3>
      <NavBar />

      <div class="d-flex justify-content-between">
        <div className="col-5 mb-3">
          <label htmlFor="">Property Title</label>
          <input
            className="form-control"
            type="text"
            placeholder="Property Title"
          />
        </div>
        <div className="col-3 mb-3">
          <label htmlFor="">Owner Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Owner Name"
          />
        </div>
        <div className="col-3 mb-3">
          <label htmlFor="">Contact No</label>
          <input
            className="form-control"
            type="text"
            placeholder="Contact No"
          />
        </div>
      </div>

      <div class="d-flex justify-content-around">
        <div className="col-5 mb-3">
          <label htmlFor="">Address</label>
          <textarea
            className="form-control"
            type="text"
            placeholder="Address"
          />
        </div>
        <div className="col-5 mb-3">
          <label htmlFor="">Details</label>
          <textarea
            className="form-control"
            type="text"
            placeholder="description"
          />
        </div>
      </div>

      <div class="d-flex justify-content-evenly">
        <div>
          <CheckBox
            onChange={(status) => setLakeView(status)}
            title="LakeView"
          />
          Sure, here is the text where `lakeView` is replaced with `tv`, `ac`,
          `wifi`, `miniBar`, `breakfast`, and `parking`: ```javascript
          <CheckBox onChange={(status) => setTv(status)} title="TV" />
          <CheckBox onChange={(status) => setAc(status)} title="AC" />
          <CheckBox onChange={(status) => setWifi(status)} title="WiFi" />
          <CheckBox
            onChange={(status) => setMiniBar(status)}
            title="Mini Bar"
          />
          <CheckBox
            onChange={(status) => setBreakfast(status)}
            title="Breakfast"
          />
          <CheckBox onChange={(status) => setParking(status)} title="Parking" />
          
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
