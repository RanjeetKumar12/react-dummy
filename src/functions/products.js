import axios from "axios";

const fetchProducts = async (dataDispatch) => {
    try {
        const response = await axios.fetch("/api/products");
        dataDispatch({
            type: "LOAD_INITIAL_DATA",
            payload: response.data.products,
        });
    } catch (error) {
        console.log("Error:", error);
    }
    return dataDispatch;
};

const fetchCategories = async (dataDispatch) => {
    try {
        const response = await axios.fetch("/api/categories");
        dataDispatch({
            type: "LOAD_CATEGORIES",
            payload: response.data.categories,
        });
    } catch (error) {
        console.log("Error:", error);
    }
    return dataDispatch;
};

const fetchProduct = (products, productId) => {
    return products.find((product) => product._id === productId);
};

const fetchRelatedProducts = (products, category, id) => {
    return products.filter(
        (product) => product.categoryName === category && product.id !== id
    );
};

const fetchLatestProducts = (products) =>
    products.filter((product) => product.isLatest);

const fetchFeaturedProducts = (products) =>
    products.filter((product) => product.isFeatured);

export {
    fetchProducts,
    fetchCategories,
    fetchProduct,
    fetchRelatedProducts,
    fetchLatestProducts,
    fetchFeaturedProducts,
};
