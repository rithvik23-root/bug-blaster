import React,{useState,useEffect} from "react";
import TicketItem from "./TicketItem";
import '../styles.css'

export default function TicketForm({dispatch,editingTicket}){

    const [title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const[priority,setPriority]=useState("1");

    useEffect(()=>{
        if(editingTicket){
            setTitle(editingTicket.title)
            setDesc(editingTicket.desc)
            setPriority(editingTicket.priority)
        }else{
            clearForm()
        }
    },[editingTicket])
    

    let priorityValue={
        3:"high",
        2:"medium",
        1:"low"
    }

    function clearForm(){
        setTitle('');
        setDesc('');
        setPriority('1')
    }

    function handdleSubmit(e){


        const ticket={
            id: editingTicket? editingTicket.id:new Date().toISOString(),
            title,
            desc,
            priority
        }


        
            dispatch({
                type:editingTicket?'UPDATE_TICKET':'ADD_TICKET',
                payload:ticket
            })
        
        
        e.preventDefault();
        
        clearForm();
        
    }

    function cancelEdit(){
        dispatch({
            type:"OFF_EDITING_MODE"
        })
    }

    

    
    
    return(
        <div>
            <form onSubmit={handdleSubmit} className="ticket-form">
            <div>
                <label>Title</label>
                <input type="text" className="form-input" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            </div>
            <div>
                <label>Description</label>
                <textarea type="text" className="form-input" value={desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
            </div>
            
            <div>
            
                <fieldset className="priority-fieldset">
                    <legend>Priority</legend>
                    {
                       Object.entries(priorityValue).map(([value,label])=>(<label key={value} className="priority-label">
                        <input type="radio" value={value} checked={priority===value} className="priority-input" onChange={(e)=>{setPriority(e.target.value)}}></input>{label}</label>))
                        
                    }
                </fieldset>
            </div>
            <div>
                <button type="submit" className="button">Submit</button>
                {editingTicket &&
                <button type="button" className="button" onClick={()=>cancelEdit()}>Cancel Edit</button>}
            </div>
        </form>

        {/* <TicketItem ticket={}></TicketItem> */}
        
        </div>
        
      
       
    )
}
