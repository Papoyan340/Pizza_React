import React from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';

import { Header } from './Components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/actionsPizza';
// import store from './redux/store';

function App() {
   const dispach = useDispatch();

   window.test =()=> {
      Axios.get('http://localhost:3000/db.json').then(({ data }) => {
         dispach(setPizzas(data.pizzas));
      });
   }

   React.useEffect(() => {
      Axios.get('http://localhost:3000/db.json').then(({ data }) => {
         dispach(setPizzas(data.pizzas));
      });
   }, []);

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
