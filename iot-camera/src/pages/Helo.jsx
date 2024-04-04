import "../assets/css/index.css";
import SensorBars from "../cmps/SensorBars";
import CardContainer from "../cmps/CardContainer"
import PeopleDetailCard from "../cmps/PeopleDetailCard"
import SensorDataCmp from "../cmps/SensorDataCmp"
import ResultImg from "../cmps/ResultImg"
import SensorDetailCard from "../cmps/SensorDetailCard";
import SensorResultImg from "../cmps/SensorResultImg";
import SensorApexChart from "../cmps/SensorApexChart";

export function Helo(){

    return (
        <div className="helo-container">
            <SensorApexChart/>
            <SensorDetailCard /*details ={details}*//>
            <SensorDataCmp /*people={people}*/ />
            <SensorResultImg /*isCriminalLogo={isCriminal}*/ />
        </div>
        
    )
}