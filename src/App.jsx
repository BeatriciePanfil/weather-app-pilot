import "./App.css";

export default function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <div className="background-container">
          <header>
            <form className="search-form">
              <input
                type="search"
                placeholder="Enter a city.."
                id="search-form-input"
                className="search-form-input"
                required
              />
              <input
                type="submit"
                value="Search"
                className="search-form-button"
              />
            </form>
            <h1 className="weather-app-city">Lisbon</h1>
            <div className="weather-details">
              <div>Wednesday, 12:12</div>
              <div className="weather-app-icon">☀️</div>
              <div className="temperature-container">
                <div className="weather-app-temperature">21</div>
                <div className="weather-app-unit">°C</div>
              </div>
              <span className="weather-app-description">Sunny</span>
            </div>
          </header>
        </div>

        <main>
          <div className="weather-app-data">
            <div>
              <p className="weather-app-details">
                <div className="real-feel">
                  {" "}
                  Real feel: <strong>21°C</strong>
                </div>
                <div className="humidity">
                  Humidity: <strong>68%</strong>
                </div>
                <div className="wind">
                  {" "}
                  Wind: <strong>8.23km/h</strong>
                </div>
                <div className="pressure">
                  Pressure: <strong>1020 mbar</strong>
                </div>
              </p>
            </div>
          </div>
        </main>
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/BeatriciePanfil"
          target="_blank"
          rel="noreferrer"
        >
          Beatricie Panfil
        </a>
        , is{" "}
        <a
          href="https://github.com/BeatriciePanfil/weather-app-pilot"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://shecodes-react-week-4.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
