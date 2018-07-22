import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={()=>{this.props.pindahHalaman('home')}} href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>{this.props.pindahHalaman('kajian')}} href="#">Kajian</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>{this.props.pindahHalaman('mondok')}} href="#">Mondok</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>{this.props.pindahHalaman('about')}} href="#">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}