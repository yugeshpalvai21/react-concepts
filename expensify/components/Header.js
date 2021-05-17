import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <NavLink to="/">Expenses Dash Board</NavLink>
           <NavLink to="/addExpense">Add Expense</NavLink>
           <NavLink to="/editExpense">Edit Expense</NavLink>
           <NavLink to="/help">Help</NavLink> 
        </div>
    )
}

export { Header }