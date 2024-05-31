import { useNavigate } from "react-router";
import NavBar from "../components/NavBar.jsx";
import propertiesData from "../dummy/properties.json";
import { useEffect, useState } from "react";
import { getProperties } from "../services/property.js";


function Property() {
  const [properties, setProperties] = useState(propertiesData);
  const navigate = useNavigate();

  const addProperty = () => {
    navigate("/addProperty");
  };

  const onDelete = (index) => {
    properties.splice(index, 1);
    setProperties([...properties]);
  };

  const loadProperties = async () => {
    const result = await getProperties();
    if (result['status'] == 'success') {
      setProperties(result["data"]);
    }
  };
  useEffect(() => {
    loadProperties()
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Property Page</h3>
      <NavBar />
      <button onClick={addProperty} className="btn btn-primary mt-5 me-5">
        Add Property
      </button>
      <hr />
      <div>
        <table className="table table-light table-sm">
          <thead className="thead-dark">
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
          <tbody className="table-group-divider">
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
                    <button onClick={onDelete} className="btn btn-danger bt-sm">
                      delete
                    </button>
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
