import React from 'react';

import { Categories, SortPopup, PizzaBlock } from '../Components';

function Home({ dataPizza }) {
   
   return (
      <div className="container">
         <div className="content__top">
            <Categories
               onClick={(name) => console.log(name)}
               items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
            />
            <SortPopup items={['популярности', 'цене', 'алфавиту']} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {dataPizza.map((obj) => (
               <PizzaBlock key={obj.id} {...obj} />
            ))}
         </div>
      </div>
   );
}

export default Home;