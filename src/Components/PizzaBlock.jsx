import React, { useState, memo } from 'react';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
// import { LoadingPizza } from "./index";

function PizzaBlock(obj) {
   const { imageUrl, name, price, types, sizes } = obj;

   const [activeType, setActiveType] = useState(types[0]);
   const [activeSizes, setActiveSizes] = useState(sizes[0]);
 
   // if (isLoading) {
   //    return  <LoadingPizza/>
   // }
   const typeNames = ['тонкое', 'традиционное'];
   const onSelectType = (idx) => {
      setActiveType(idx);
   };

   const availableSizes = [26, 30, 40];
   const onSelectSizes = (idx) => {
      setActiveSizes(idx);
   };

   return (
      <div className="pizza-block">
   
         <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
         <h4 className="pizza-block__title">{name}</h4>
         <div className="pizza-block__selector">
            <ul>
               {typeNames.map((el, idx) => (
                  <li
                     key={el}
                     onClick={() => onSelectType(idx)}
                     className={classNames({
                        active: activeType === idx,
                        disabled: !types.includes(idx),
                     })}>
                     {el}
                  </li>
               ))}
            </ul>
            <ul>
               {availableSizes.map((size, idx) => (
                  <li
                     key={size}
                     onClick={() => onSelectSizes(size)}
                     className={classNames({
                        active: activeSizes === size,
                        disabled: !sizes.includes(size),
                     })}>
                     {size} см.
                  </li>
               ))}
            </ul>
         </div>
         <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price} ₽</div>

            <div className="button button--outline button--add">
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                     fill="white"
                  />
               </svg>

               <span>Добавить</span>
               <i>2</i>
            </div>
         </div>
      </div>
   );
}

PizzaBlock.propTypes = {
   name: PropTypes.string.isRequired,
   imageUrl: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   types: PropTypes.arrayOf(PropTypes.number).isRequired,
   sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
   // isLoading: PropTypes.bool,
};

PizzaBlock.defaultProps = {
   name: '---',
   types: [],
   price: 0,
   sizes: [],
   // isLoading: false,
   imageUrl: 'no images',
};

export default memo(PizzaBlock, (prev, next) => JSON.stringify(prev) === JSON.stringify(next));
