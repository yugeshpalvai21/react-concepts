import uuid from 'uuid';

const AddExpense = ( {description = 'default text', note = 'default note', price = 123 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        price,
        createdAt: 112233
    }
})

const RemoveExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

const EditExpense = (id, updated_data ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updated_data
})

export { AddExpense, RemoveExpense, EditExpense }