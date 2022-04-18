import { React } from 'react'
import Data from './Data'
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, far } from 'fontawesome.macro'

const ProductCard = () => {
  return (
    <div className="products-container">
      {
        Data.map((item) => (
          <div className="ecom-card" key={item._id}>
            <div className="card-details">
              <a href="#" className="card-link">
                <img src={item.imageSrc} alt="" className="card-image ecom-img" />
              </a>
            </div>
            <a href="#" className="card-title link-title">{item.title}</a>
            <div className="card-flex">
              <div className="card-rating">
                {item.rating} <i className="fa-solid fa-star"></i>
              </div>
              <p className="card-bought">{item.timesBought}</p>
              </div>
              <div className="card-price-flex">
                <div className="card-disprice"><i className="fa-solid fa-indian-rupee-sign"></i>{item.discount}
                </div>
                <div className="card-price strikeoff">
                  <i className="fa-solid fa-indian-rupee-sign strikeoff" ></i>{item.discount}
                </div>
                <div className="card-discount">{item.discount}% off</div>
              </div>
            
          </div>
        )

        )
      }
    </div>
  )
}

export default ProductCard



// {
//   Data.map(item =>
//     Object.keys(item).map(itemKey => {
//       let obj = item[itemKey]
//       let flag = false
//       return (
//         <>
//           <div className='ecom-card' key={obj.id}>
//             <div className="card-details">
//               <a href="#" className="card-link">
//                 <img src={obj.img} alt="watch-image" className="card-image ecom-img" />
//               </a>
//             </div>
//             <a href="" className="card-title link-title">{obj.prodTitle}</a>
//             <div className="card-flex">
//               <div className="card-rating">
//                 {obj.prodRating}<FontAwesomeIcon className='card-rating' icon={fas('star')} />
//               </div>
//               <p className="card-bought">{obj.prodBought}</p>
//             </div>
//             <div className="card-price-flex">
//               <div className="card-disprice">
//                 <FontAwesomeIcon icon={fas('indian-rupee-sign')} /> {obj.prodDiscPrice}
//               </div>
//               <div className="card-price strikeoff">
//                 <FontAwesomeIcon icon={fas('indian-rupee-sign')} className='strikeoff' />{obj.prodPrePrice}
//               </div>
//               <div className="card-discount">{obj.prodDisc}</div>
//             </div>
//           </div>
//         </>
//       )
//     }

//     )
//   )
// }