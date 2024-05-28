import { useNavigate } from "react-router";
import NavBar from "../components/NavBar.jsx";
import propertiesData from "../dummy/properties.json";
import { useState } from "react";
function Property() {
  const [properties, setProperties] = useState(propertiesData);
  const navigate = useNavigate();

  const addProperty = () => {
    navigate("/addProperty");
  };

  const onDelete=(index)=>{
    properties.splice(index,1)
    setProperties([...properties])
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Property Page</h3>
      <NavBar />
      <button onClick={addProperty} className="btn btn-primary mt-5 me-5">
        Add Property
      </button>
      <hr />
      <div>
        <table class="table table-light table-sm">
          <thead class="thead-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Address</th>
              <th>OwnerName</th>
              <th>ContactNo</th>
              <th>Rent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {properties.map((p, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{p["title"]}</td>
                  <td>{p["address"]}</td>
                  <td>{p["ownerName"]}</td>
                  <td>{p["contactNo"]}</td>
                  <td>{p["rent"]}</td>
                  <td>
                    <button onClick={onDelete} className="btn btn-danger bt-sm">delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Property;
