import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { login } from "../services/user";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onRegister = () => {
    navigate("/register");
  };

  const onLogin = async () => {
    if (email.length == 0) {
      toast.warn("Email taak bey");
    } else if (password.length == 0) {
      toast.warn("Password kon takel?");
    } else {
      const result = await login(email, password);
      if (result["status"] == "success") {
        const data=result['data']
        sessionStorage["name"] = data['name'];
        sessionStorage["token"] = data["token"];

        toast.success("Login Successfully!!!");
        navigate("/home");
      } else {
        toast.error(result["status"]);
      }
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-7">
          <img
            src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            style={{ width: "1400px", height: "780px" }}
          />
        </div>
        <div className="container col-3" style={{ marginTop: "200px" }}>
          <h3 style={{ fontWeight: "bold", color: "honeydew" }}>
            Welcome To AIRBNB
          </h3>
          <div style={{ textAlign: "left" }}>
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control mb-3"
              placeholder="email@haha.com"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            />
            <label htmlFor="">password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              placeholder="password"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            />
          </div>
          <div className=" mt-4">
            <button onClick={onLogin} className="btn btn-success me-3">
              Log In
            </button>
            <button onClick={onRegister} className="btn btn-light">
              Register
            </button>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
