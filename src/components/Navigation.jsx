import React from "react";
import { Link, withRouter } from "react-router-dom";
import {UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,} from 'reactstrap';
function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src={process.env.PUBLIC_URL + "/logo108.png"} width="98" alt="logo"/>
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">

               <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
              <UncontrolledDropdown nav inNavbar>
             <DropdownToggle nav caret>
               About
             </DropdownToggle>
             <DropdownMenu right>
               <DropdownItem>
                 Option 1
               </DropdownItem>
               <DropdownItem>
                 Option 2
               </DropdownItem>
             </DropdownMenu>
           </UncontrolledDropdown>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact_us" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact_us">
                  Contact Us
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/notices" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/notices">
                  Notices
                </Link>
                </li>
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/policy_documents" ? "active" : ""
                  }`}
                >
                <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Policy Documents
               </DropdownToggle>
               <DropdownMenu right>
                 <DropdownItem>
                   Document 1
                 </DropdownItem>
                 <DropdownItem>
                   Document 2
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown>
                  </li>
                  <li
                    class={`nav-item  ${
                      props.location.pathname === "/user_category" ? "active" : ""
                    }`}
                  >
                  <UncontrolledDropdown nav inNavbar>
                 <DropdownToggle nav caret>
                   User Category
                 </DropdownToggle>
                 <DropdownMenu right>
                   <DropdownItem>
                     Office
                   </DropdownItem>
                   <DropdownItem>
                     Staff
                   </DropdownItem>
                   <DropdownItem>
                   Other
                   </DropdownItem>
                 </DropdownMenu>
               </UncontrolledDropdown>
                    </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
