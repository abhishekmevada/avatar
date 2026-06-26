import "../style/Home.css";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaShield, FaChartArea } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div>
        <header>
          <h1>
            <span
              style={{
                color: "var(--primary-color)",
              }}
            >
              A
            </span>
            vatar
            <span
              style={{
                color: "var(--cta-but)",
              }}
            >
              .
            </span>
          </h1>
        </header>
        <section className="heroSection">
          <div className="herosecContainer">
            <h1 className="heroTitle">
              AI-Powered Space Radiation Forecasting for{" "}
              <span
                style={{
                  color: "var(--primary-color)",
                }}
              >
                Geostationary Satellites
              </span>
            </h1>
            <p className="heroDescription">
              Predict energetic electron radiation before it impacts satellite
              operations. This project uses historical space weather data and
              machine learning to forecast electron flux levels{" "}
              <span style={{ fontWeight: 600 }}>30–45 minutes</span>,{" "}
              <span style={{ fontWeight: 600 }}>6 hours</span>, and{" "}
              <span style={{ fontWeight: 600 }}>12 hours</span> in advance
              supporting more informed operational decisions for geostationary
              satellites.
            </p>
            <div className="heroContainera">
              <div className="heroBoxa">
                <p className="heroboxaIco">
                  <FaShield />
                </p>
                <p className="heroboxatitle">Preemptive Protection</p>
                <p className="heroboxades">
                  Shifts reactive anomaly management to proactive, low-latency
                  satellite safeguarding.
                </p>
              </div>
              <div className="heroBoxa">
                <p className="heroboxaIco">
                  <PiClockCountdownFill />
                </p>
                <p className="heroboxatitle">Multi-Horizon Intelligence</p>
                <p className="heroboxades">
                  Delivers instant tactical alerts (30–45 mins) alongside
                  strategic long-range forecasting (6–12 hours).
                </p>
              </div>
              <div className="heroBoxa">
                <p className="heroboxaIco">
                  <FaChartArea />
                </p>
                <p className="heroboxatitle">Scientific Data Processing</p>
                <p className="heroboxades">
                  Converts raw .cdf solar wind data into clean, actionable
                  predictive charts.
                </p>
              </div>
            </div>
            <div className="herocontainerb">
              <a href="#prototypeSection">
                <button className="ctabuta">Launch Prediction Dashboard</button>
              </a>
              <a href="#prototypeSection">
                <button className="ctabutb">Explore ML Architecture</button>
              </a>
            </div>
          </div>
        </section>
        <section className="problemsolvingSection">
          <div className="problemsolvingContainera">
            <img
              src="./problemsolimg.png"
              alt="earth"
              className="problemsolvingImg"
            />
          </div>
          <div className="problemsolvingContainerb">
            <h1 className="problemsolvingtitle">The Space Weather Threat</h1>
            <p className="problemsolvingdes">
              Geostationary orbits are constantly exposed to unpredictable,
              harsh high-energy electron fluxes. These energetic particles
              degrade solar panels, disrupt sensor electronics, and cause deep
              dielectric charging—potentially risking catastrophic mission
              failure.
            </p>
            <ul
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginLeft: "15px",
              }}
            >
              <li>
                <span style={{ fontWeight: "600" }}>Circuit Burnout</span>:
                Internal electrostatic discharges act like miniature lightning
                strikes, permanently damaging components.
              </li>
              <li>
                <span style={{ fontWeight: "600" }}>Software Bit Flips</span>:
                High-energy particles corrupt memory storage units, altering
                critical flight code mid-mission.
              </li>
              <li>
                <span style={{ fontWeight: "600" }}>The Blindspot</span>:
                Traditional physics models fail to catch sudden, localized flux
                spikes, leaving ground control with zero reaction time.
              </li>
            </ul>
          </div>
        </section>
        <section className="featuresSection">
          <h1 className="featuresdes">Features & Project Scope</h1>
          <p className="featuresdes">
            how the Python pipeline works from raw data to final inference.
          </p>
          <div className="featureContainer">
            <div className="featureBox">
              <p className="featureBoxtitle">
                0
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  1
                </span>{" "}
                ) Data Pipeline
              </p>
              <p>
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  -
                </span>{" "}
                Import, clean, synchronize, and prepare space weather datasets.
              </p>
            </div>
            <div className="featureBox">
              <p className="featureBoxtitle">
                0
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  2
                </span>{" "}
                ) Feature Engineering
              </p>
              <p>
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  -
                </span>{" "}
                Generate temporal and statistical features for forecasting.
              </p>
            </div>
            <div className="featureBox">
              <p className="featureBoxtitle">
                0
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  3
                </span>{" "}
                ) AI Forecasting
              </p>
              <p>
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  -
                </span>{" "}
                Predict energetic electron flux up to 12 hours in advance.
              </p>
            </div>
            <div className="featureBox">
              <p className="featureBoxtitle">
                0
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  4
                </span>{" "}
                ) Model Validation
              </p>
              <p>
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  -
                </span>{" "}
                Measure accuracy, optimize parameters, and validate predictions.
              </p>
            </div>
            <div className="featureBox">
              <p className="featureBoxtitle">
                0
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  5
                </span>{" "}
                ) Risk Analysis
              </p>
              <p>
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  -
                </span>{" "}
                Classify radiation severity and detect hazardous conditions.
              </p>
            </div>
            <div className="featureBox">
              <p className="featureBoxtitle">
                0
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  6
                </span>{" "}
                ) Visualization
              </p>
              <p>
                <span
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  -
                </span>{" "}
                Interactive dashboard for forecasts, trends, and radiation
                alerts.
              </p>
            </div>
          </div>
        </section>
        <section className="timehorizonSection">
          <h1>Forecasting Windows & Horizons</h1>
          <div className="timehorizonContainer">
            <div className="timehorizonBox">
              <p className="tinehorizonBoxtitle">
                30 to 45 Minutes Ahead (Critical Early Warning)
              </p>
              <p>
                Immediate tactical alerts allowing ground teams to trigger
                safing commands or isolate vulnerable payloads during sudden
                flux spikes.
              </p>
            </div>
            <div className="timehorizonBox">
              <p className="tinehorizonBoxtitle">
                6 Hours Ahead (Short-Term Tactical)
              </p>
              <p>
                Medium-range predictions for operational mission planning and
                nominal tracking shifts.
              </p>
            </div>
            <div className="timehorizonBox">
              <p className="tinehorizonBoxtitle">
                12 Hours Ahead (Strategic Horizon)
              </p>
              <p>
                Broad space weather trend mapping to anticipate severe
                geomagnetic storm onset.
              </p>
            </div>
          </div>
        </section>
        <section className="dashboardSection" id="prototypeSection">
          <h1>Our Application Dashboard & Architecture</h1>
          <div className="dashboardContainer">
            <div className="dashboardBox">
              <img
                src="./isrodahboard.png"
                alt="Avatar"
                className="dashboardImg"
              />
            </div>
            <div className="dashboardBox">
              <img
                src="./architecture.png"
                alt="Avatar"
                className="dashboardImg"
              />
            </div>
          </div>
        </section>
        <footer>
          <p className="footerText">
            <span className="a">A</span>
            <span className="b">V</span>
            <span className="c">A</span>
            <span className="d">T</span>
            <span className="e">A</span>
            <span className="f">R</span>
            <span
              style={{
                color: "var(--cta-but)",
              }}
            >
              .
            </span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default Home;
