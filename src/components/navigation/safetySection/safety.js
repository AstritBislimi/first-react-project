import "./safety.css"
import safetyImg from "../../../images/Safety.png"

function SafetySection (props) {
return <section className="findOutSection">

<div >
  <h2 className="findOutH2">
  Your Safety Is <br></br>Important
  </h2>
  <p className="findOutText">
  When your order reaches you, we have the health safety protocols, so that you are protected from any disease. Watch the video of how the delivery is made.
  </p>
</div>
<div>
  <img src={safetyImg} className="findOutImg"></img>
</div>
</section>
}

export default SafetySection