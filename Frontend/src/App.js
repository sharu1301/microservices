//import "./App.css";
import "./App.scss";
import { init } from "commandbar";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import reactRouterToArray from "react-router-to-array";
import Home from "./pages/Home/";
import getRoutes from "./routes";
// import ReactGA from "react-ga";

// const TRACKING_ID = "UA-268238248-1";

// ReactGA.initialize(TRACKING_ID);

init("72888fac");

function App({ children }) {
  const navigate = useNavigate();
  const [commandBarReady, setCommandBarReady] = useState(false);

  const indexRoute = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={<div style={{ display: "none" }}>Not Found</div>}
      />
    </Routes>
  );

  const routes = getRoutes();

  var routesArray = reactRouterToArray(routes);

  routesArray = routesArray.map((route) => route.replace("/", ""));

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  useEffect(() => {
    window.CommandBar.boot("me").then(() => {
      setCommandBarReady(true);
    });

    return window.CommandBar.shutdown;
  }, []);

  useEffect(() => {
    if (commandBarReady) {
      window.CommandBar.setFormFactor({
        type: "inline",
        rootElement: document.querySelector("#commandbar-inline-root"),
      });

      window.CommandBar.setCustomComponent(
        "footer",
        () =>
          `<div className="p-2">
          <i>
            <small>Powered by InsigniaSearch</small>
          </i>
        </div>`
      );

      if (routesArray.length > 0) {
        window.CommandBar.addRecords(
          "Pages",
          routesArray.map((route) => {
            return { label: `${route}`, id: `${route}` };
          })
        );
      }

      window.CommandBar.addRecordAction("Pages", {
        text: "Open Page",
        name: "open_page",
        template: {
          type: "link",
          value: "/{{record.id}}",
          operation: "self",
        },
      });
    }
  }, [commandBarReady, routesArray]);

  useEffect(() => {
    if (commandBarReady) {
      window.CommandBar.addRouter(navigate);
    }
  }, [navigate, commandBarReady]);

  return (
    <div className="App">
      {children}
      {indexRoute}
      {routes}
    </div>
  );
}

export default App;
