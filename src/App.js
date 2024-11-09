import logo from './logo.svg';
import './App.css';
import './styles.css'
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
import ticketReducers from './reducers/ticketReducers';
import TicketList from './components/TIcketList';
import { SortingLogic } from "./utilities/sortUtilities";


function App() {
  const initialState={tickets:[],editingTickets:null,sortPreference:"High to Low"}
  const[ state, dispatch]=useReducer(ticketReducers,initialState)
  const sortedTickets=SortingLogic(state.tickets,state.sortPreference)
  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>
      <TicketForm dispatch={dispatch} editingTicket={state.editingTickets}></TicketForm>
      {state.tickets.length>0 && 
      <div className='results'>
      <h2>All Tickets</h2>
      <select value={state.sortPreference} onChange={(e)=>dispatch({type:'ON_SORT',payload:e.target.value})} >
       <option value="High to Low">High to Low</option> 
       <option value="Low to High">Low to High</option> 
      </select>
      <TicketList tickets={sortedTickets} dispatch={dispatch}></TicketList>
      
      </div>}
      </div>
    </div>
    
  );
}

export default App;
