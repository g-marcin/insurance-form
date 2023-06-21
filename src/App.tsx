import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Outlet } from "react-router-dom";
import { FormNavbar } from "./FormNavbar/FormNavbar";
import { routes } from "./router/routes";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    navigate(routes[page]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div>
        {" "}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>insurance-form</h1>
      <div className="card">
        <FormNavbar />
        <Outlet />
        <div className="buttonGroup">
          <button
            onClick={() => {
              page !== 0 && setPage(routes.indexOf(location.pathname) - 1);
            }}
          >
            {"<"}
          </button>
          <button onClick={() => page !== routes.length - 1 && setPage(routes.indexOf(location.pathname) + 1)}>{">"}</button>
        </div>
        <p>
          <code>2023 insurance-form</code>
        </p>
      </div>
      <p className="read-the-docs">Learn more</p>
    </>
  );
}

export default App;
