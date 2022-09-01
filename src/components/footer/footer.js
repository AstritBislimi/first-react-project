import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div>
          <h2 className="deliveryH2">Delivery</h2>
          <p className="footerP">Order Products Faster Easier</p>
        </div>
        <div>
          <h2 className="deliveryH2"> Our Services</h2>
          <a className="footerP">Pricing</a>
          <a className="footerP">Discount</a>
          <a className="footerP">Report a bug</a>
          <a className="footerP">Terms of Service</a>
        </div>
        <div>
          <h2 className="deliveryH2"> Our Company</h2>
          <a className="footerP">Blog</a>
          <a className="footerP">Our Mission</a>
          <a className="footerP">Get in Touch</a>
        </div>
      </div>
      <p className="copyRight">Bedimcode. All right reserved</p>
    </footer>
  );
}

export default Footer;
