import React from 'react';
import { Route } from 'react-router-dom';

// import { connect } from 'react-redux';

import { Header } from './Components';
import { Home, Cart } from './pages';


function App() {
   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
         </div>
      </div>
   );
}

export default App;

// const mapStateToProps = (state) => {
//    return {
//       items: state.pizzas.items,
//    };
// };

// const mapDispatchToProps = {
//    setPizzas,
// };

// const mapDispatchToProps =(dispatch)=> {
//    return{
//       setPizzas: (items)=> dispatch(setPizzasAction(items))
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
