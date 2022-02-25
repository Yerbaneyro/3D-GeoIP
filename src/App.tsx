import "./App.css";
import ApiData from "./components/apidata";
import { FaReact, FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiTypescript } from "react-icons/si";

function App() {
    return (
        <div className="App">
            <div className="menu-bar">
                <div className="logo">
                    <h1>
                        Geo<span className="logo-color">IP</span>
                    </h1>
                    <h2>
                        Check IP Localisation{" "}
                        <FaReact className="technologies" />
                        <SiTypescript className="technologies" />
                    </h2>
                </div>
                <nav>
                    <a
                        href="https://github.com/Yerbaneyro/3D-GeoIP"
                        target="_blank"
                    >
                        <FaGithub className="icon" />
                        GitHub
                    </a>
                    <a href="https://mbednarz.website/" target="_blank">
                        <CgWebsite className="icon" />
                        Mbednarz.website
                    </a>
                </nav>
            </div>
            <ApiData />
        </div>
    );
}

export default App;
