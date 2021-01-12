import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem ,MDBBtn
} from "mdbreact";
import { BrowserRouter as Router,Link } from 'react-router-dom';
import LogoEquity from "../../../../assets/images/logos/logo-equity-life.jpeg"
import Style from "./NavbarV1.module.css"

class NavbarV1 extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className={Style.NavbarCon} dark expand="md">
        <MDBNavbarBrand>
         <img className={Style.gambarEquity} src={LogoEquity} alt=""/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              {/* drop 1 */}
              <MDBDropdown dropdown>
                        <MDBDropdownToggle caret color="teal darken-3">
                            Dropleft
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            <MDBDropdownItem>Action</MDBDropdownItem>
                            <MDBDropdownItem>Another Action</MDBDropdownItem>
                            <MDBDropdownItem>Something else</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem>Separated link</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
               {/* drop 1 end */}
            </MDBNavItem>
            <MDBNavItem>
               {/* drop 2 */}
               <MDBDropdown dropdown>
                        <MDBDropdownToggle caret color="teal darken-3">
                            Dropleft
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            <MDBDropdownItem>Action</MDBDropdownItem>
                            <MDBDropdownItem>Another Action</MDBDropdownItem>
                            <MDBDropdownItem>Something else</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem>Separated link</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
               {/* drop 2 end */}
            </MDBNavItem>
            <MDBNavItem>
              {/* drop 3 */}
              <MDBDropdown dropdown>
                        <MDBDropdownToggle caret color="teal darken-3">
                            Dropleft
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            <MDBDropdownItem>Action</MDBDropdownItem>
                            <MDBDropdownItem>Another Action</MDBDropdownItem>
                            <MDBDropdownItem>Something else</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem>Separated link</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
               {/* drop 3 end */}
            </MDBNavItem>
            
            <MDBNavItem>
            <MDBBtn> <Link to="/new">tes</Link></MDBBtn>
            
            </MDBNavItem>
            <MDBNavItem>
            <MDBBtn> <Link to="/new">tes</Link></MDBBtn>
            
            </MDBNavItem>
            <MDBNavItem>
            <MDBBtn> <Link to="/new">tes</Link></MDBBtn>
            
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
                
              </MDBFormInline>
              
            </MDBNavItem>
            <MDBDropdown dropdown>
                        <MDBDropdownToggle caret color="teal darken-3">
                            Dropleft
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            <MDBDropdownItem>Action</MDBDropdownItem>
                            <MDBDropdownItem>Another Action</MDBDropdownItem>
                            <MDBDropdownItem>Something else</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem>Separated link</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarV1;