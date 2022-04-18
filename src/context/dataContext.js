import React, { createContext, useContext, useReducer, useEffect } from "react";
import { dataReducer } from "../reducer/";
import { fetchProducts, fetchCategories } from "../functions";

const DataContext = createContext({
    dataState: [],
    dataDispatch: () => { },
});

const initialState = {
    products: [],
    categories: [],
};

const DataProvider = ({ children }) => {
    const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

    useEffect(() => {
        fetchProducts(dataDispatch);
        fetchCategories(dataDispatch);
    }, []);

    return (
        <DataContext.Provider value={{ dataState, dataDispatch }}>
            {children}
        </DataContext.Provider>
    );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
