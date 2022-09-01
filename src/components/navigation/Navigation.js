import "./Navigation.css";

function Navigation(props) {
  return (
    <nav className="navContainer">
      <p className="logo">Delivery</p>
      <ul className="navUl">
        <li className="navLi">Home</li>
        <li className="navLi">About Us</li>
        <li className="navLi">Services</li>
        <li className="navLi">Contact Us</li>
        <li className="navLi">
          <button className="navBtn">Order Now!</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
