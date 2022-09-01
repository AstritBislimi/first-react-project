import "./delivery.css"
import deliveryImg from "../../../images/deliveryImg.png"
import apple from "../../../images/apple.png"
import drive from "../../../images/drive.png"

function Delivery (props) {
    return <section className="Delivery">
        <div className="deliveryImg">
            <img src={deliveryImg}></img>
        </div>
        <div className="deliveyText">
            <h2 className="deliveryH2">Watch Your Delivery <br></br>
            At Any Time</h2>
            <p className="deliveryP">With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!</p>
            <div className="btnContainer">
         <button className="deliveryBtn"> <img src={apple}></img>App Store</button>
         <button className="deliveryBtn"> <img src={drive}></img>Google Play</button>
        </div>
        </div>
        
    </section>
}

export default Delivery