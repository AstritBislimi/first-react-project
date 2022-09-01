import "./services.css";
import boxImg1 from "../../../images/img1.png";

import boxImg2 from "../../../images/img2.png";
import boxImg3 from "../../../images/img3.png";
function Services(props) {
  return (
    <section className="services">
      <h2 className="servicesH2">Some Services We Offer</h2>
      <div className="servicesContainer">
        <article className="servicesBox">
          <h3 className="boxHeader">Payment Done</h3>
          <img src={boxImg1}></img>
          <p className="boxP">
            Pay with a Visa or PayPal card and without much ado.
          </p>
          <a className="boxLink">Learn More</a>
        </article>
        <article className="servicesBox">
          <h3 className="boxHeader">Payment Done</h3>
          <img src={boxImg2}></img>
          <p className="boxP">
            Pay with a Visa or PayPal card and without much ado.
          </p>
          <a className="boxLink">Learn More</a>
        </article>
        <article className="servicesBox">
          <h3 className="boxHeader">Payment Done</h3>
          <img src={boxImg3}></img>
          <p className="boxP">
            Pay with a Visa or PayPal card and without much ado.
          </p>
          <a className="boxLink">Learn More</a>
        </article>
      </div>
    </section>
  );
}

export default Services;
