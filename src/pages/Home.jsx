import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, LoadingPizza } from '../Components';
import { setCategory } from '../redux/actions/actionsFilter';
import { fetchPizzas } from '../redux/actions/actionsPizza';

const categoriesName = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
   { name: 'популярности', type: 'popular' },
   { name: 'цене', type: 'price' },
   { name: 'алфавиту', tupe: 'alphabet' },
];


function Home() {
   const dispatch = useDispatch();

   const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
   const { sortBy, category } = useSelector(({ filters }) => filters);
   
   React.useEffect(() => {
      dispatch(fetchPizzas());
   }, [category]);

   const onSelectCategoru = React.useCallback((idx) => {
      dispatch(setCategory(idx));
   }, []);

   return (
      <div className="container">
         <div className="content__top">
            <Categories
               onClickCategory={onSelectCategoru}
               activeCategory={category}
               items={categoriesName}
            />
            <SortPopup activeSortType={sortBy} items={sortItems} />
         </div>

         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {isLoaded
               ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
               : Array(12)
                    .fill(0)
                    .map((e, idx) => <LoadingPizza key={idx} />)}
         </div>
      </div>
   );
}

export default Home;
