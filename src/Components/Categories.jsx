import React from 'react';
import { PropTypes } from 'prop-types'

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
   

   // const state = React.useState(null);
   // const activeItem = state[0];
   // const setActiveItem = state[1];
   // useState  ashxatanq@ takic

  
  

   return (
      <div className="categories">
         <ul>
            <li className={activeCategory === null ? 'active' : ''} onClick={()=> onClickCategory(null)}>Все</li>
            {items?.map((el, idx) => (
               <li
                  onClick={() => onClickCategory(idx)}
                  key={`${el}_ ${idx}`}
                  className={activeCategory === idx ? 'active' : ''}>
                  {el}
               </li>
            ))}
         </ul>
      </div>
   );
});



Categories.propTypes = {
   activeCategory:PropTypes.number,
   items: PropTypes.array.isRequired,
   onClickCategory: PropTypes.func
};

Categories.defaultProps = { activeCategory: null, items: [] };




// class Categories extends React.Component {

//   state = {
//     activeItems: null
//   }

//   onselectItems =(idx) => {
//     this.setState({
//       activeItems: idx
//     })
//     // this.forceUpdate() kanchum e rerender
//   }

//   render(){

//     const {items, onClick} = this.props

//     return (
//       <div className="categories">
//           <ul>
//             <li>Все</li>
//            {
//               items.map((el, idx) => <li  onClick={() => this.onselectItems(idx)} key={`${el}_ ${idx}`}
//                                           className={this.state.activeItems === idx ? 'active' : ''}
//                                         >{el}</li>)
//            }

//           </ul>
//       </div>
//     )
//   }
// }

export default Categories
// export default React.memo(Categories, (prev, next) => JSON.stringify(prev) === JSON.stringify(next));
