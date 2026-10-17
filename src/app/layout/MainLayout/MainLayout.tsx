import { Outlet } from "react-router";
import { ROUTES } from "@shared/routes";
import { Link } from "@shared/ui/Link";
import "./MainLayout.css";

export const MainLayout = () => {
  return (
    <div className="main">
      <header className="header">
        <ul className="nav">
          {Object.entries(ROUTES).map(([name, path]) => (
            <li key={name}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </header>
      <main className="outlet">
        <Outlet />
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
};
