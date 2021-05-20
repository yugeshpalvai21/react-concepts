import React from 'react';

const Expense = (props) => {
    return (
        <div>
            <h4>Id: {props.expense.id}</h4>
            <h3>Title: { props.expense.title }</h3>
            <p>Description: { props.expense.description }</p>
            <p>Price: { props.expense.price }</p>
        </div>
    )
}

export { Expense }