import { Link } from "react-router-dom"; // Import Link for navigation

const SideBarMenu = () => {
  return (
    <section className="sidebar">
        <div className="side-bar-header">
          <Link to="/">
            <h1 className="side-bar-logo">MotoDetect</h1>
          </Link>
          <hr className="separator" /> {/* Added line separator */}
        </div>
        <nav className="side-bar-nav">
          <ul className="nav-links">
            <li>
              <Link to="/">Overview</Link>
            </li>
            <li>
              <Link to="/wanted">Wanted</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
    </section>
  );
};

export default SideBarMenu;
