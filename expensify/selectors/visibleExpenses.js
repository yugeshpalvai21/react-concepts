const getVisibleExpenses = (expenses, filters) => {
    return expenses.filter((expense) => {
        const startDateMatch = expense.createdAt >= filters.startDate;
        const textMatch = expense.description.includes(filters.text);

        return startDateMatch && textMatch
    })
}

export { getVisibleExpenses };