import "./header.css";
import bannerImg from "../../../images/bannerImg.png";
function Header(props) {
  return (
    <section className="banner">
      <div className="leftBanner">
        <h1 className="bannerText">
          Order Products <br></br>
          Faster Easier
        </h1>
        <p className="bannerP">
          Order your favorite foods at any time and we will deliver them right
          to where you are.
        </p>
        <button className="bannerBtn">Get Started</button>
      </div>
      <div className="rightBanner">
        <img src={bannerImg} className="bannerImg"></img>
      </div>
    </section>
  );
}

export default Header;
