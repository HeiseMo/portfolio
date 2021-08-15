import "./styles.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Footer from "./Footer";

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <div>
          <div className="header">
            <div className="header-left">
              <h1>Timur James Tanurhan</h1>
            </div>
            <div className="header-right">
              <a
                href="https://github.com/HeiseMo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://image.flaticon.com/icons/png/512/733/733609.png"
                  alt="github"
                  className="github-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/timur-james-tanurhan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://image.flaticon.com/icons/png/512/733/733617.png"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://www.xing.com/profile/TimurJames_Tanurhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://image.flaticon.com/icons/png/512/733/733643.png"
                  alt="xing"
                  className="xing-icon"
                />
              </a>
            </div>
          </div>
          <div className="content">
            <Route path="/" component={Home} />
          </div>
          <div className="content-projects">
            <Route path="/" component={Projects} />
          </div>
        </div>
      </div>
      <Footer />
    </HashRouter>
  );
}