import { v4 as uuid } from "uuid";
import { 
  iImg1, iImg2, iImg3, 
  iImg4, iImg5, iImg6, 
  iImg7, iImg8, iImg9
} from '../../assets'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Red T-Shirt",
    price: "999",
    discount: "40",
    categoryName: "T-Shirts",
    rating: "4",
    inStock: true,
    isFeatured: true,
    isDeliverable: true,
    isFastDeliverable:true,
    isLatest: false,
    badge: "New",
    imageSrc: iImg1,
    timesBought: 35,
    description:
      "Give your summer wardrobe a style upgrade with this Men's Active T-Shirt.Team it with a pair of shorts for your morning workout or a denims for an evening out.",
    sizes: ["XXL", "XL", "L", "M"],
  },
  
];

export default products



 // product1:{
    //     _id:uuid(),
    //     img:iImg1,
    //     prodTitle:'Way Kambas Maple',
    //     prodRating:'4.1',
    //     prodBought:'(49)',
    //     prodPrePrice:'Rs 36,000',
    //     prodDiscPrice:'Rs 25,000',
    //     prodDisc:'16% off'
    // },
    // product2:{
    //     _id:uuid(),
    //     img:iImg1,
    //     prodTitle:'Way Kambas Maple',
    //     prodRating:'4.1',
    //     prodBought:'(49)',
    //     prodPrePrice:'Rs 36,000',
    //     prodDiscPrice:'Rs 25,000',
    //     prodDisc:'16% off'
    // },
    // product3:{
    //     _id:uuid(),
    //     img:iImg1,
    //     prodTitle:'Way Kambas Maple',
    //     prodRating:'4.1',
    //     prodBought:'(49)',
    //     prodPrePrice:'Rs 36,000',
    //     prodDiscPrice:'Rs 25,000',
    //     prodDisc:'16% off'
    // },
    // product4:{
    //     _id:uuid(),
    //     img:iImg1,
    //     prodTitle:'Way Kambas Maple',
    //     prodRating:'4.1',
    //     prodBought:'(49)',
    //     prodPrePrice:'Rs 36,000',
    //     prodDiscPrice:'Rs 25,000',
    //     prodDisc:'16% off'
    // },
    
// }