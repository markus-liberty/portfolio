import React, { Component, Fragment } from 'react';
import SideNav, { Nav, NavItem, NavText, Toggle } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Projects from './projects'

class Sidebar extends Component {
    render(){
        return(
                <Fragment>
                    <SideNav>
                        <Toggle/>
                        <Nav>
                            <NavItem>
                                <NavText>
                                    Home
                                </NavText>
                            </NavItem>
                            <NavItem>
                                <NavText>
                                    About
                                </NavText>
                            </NavItem>
                            <NavItem>
                                <NavText>
                                    Projects
                                </NavText>
                            </NavItem>
                        </Nav>
                    </SideNav>
                </Fragment>
        ); 
    }
}

export default Sidebar;