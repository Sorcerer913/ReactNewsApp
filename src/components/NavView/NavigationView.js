import React, {useEffect, useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

export const NavigationView = ({onHome, onBack}) => {
    return (
        <Navbar className="navbar navbar-dark bg-primary justify-content-between">
            <div className="navbar-nav-scroll">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                    <li className="nav-item">
                        <Link className="nav-link unselectable" onClick={onHome}>Home</Link>
                    </li>
                </ul>

            </div>
            {onBack !== undefined ?
                <ul className="navbar-nav bd-navbar-nav flex-row">
                    <li className="nav-item">
                        <Link className="nav-link unselectable" onClick={onBack}>Back</Link>
                    </li>
                </ul>
                :
                <div/>
            }
        </Navbar>
    )
}