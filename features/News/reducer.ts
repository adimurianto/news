const initialState = {
    category: 'nasional',
    data: []
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "updateNews":
            return {
                category: action.category,
                data: action.items
            }
        case "updateCategory":
            return {
                ...state,
                category: action.category,
            } 
        default: 
            return state    
    }
}

export default reducer;