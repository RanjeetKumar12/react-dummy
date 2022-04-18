const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY":
            return {
                ...state, sortBy: action.payload
            };
        case "RATING":
            return {
                ...state, rating: action.payload
            };
        case "SEARCH":
            return {
                ...state, search: action.payload.search
            };
        case "PRICE":
            return {
                ...state, priceRangeValue: action.payload
            };
        case "REMOVE_OUT_OF_STOCK":
            return {
                ...state, includeOutOfStock: !state.includeOutOfStock
            };
        case "PREMIUM":
            return {
                ...state, isPremium: state.isPremium
            };
        case "DELIVERY_DATE":
            return {
                ...state, deliveryDate: action.payload
            };
        case "CATEGORY":
            if (!state.category.includes(action.payload.categoryType)) {
                return {
                    ...state,
                    category: [...state.category, action.payload.categoryType],
                };
            }
            const filterCategories = state.category.filter(
                (product) => product !== action.payload.categoryType);
            return {
                ...state, category: filterCategories
            }
    }
}

export {filterReducer}