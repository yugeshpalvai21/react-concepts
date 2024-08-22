const defaultFilters = {
    text: 'default',
    sortBy: 'amount/date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = ( state = defaultFilters, action ) => {
    switch(action.type) {
        case 'TEXT_FILTER':
            return { ...state, ...action.search_data }
        case 'SORT_BY_DATE':
            return { ...state, sortBy: action.sortBy}
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: action.sortBy }
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate }
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate }
        default:
            return state;
    }
}

export { filtersReducer }