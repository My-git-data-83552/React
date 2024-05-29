import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar.jsx";
import { addCartItems } from "../features/cartSlice.js";

function Bookings() {
  const dispatch = useDispatch();

  const addToWishlist = () => {
    dispatch(addCartItems())
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Bookings Page</h3>
      <NavBar />
      <div class="d-flex justify-content-evenly">
        <button onClick={addToWishlist} className="btn btn-primary mt-5">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export default Bookings;
