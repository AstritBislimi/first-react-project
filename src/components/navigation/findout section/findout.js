import "./findout.css";
import findOutImg1 from "../../../images/findoutImg1.png";

function Findout(props) {
  return (
    <section className="findOutSection">
      <div>
        <img src={findOutImg1} className="findOutImg"></img>
      </div>
      <div >
        <h2 className="findOutH2">
          Find Out a Little More <br></br>About Us
        </h2>
        <p className="findOutText">
          We are a company dedicated to the distribution of products by delivery
          to your home or to the place where you are, with the best quality of
          delivery.
        </p>
      </div>
    </section>
  );
}

export default Findout;
