import qrcode from "../images/image-qr-code.png";

function App() {
  return (
    <>
      <div className="card-wrapper">
        <div className="img">
          <img src={qrcode} alt="" />
        </div>
        <div className="theme">
          <h1>Improve your front-end skills by building projects</h1>
        </div>
        <div className="info">
          <p>I created this project to show my card building skills. I am pretty happy with this result</p>
        </div>
      </div>
    </>
  );
}

export default App;
