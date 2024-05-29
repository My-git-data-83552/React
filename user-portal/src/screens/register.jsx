import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { register } from "../services/user";
import { useState } from "react";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");


  const navigate = useNavigate();

  const onRegister = async () => {
    if (firstName.length == 0) {
      toast.warn("Enter First Name");
    } else if (lastName.length == 0) {
      toast.warn("Enter Last Name");
    } else if (email.length == 0) {
      toast.warn("Enter Email ");
    } else if (password.length == 0) {
      toast.warn("Enter Password");
    } else if (rePassword != password) {
      toast.warn("Passwords don't match");
    } else {
      const result = await register(
        firstName,
        lastName,
        email,
        password,
        phone
      );
      
      if(result['status']=='success'){
      toast.success("Registration Successful");
      toast.warn("Log In");
      navigate("/login");
      }
      else{
        console.log(result['status'])
      }
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-7">
          <img
            src="https://images.pexels.com/photos/17180127/pexels-photo-17180127/free-photo-of-clouds-over-mountains-in-winter.jpeg"
            alt=""
            style={{ width: "1400px", height: "780px" }}
          />
        </div>

        <div className="col-4">
          <div className="form" style={{ textAlign: "left" }}>
            <h3 style={{ textAlign: "center" }}>Register</h3>

            <label htmlFor="">First Name</label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              className="form-control  transparent-input mb-3"
              placeholder="First Name"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            />
            <label htmlFor="">Last Name</label>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              className="form-control mb-3"
              placeholder="Last Name"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            />
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            />
            <label htmlFor="">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            />
            <label htmlFor="">Re-Enter Password</label>
            <input
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
              type="password"
              className="form-control"
              placeholder="Re-Enter Password"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            />
            <label htmlFor="">Phone Number</label>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="number"
              className="form-control"
              placeholder="##########"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            />
            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-warning me-3">Go Back</button>
              <button onClick={onRegister} className="btn btn-info">
                Save
              </button>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}
