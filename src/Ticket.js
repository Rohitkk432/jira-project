import React from "react";
import "./Ticket.css";

const Ticket = ({ data, groupingData }) => {
    return (
        <div className="ticketBox">
            <div className="line1">
                <div>{data.id}</div>
                {groupingData !== "user" && <div>{data.userId}</div>}
            </div>
            <div className="line2">
                {groupingData !== "status" && <div>{data.status}</div>}
                <div>{data.title}</div>
            </div>
            <div className="line3">
                {groupingData !== "priority" && <div>{data.priority}</div>}
                {data.tag.map((tag) => {
                    return <div>{tag}</div>;
                })}
            </div>
        </div>
    );
};

export default Ticket;
