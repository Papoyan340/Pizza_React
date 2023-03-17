import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../Components';
import { setCategory } from '../redux/actions/actionsFilter';
import { fetchPizzas } from '../redux/actions/actionsPizza';

const categoriesName = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
   { name: 'популярности', type: 'popular' },
   { name: 'цене', type: 'price' },
   { name: 'алфавиту', tupe: 'alphabet' },
];

function Home() {
   const dispatch = useDispatch();

   const { items } = useSelector(({ pizzas }) => {
      return {
         items: pizzas.items,
      };
   });

   React.useEffect(() => {
      dispatch(fetchPizzas());
   }, []);

   const onSelectCategoru = React.useCallback((idx) => {
      console.log(idx);
      dispatch(setCategory(idx));
   }, []);

   return (
      <div className="container">
         <div className="content__top">
            <Categories onClick={onSelectCategoru} items={categoriesName} />
            <SortPopup items={sortItems} />
         </div>

         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
         </div>
      </div>
   );
}

export default Home;
