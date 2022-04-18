import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Tracks",
    description:
      "Tracks provides the comfort of moving around also helping in uping one's style quotitent",
    
    isFeatured: false,
  },
  {
    _id: uuid(),
    categoryName: "Sneakers",
    description:
      "Stylish and Comfortable Sneakers allows the comfort of moving anywhere around also adding to one's styles",
   
    isFeatured: true,
  },
  {
    _id: uuid(),
    categoryName: "T-Shirts",
    description:
      "T-Shirts gives a funky appeal to individual's style quotitent",
    
    isFeatured: true,
  },
  {
    _id: uuid(),
    categoryName: "Watches",
    description:
      "Watches come in handy while helping in keeping track of time.",
   
    isFeatured: true,
  },

];
