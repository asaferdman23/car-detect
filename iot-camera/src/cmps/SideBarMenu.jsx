import { NavLink,useMatch, useResolvedPath } from "react-router-dom";

const CustomNavLink = ({ to, children, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      to={to}
      className={match ? "active-link" : ""}
      {...props}
    >
      {children}
    </NavLink>
  );
};

const SideBarMenu = () => {
  return (
    <section className="sidebar">
      <nav className="side-bar-nav">
        <ul className="nav-links">
          <li>
            <CustomNavLink to="/">Overview</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/helo">Helo</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/cars">Cars</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/aboutus">About Us</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/settings">Settings</CustomNavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default SideBarMenu;