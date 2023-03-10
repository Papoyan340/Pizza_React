import React from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';

import { Header } from './Components';
import { Home, Cart } from './pages';
import store from './redux/store';
import { setPizzas as setPizzasAction} from './redux/actions/actionsPizza';

// function App() {
//    // const [dataPizza, setDataPizza] = useState([]);

//    useEffect(() => {
//       Axios.get('http://localhost:3000/db.json').then(({ data }) => {
//          setDataPizza(data.pizzas);
//       });
//       console.log('render app');
//       // fetch('http://localhost:3000/db.json')
//       //    .then((response) => response.json())
//       //    .then((json) => {
//       //       setDataPizza(json.pizzas);
//       //    });
//    }, []);


//    return (
//       <div className="wrapper">
//          <div className="wrapper">
//             <Header />
//             <div className="content">
//                <Route exact path="/" render={() => <Home dataPizza={dataPizza} />} />
//                <Route exact path="/cart" component={Cart} />
//             </div>
//          </div>
//       </div>
//    );
// }

class App extends React.Component {


   componentDidMount() {
      Axios.get('http://localhost:3000/db.json').then(({ data }) => {
        this.props.setPizzas(data.pizzas);
      });
   }

   render() {
   
      return (
         <div className="wrapper">
            <Header />
            <div className="content">
               <Route exact path="/" render={() => <Home dataPizza={this.props.items} />} />
               <Route exact path="/cart" component={Cart} />
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      items: state.pizzas.items,
   };
};

const mapDispatchToProps =(dispatch)=> {
   return{
      setPizzas: (items)=> dispatch(setPizzasAction(items))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
