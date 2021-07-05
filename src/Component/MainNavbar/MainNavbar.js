import React from 'react';
import logoPng from '../../assets/images/anniPng.png'




export default function MainNavbar() {
    return (
        <div style={{ zIndex: "1" }}>
            <ul className="ul">
                <li className="li">
                    <img src={logoPng} alt="brand-logo" className="imageclass" />
                </li>
                <li className="li">
                    <a href="#students">
                        <span style={{ fontSize: "2em" }}><i className="fas fa-user"></i></span>
                        <br></br>
                        <span>Students</span>
                    </a>
                </li>
                <li className="li">
                    <a href="#lessons">
                        <span style={{ fontSize: "2em" }}><i className="fas fa-book"></i></span>
                        <br></br>
                        <span>Lessons</span>
                    </a>
                </li>
                <li className="li">
                    <a href="#setting">
                        <span style={{ fontSize: "2em" }}><i className="fas fa-cog"></i></span>
                        <br></br>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
