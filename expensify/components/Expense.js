import React from 'react';

const Expense = ({id, title, description, price}) => {
    return (
        <div>
            <h4>Id: {id}</h4>
            <h3>Title: { title }</h3>
            <p>Description: { description }</p>
            <p>Price: { price }</p>
        </div>
    )
}

export { Expense }