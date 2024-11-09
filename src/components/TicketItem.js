import React from "react";
import TicketForm from "./TicketForm";

export default function TicketItem({ticket, dispatch}) {
    
  const { id, title, desc, priority } = ticket;
  const priorityClass={
    1:"priority-low",
    2:"priority-medium",
    3:"priority-high"
  }

  
  return (
  <div key={ticket.id} className="ticket-item">

     <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>
     <h3>{ticket.title}</h3>
     <p>{ticket.desc}</p>
     <button className="button" onClick={()=>dispatch({type:'DELETE_TICKET',payload:ticket})}>Delete</button>
     <button className="button" onClick={()=>dispatch({type:'ON_EDITING_MODE',payload:ticket})}>Edit</button>

  </div>);
}
