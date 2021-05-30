import React from "react";

// stateless functional component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      {/* eslint-disable-next-line */}
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//   }
// }

export default NavBar;
