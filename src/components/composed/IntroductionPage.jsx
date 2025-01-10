import React from "react";
import MediaComponent from "../standalone/MediaComponent";
import MediaCard from "../composed/MediaCard";
import { useNavigate } from "react-router-dom";
import "../../css/Introduction.css";

const Introduction = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const goHome = () => {
    navigate("/");
  };
  const exit = () => {
    navigate("/");
  };

  return (
    <div className="introduction">
      <div className="media-card-group">
        <MediaCard
          heading="Cubicon Introduction"
          style={{ background: "linear-gradient(to right, #ff9a8b, #fecfef)" }}
        >
          {
            <MediaComponent
              content={`Cubicon is your frontline defense against unreliable survey data. By combining visual puzzles with advanced validation methods, Cubicon ensures your survey participants are authentic and engaged. Whether you're preventing bots or offering respondents a dynamic storytelling option, Cubicon raises the bar for data quality.
            Join us as we explore how Cubicon transforms survey validation into a smarter, more secure experience for everyone involved.
            `}
            />
          }
        </MediaCard>
        <MediaCard
          heading="Cubicon Benefits"
          style={{ background: "linear-gradient(to right, #a1c4fd, #c2e9fb)" }}
        >
          {
            <MediaComponent
              title="Validates Participants: "
              content={`Cubicon's visual puzzles ensure only authentic participants engage with your surveys, improving data reliability.`}
            />
          }
          {
            <MediaComponent
              title="Boosts Data Quality:"
              content={` Reduces the influence of bots and low-effort responses, creating cleaner, more actionable datasets.`}
            />
          }
          {
            <MediaComponent
              title="Engages Respondents:"
              content={` Gamified elements make surveys more engaging, encouraging higher-quality participation.`}
            />
          }
        </MediaCard>
      </div>
      <div className="media-card-group">
        <MediaCard
          heading="Cubicon Results"
          style={{ background: "linear-gradient(to right, #fbc2eb, #a6c1ee)" }}
        >
          {
            <MediaComponent
              title="Higher Data Integrity:"
              content={` Surveys produce reliable, credible
                  insights that stakeholders can trust.`}
            />
          }
          {
            <MediaComponent
              title="Reduced Risk:"
              content={`
                   Eliminates questionable responses that could
                  skew results, helping to mitigate decision-making errors.
                  Cubicon Information Page If you have any more images you want
                  me to transcribe, please feel free to share them.`}
            />
          }
        </MediaCard>

        <MediaCard
          heading="Cubicon Next Steps"
          style={{ background: "linear-gradient(to right, #fdcbf1, #e6dee9)" }}
        >
          {
            <MediaComponent
              title="Integrate Cubicon into Your Surveys:"
              content={` Incorporate visual puzzles to validate participant authenticity and engage respondents.`}
            />
          }
          {
            <MediaComponent
              title="Monitor Data Quality:"
              content={` Use Cubicon's validation metrics to ensure surveys produce reliable, actionable insights.`}
            />
          }
          {
            <MediaComponent
              title="Combine with Other Security Measures:"
              content={` Pair Cubicon with additional tools to enhance data integrity and protect against fraudulent responses.`}
            />
          }
        </MediaCard>
      </div>

      <div>
        <button
          className="btn btn-primary btn-lg m-2"
          style={{ width: "100px", height: "50px" }}
          onClick={goHome}
        >
          Back
        </button>
        <button
          className="btn btn-primary btn-lg m-2"
          style={{ width: "100px", height: "50px" }}
          onClick={exit}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default Introduction;
