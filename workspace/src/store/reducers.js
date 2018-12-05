const initialState = {
    notes: [
        {
            id: '27812b',
            title: 'An example note',
            details: 'This is an example of a note'
        },
        {
            id: '278922',
            title: 'Another example note',
            details: 'This is an example of a note ....'
        },
    ],
    name: 'Manny'

}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,                              // copy existing state 
                notes: [...state.notes, action.note],  // add action.note to existing state.notes
            }
        case 'REMOVE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note !== action.note), 
            }
        case 'GET_NOTES':
            return {
                ...state, 
            }
        default:
            return state;    
    }
}