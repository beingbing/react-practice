import React from "react";

// stateless functional component

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      {/* eslint-disable-next-line */}
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
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
