import React, { memo } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

import logo from '../../assets/nytimes-logo.png';

/**
 * @returns {JSX} JSX element
 */
function AppHeaderComponent(props) {

  return (
    <div>
      <Navbar color="dark" dark className="navbarbox">
        <Link to="/">
          <span className="mr-auto navbarBrand navbar-brand">
            <img className="img-responsive" src={logo} alt="logo" />
          </span>
        </Link>
        {props.location.pathname !== '/' &&
          <Nav navbar>
            <NavItem>
              <Link to="/">
                <i className="fa fa-chevron-left img-responsive"></i>
              </Link>
            </NavItem>
          </Nav>
        }
      </Navbar>
    </div>
  )
};

export const AppHeader = withRouter(memo(AppHeaderComponent));
