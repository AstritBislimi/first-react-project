import "./contact.css"


function Contact() {
  return (
    <section className="contact">
      <div className="contactText">
        <h2 className="deliveryH2">
          Contact Us From <br></br>Here
        </h2>
        <p className="deliveryP">
          You can contact us from here, you can write to us, call us or visit
          our service center, we will gladly assist you.
        </p>
      </div>

      <div className="contactText">
        <p className="contactC">
          <b>Telephone:</b> 999 - 888 - 777
        </p>
        <p className="contactC">
          <b>Email:</b> delivery@email.com
        </p>
        <p className="contactC">
          <b>Location:</b> Lima - Peru
        </p>
      </div>
      <div className="btnCon">
    <button className="contactBtn">Contact Us</button>
      </div>
    </section>
  );
}

export default Contact