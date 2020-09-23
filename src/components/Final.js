import React from 'react';
import { MyContext } from '../context/MyProvider';


// const Final = () =>
//   <MyContext.Consumer>
//     {context =>
//       <div>
//         <hr />
//         <p>Finally we are at Final.js</p>
//         <p>Name:{context.state.name}</p>
//         <p>Age:{context.state.age}</p>
//         <button onClick={context.birthdayTime}>Click</button>
//       </div>
//     }
//   </MyContext.Consumer>

const Final = () => {
  const {state, birthdayTime} = React.useContext(MyContext);
  return (
    <div>
      <hr />
      <p>Finally we are at Final.js</p>
      <p>Name:{state.name}</p>
      <p>Age:{state.age}</p>
      <button onClick={() => birthdayTime('dog')}>Click</button>
    </div>
  )
}


export default Final;