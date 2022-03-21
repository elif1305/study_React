import "./Msg.css";      //! external stylinge ornek, dosya uzantisi mutlaka yazilmali
import butterfly from "./img/butterfly.webp";

function Msg() {          //? Function based component ornegi
  return (
    <div>
      <h1 className="msg-h1">Welcome to our React Courses</h1>
      <img
        className="msg-img"  //! class ismi vermek icin
        src="https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584__340.jpg"
        alt=""
      />
      <img src={butterfly} alt="" className="msg-img" />
    </div>
  );
}

export default Msg;
