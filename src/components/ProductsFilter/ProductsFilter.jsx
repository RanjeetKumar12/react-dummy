
import "./ProductsFilter.css";


// import { useData } from "../../context";

// const ProductsFilter = ({
//     setResponsiveFilter,
//     responsiveFilter,
//     categoryCheck,
// }) => {
// //     const {
// //         filterState: {
// //             sortBy,
// //             category: categoryState,
// //             isFeatured,
// //             isFastDeliverable,
// //             isDeliverable,
// //             rating,
// //             priceRange,
// //             includeOutOfStock,
// //         },
// //         filterDispatch,
// //     } = useFilter();

//     const {
//         dataState: { categories },
//     } = useData();
//     const responsiveFilterClose = () => setResponsiveFilter(false);
//     return (
//         <section className={responsiveFilter ? "fl-section active" : "fl-section"}>
//             <div className="fl-heading">
//                 <h2 className="fl-title"> Filters </h2>
//                 <button
//                     className="fl-clear"
//                     onClick={() =>
//                         filterDispatch({
//                             type: "CLEAR",
//                         })
//                     }>
//                     Clear
//                 </button>
//                 <button onClick={responsiveFilterClose} className="cross">
//                     <i className="fa-solid fa-xmark"> </i>{" "}
//                 </button>
//             </div>
//             <div className="fl-container">
//                 <h3 className="fl-title premium-fl">Matoa Premium</h3>
//                 <div className="fl-type">
//                     <input
//                         type="checkbox"
//                         className="fl-option"
//                         name="premium"
//                         onChange={() => filterDispatch({ type: "PREMIUM" })}
//                     />
//                     <label htmlFor="premium">
//                         <i class="fa-solid fa-shapes brand-logo secondary-bg"></i>Matoa
//                     </label>
//                 </div>
//             </div>
//             <div className="fl-container">
//                 <h3 className="fl-title delivery-fl">Delivery</h3>
//                 <div className="fl-type">
//                     <input
//                         type="checkbox"
//                         name="f-del"
//                         className="fl-option"
//                         onChange={() =>
//                             filterDispatch({ type: DELIVERY_DATE, payload: "NEXT_DAY" })
//                         }
//                         checked={isFastDeliverable = true}
//                     />
//                     <label htmlFor="f-del">Next Day Delivery</label>
//                 </div>
//                 <div className="fl-type">
//                     <input
//                         type="checkbox"
//                         name="del"
//                         className="fl-option"
//                         onChange={() =>
//                             filterDispatch({ type: DELIVERY_DATE, payload: "TWO_DAY" })
//                         }
//                         checked={isDeliverable = true}
//                     />
//                     <label htmlFor="del">Get in 2 Days</label>
//                 </div>
//             </div>
//             {!categoryCheck ? (
//                 <div className="fl-container">
//                     <h3 className="fl-title category-fl">Category</h3>
//                     {categories.map((category) => {
//                         return (
//                             <div className="fl-type" key={category.id}>
//                                 <input
//                                     type="checkbox"
//                                     id={category.id}
//                                     name={category.categoryName}
//                                     checked={categoryState.includes(category.categoryName)}
//                                     onChange={() =>
//                                         filterDispatch({
//                                             type: "CATEGORY",
//                                             payload: { categoryType: category.categoryName },
//                                         })
//                                     }
//                                 />
//                                 <label htmlFor={category.id}>{category.categoryName}</label>
//                             </div>
//                         );
//                     })}
//                 </div>
//             ) : null}
//             <div className="fl-container">
//                 <div className="fl-title rating-fl">Rating</div>
//                 <div className="fl-type">
//                     <input type="radio" name='four-star' className="fl-option" value='4' checked={rating === '4'} onChange={(e) => ({ type: "RATING", payload: e.target.value })} />
//                     <label htmlFor="4-star">Above 4 stars </label>
//                 </div>
//                 <div className="fl-type">
//                     <input type="radio" name='three-star' className="fl-option" value='3' checked={rating === '3'} onChange={(e) => ({ type: "RATING", payload: e.target.value })} />
//                     <label htmlFor="rating">Above 3 stars </label>
//                 </div>
//                 <div className="fl-type">
//                     <input type="radio" name='two-star' className="fl-option" value='2' checked={rating === '2'} onChange={(e) => ({ type: "RATING", payload: e.target.value })} />
//                     <label htmlFor="rating">Above 2 stars </label>
//                 </div>
//                 <div className="fl-type">
//                     <input type="radio" name='one-star' className="fl-option" value='1' checked={rating === '1'} onChange={(e) => ({ type: "RATING", payload: e.target.value })} />
//                     <label htmlFor="rating">Above 1 stars </label>
//                 </div>
//             </div>
//             <div className="fl-container">
//                 <div className="fl-title">Price</div>
//                 <div className="fl-type price-fl">
//                     <span className="fl-flex">
//                         <label htmlFor="min-amt">Min. Amt </label>
//                         <input type="number" name='min-amt' className="fl-option" value='10000' onChange={(e) => { filterDispatch({ type: "PRICE", payload: e.target.value }) }} />
//                     </span>
//                     <div className="fl-space">-</div>
//                     <span className="fl-flex">
//                         <label htmlFor="max-amt">Max. Amt</label>
//                         <input type="number" name='max-amt' className="fl-option" value='80000' onChange={(e) => { filterDispatch({ type: "PRICE", payload: e.target.value }) }} />
//                     </span>
//                 </div>
//             </div>
//             <div className="fl-container">
//                 <div className="fl-title">Sort By</div>
//                 <div className="fl-type sortBy-fl">
//                     <input type="radio" name='feat' className="fl-option" onChange={() => filterDispatch({ type: 'SORT_BY', payload: "FEATURED" })} />
//                     <label htmlFor="feat">Featured</label>
//                     checked = {sortBy === "FEATURED"}
//                 </div>
//                 <div className="fl-type sortBy-fl">
//                     <input type="radio" name='acr' className="fl-option" onChange={() => filterDispatch({ type: 'SORT_BY', payload: "AVG_CUST_REVIEW" })} />
//                     <label htmlFor="acr">Average Customer Review</label>
//                     checked = {sortBy === "AVG_CUST_REVIEW"}
//                 </div>
//                 <div className="fl-type sortBy-fl">
//                     <input type="radio" name='htol' className="fl-option" onChange={() => filterDispatch({ type: 'SORT_BY', payload: "HIGH_TO_LOW" })} />
//                     <label htmlFor="feat">Featured</label>
//                     checked = {sortBy === "HIGH_TO_LOW"}
//                 </div>
//                 <div className="fl-type sortBy-fl">
//                     <input type="radio" name='ltoh' className="fl-option" onChange={() => filterDispatch({ type: 'SORT_BY', payload: "LOW_TO_HIGH" })} />
//                     <label htmlFor="ltoh">Featured</label>
//                     checked = {sortBy === "LOW_TO_HIGH"}
//                 </div>
//             </div>
//             <div className="fl-container">
//                 <h3 className="fl-title">Other Filters</h3>
//                 <div className="fl-type">
//                     <input
//                         type="checkbox"
//                         id="only-in-stock"
//                         checked={!includeOutOfStock}
//                         onChange={() => filterDispatch({ type: "REMOVE_OUT_OF_STOCK" })}
//                     />
//                     <label htmlFor="only-in-stock">Only In Stock</label>
//                 </div>
//             </div>

//         </section>
//     );
// };

// export default ProductsFilter
import React from "react";

const ProductsFilter = () => {
  return <div>ProductsFilter</div>;
};

export default ProductsFilter;
