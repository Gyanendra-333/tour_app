import mountain1 from "../assets/des-01.jpg";
import mountain2 from "../assets/des-02.jpg";
import mountain3 from "../assets/des-03.jpg";
import mountain4 from "../assets/des-04.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination.</h1>
      <p>Tours give you the Opportunity to see a lot , within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano,Batangas"
        text="Taal Volcano Main Crater Lake and Vulcan Point Taal Volcano is part of a chain of volcanoes lining the western edge of the island of Luzon. They were formed by the subduction of the Eurasian Plate underneath the Philippine Mobile Belt. Taal Lake lies within a 25–30 km (16–19 mi) caldera formed by explosive eruptions between 140,000 and 5,380 BP.[4] Each of these eruptions created extensive ignimbrite deposits reaching as far away as present-day."
        img1={mountain1}
        img2={mountain2}
      />

      <h1>Popular Destination.</h1>
      <p>Tours give you the Opportunity to see a lot , within a time frame.</p>

      <DestinationData
        className="first-des-reverse"
        heading="
        mount daguldol batangas"
        text="Daguldolr received a rating of three out of nine for difficulty level. It is considered an easy trek, measuring 672 meters above sea level and is located at San Juan, Batangas. Mt. Daguldol is a coastal mountain with three trails."
        img1={mountain3}
        img2={mountain4}
      />
    </div>
  );
}
export default Destination;
