import React, { useState } from 'react';

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = useState('');

  // const state = React.useState(null);
  // const activeItem = state[0];
  // const setActiveItem = state[1];
  // useState  ashxatanq@ takic

  const onSelectItem = (idx) => {
    setActiveItem((prev) => (prev = idx));
  };

  return (
    <div className="categories">
      <ul>
        <li>Все</li>
        {items?.map((el, idx) => (
          <li
            onClick={() => onSelectItem(idx)}
            key={`${el}_ ${idx}`}
            className={activeItem === idx ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

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

export default Categories;
