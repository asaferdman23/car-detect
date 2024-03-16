import apprvoed_icon from "../assets/imgs/approved_icon.png"
import wanted_icon from "../assets/imgs/wanted_icon.png"

function ResultImg(isCriminal) {
    let logo = isCriminal ? wanted_icon : apprvoed_icon;
    return (
        <div className="img-result">
           <img className="result-logo" alt="result-logo" src={logo} />
        </div>
    );
}
export default ResultImg;