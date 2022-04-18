// import React, { createContext, useContext, useReducer } from "react";
// import { filterReducer } from "../reducer/";

// const FilterContext = createContext(null);

// const FilterProvider = ({ children }) => {
//   const [filterState, filterDispatch] = useReducer(filterReducer, {
//     sortBy: null,
//     category: [],
//     isFeatured: true,
//     rating: null,
//     includeOutOfStock: true,
//     priceRangeValue: 60000,
//     search: "",
//     premium: false,
//     isDeliverAble: true,
//     isFastDeliverAble: false,
//   });
//   return (
//     <FilterContext.Provider
//       value={{
//         filterState,
//         filterDispatch,
//       }}
//     >
//       {children}
//     </FilterContext.Provider>
//   );
// };

// const useFilter = () => useContext(FilterContext);

// export { FilterProvider, useFilter };
