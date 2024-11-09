export default function ticketReducers(state,action){
    switch(action.type){
        case "ADD_TICKET":
            return{
                ...state,tickets:[...state.tickets,action.payload]
            }
        case "UPDATE_TICKET":
            return{
                ...state,
                tickets:state.tickets.map((ticket)=>
                    ticket.id===action.payload.id?action.payload:ticket
                ),editingTickets:null
            }
        case "DELETE_TICKET":
                if(state.editingTickets&& state.editingTickets.id===action.payload.id){
                return{
                    ...state,tickets:state.tickets.filter((ticket)=>ticket.id!==action.payload.id),editingTickets:null
                }}
                else{
                    return{
                        ...state,tickets:state.tickets.filter((ticket)=>ticket.id!==action.payload.id)
                    }
                }
            
            
        case "ON_EDITING_MODE":
            return{
                ...state, editingTickets:action.payload
            }
        case "OFF_EDITING_MODE":
            return{
                ...state,editingTickets:null
            }
        case "ON_SORT":
            return{
                ...state,sortPreference:action.payload
            }
        default: return state
    }
}