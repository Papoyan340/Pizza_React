import React from 'react'

import classNames from "classnames";

function Button({children, outline, className}){
    
  
    return (
        
        <button className={classNames('button', className, {'button--outline' : outline,})}>{children}</button>
    )
}


// class Button extends React.Component {

//     componentDidMount(){
//         console.log('button stexcvec');

//     }

//     componentDidUpdate(){
//         console.log('button@ tarmacav');
//     }

//       render() {
//         let text = this.props.children
        
//         console.log(this.props);
//         return (
//             <button className={classNames('button', {'button--outline' : this.props.outline,})}>{text}</button>
//         )
//       }
// }

export default Button;