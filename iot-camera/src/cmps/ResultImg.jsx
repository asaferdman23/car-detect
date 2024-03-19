
import apprvoed_icon from "../assets/imgs/approved_icon.png"
import wanted_icon from "../assets/imgs/wanted_icon.png"

function ResultImg(isCriminalLogo) {
    console.log(isCriminalLogo);
    let logo = null;
    logo = isCriminalLogo ? wanted_icon : apprvoed_icon;
    return (
        logo && 
        <div className="img-result">
           <img className="result-logo" alt="result-logo" src={logo} />
        </div>
    );
}

export default ResultImg;