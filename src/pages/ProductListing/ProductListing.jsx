import React ,{useState} from 'react'
// import { Header, ProductCard, ProductsFilter, Navbar } from '../../components'
import { useData} from "../../context/";
// import {
//   sortData,
//   ratingData,
//   getOutOfStockData,
//   filterPriceData,
//   categoryData,
//   // deliveryData,
//   getPremiumProducts,
// } from "../../functions/";


const ProductListing = () => {
  // const [responsiveFilter, setResponsiveFilter] = useState(false);
  const {
    dataState: { products },
  } = useData();
  console.log(products)
  // const {
  //   filterState: {
  //     sortBy,
  //     category,
  //     rating,
  //     includeOutOfStock,
  //     priceRangeValue,
  //     isDeliverable,
  //     isFastDeliverable,
  //   }
  // } = useFilter()

  // const responsiveFilterHandler = () => setResponsiveFilter(true)
  // const categorizedData = categoryData(products, category);
  // const ratedData = ratingData(categorizedData, rating);
  // const getOutOfStockedData = getOutOfStockData(ratedData, includeOutOfStock);
  // const filteredData = filterPriceData(getOutOfStockedData, priceRangeValue);
  // // const isdeliveryData = deliveryData(products, isDeliverable)
  // // const isFastDeliverAbleData = deliveryData(products, isFastDeliverable)
  // const sortedData = sortData(filteredData, sortBy);
  return (

    <>
      <div className="container">
        {/* <Header/>
        <ProductsFilter/>
        <ProductCard/> */}
      </div>
    </>
  )
}

export default ProductListing