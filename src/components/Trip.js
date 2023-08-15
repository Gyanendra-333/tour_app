import "./Trip.css";
import TripData from "./TripData";
import trip1 from "../assets/t-01.jpg";
import trip2 from "../assets/t-02.jpg";
import trip3 from "../assets/07.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can Discover Unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={trip1}
          heading="Trip in Indonesia."
          text="Indonesia is a country blessed with countless wonders. What makes this country unique is its diverse culture and magnificent nature, which should be celebrated and preserved by everyone. Therefore, The Ministry of Tourism and Creative Economy of the Republic of Indonesia presents Wonderful Indonesia, a promise to make Indonesia a place where everyone can enjoy its natural and cultural wonders."
        />
        <TripData
          image={trip2}
          heading="Trip in Malaysia."
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic."
        />
        <TripData
          image={trip3}
          heading="Trip in Singapore."
          text="Tourism in Singapore is a major industry and contributor to the Singaporean economy.

          As of 2019, there were 19.1 million international tourists visiting Singapore, which was more than three times the country's total population.[1] It also claims to be environmentally friendly, and maintains natural and heritage conservation programs. Along with this, it also has one of the world's lowest crime rates."
        />
      </div>
    </div>
  );
}
export default Trip;
