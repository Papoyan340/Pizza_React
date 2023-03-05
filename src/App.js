import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';


import { Header } from './Components';
import { Home, Cart } from './pages';

function App() {
   const [dataPizza, setDataPizza] = useState([]);

   useEffect(() => {

        Axios.get('http://localhost:3000/db.json').then(({data}) => {
        
        setDataPizza(data.pizzas)
      })

      // fetch('http://localhost:3000/db.json')
      //    .then((response) => response.json())
      //    .then((json) => {
      //       setDataPizza(json.pizzas);
      //    });
   }, []);

   return (
      <div className="wrapper">
         <div className="wrapper">
            <Header />
            <div className="content">
               <Route exact path="/" render={()=> <Home  dataPizza={dataPizza}/>} />
               <Route exact path="/cart" component={Cart} />
            </div>
         </div>
      </div>
   );
}

export default App;
