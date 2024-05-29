// import image1 from 'image1.webp'

export default function Home() {

  const loadProperties=()=>{
    
  }

  return (
    <div className="bg-dark" style={{ height: "10000px" }}>
      <div className="row">
        <div className="col-1"></div>

        <div className="col-10">
          <h1>Home</h1>
          <div
            className="card text-bg-dark"
            style={{ width: "400px", height: "200px" }}
          >
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-832355501498041527/original/551de2c9-6981-4222-b21d-75dd8792bd2d.jpeg?im_w=960"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay">
              <h5 className="card-title">
                Schloss Wimsbach, Austria - South Suite
              </h5>
              <p className="card-text">
                Wimsbach Castle is in a scenically and culturally exceptional
                location.
              </p>
              <p className="card-text">
                <small>Rent : 2700/-</small>
              </p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
