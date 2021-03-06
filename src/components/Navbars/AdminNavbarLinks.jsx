
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from 'react-router-dom';
class AdminNavbarLinks extends Component {
  Logout = () => {
    localStorage.clear();
  }

  changeLanguage = (lng) => {
    this.props.changeLanguage(lng);
  }

  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          {/* <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem> */}

          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            <MenuItem eventKey={2.5}>Another notifications</MenuItem>
          </NavDropdown>

          <NavDropdown eventKey={1} title="Language" id="basic-nav-dropdown-center">
            <MenuItem onClick={() => this.changeLanguage('en')}><i className="fa fa-language"></i>English</MenuItem>
            <MenuItem onClick={() => this.changeLanguage('vn')} ><i className="fa fa-language"></i>VietNamese</MenuItem>
            <MenuItem onClick={() => this.changeLanguage('jp')} ><i className="fa fa-language"></i>Japanese</MenuItem>
          </NavDropdown>
          <NavDropdown
            eventKey={2}
            title="Dropdown"
            id="basic-nav-dropdown-right"
          >
            <MenuItem><i className="fa fa-user"></i>Profile</MenuItem>
            <MenuItem><i className="fa fa-history"></i>History</MenuItem>
            <MenuItem>
              <Link onClick={this.Logout} to="/login">
                <i className="fa fa-sign-out"></i> Log out
                </Link>
            </MenuItem>
          </NavDropdown>

        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
