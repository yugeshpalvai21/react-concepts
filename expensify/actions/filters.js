const changeTextFilter = (search_data) => ({
    type: 'TEXT_FILTER',
    search_data
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})


export { changeTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate }