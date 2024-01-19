import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({grouping,setGrouping,ordering,setOrdering,grpOptions,orderOptions}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="container">
                <div className="displayBtn" onClick={() => setIsOpen(!isOpen)}>
                    Display
                </div>
                {isOpen && (
                    <div className="sortModal">
                        <div className="filterRow">
                            <div>Grouping</div>
                            <select className="dropdown" onChange={(e) => setGrouping(e.target.value)} defaultValue={grouping}>
                                {grpOptions.map((option, idx) => (
                                    <option key={idx}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div className="filterRow">
                            <div>Ordering</div>
                            <select className="dropdown" onChange={(e) => setOrdering(e.target.value)} defaultValue={ordering}>
                                {orderOptions.map((option, idx) => (
                                    <option key={idx}>{option}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
