import React from "react";
import "./TicketColumn.css";

import Ticket from "./Ticket";

const TicketColumn = ({ data, heading, groupingData }) => {
    const priorityList = ["No Priority", "Low", "Medium", "High", "Urgent"];
    return (
        <div className="ticketCol">
            <div className="heading">
                <div className="headingInner">
                    <div>{groupingData !== "priority" ? heading : priorityList[heading]}</div>
                    <div>{data.length}</div>
                </div>
                <div className="headingInner"></div>
            </div>
            {data !== undefined &&
                data !== null &&
                data.map((item) => {
                    return <Ticket data={item} groupingData={groupingData} />;
                })}
        </div>
    );
};

export default TicketColumn;
