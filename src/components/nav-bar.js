import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem, FormGroup, FormControl, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBar from './search-bar';
import Auth from '../modules/Auth';
import uniqid from 'uniqid';

class TopNavbar extends Component {

  render() {
    console.log(this.props)
    return (
      <Navbar>
        <Navbar.Header>
          <LinkContainer to='/'>
            <Navbar.Brand>
              MetaTomato
            </Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>
        <Nav>
          <LinkContainer to='/favorites'>
            <NavItem>
              Favorites
            </NavItem>
          </LinkContainer>

          {
            Auth.isUserAuthenticated() ?
              ( <LinkContainer to='/'>
                <NavItem onClick={() => Auth.deauthenticateUser()}>Logout</NavItem>
              </LinkContainer>
              ):([
                <LinkContainer key={uniqid()} to='/login'>
                  <NavItem>
                    Log In
                  </NavItem>
                </LinkContainer>,
                <LinkContainer key={uniqid()} to='/sign-up'>
                  <NavItem eventKey={2} href="#">
                    Sign Up
                  </NavItem>
                </LinkContainer>

              ])}
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
          <NavItem>
            {Auth.isUserAuthenticated() ? `Good Day: ${localStorage.getItem('name')}` : 'Hello'}
          </NavItem>
        </Nav>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <SearchBar />
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopNavbar;
