import React, { Component, useState } from 'react';

export const MyContext = React.createContext();


// class MyProvider extends Component {

//   state = {
//     name: 'Marc',
//     age: 18
//   }

//   render() {
//     return (
//       <MyContext.Provider value={{
//         state: this.state,
//         birthdayTime: () => this.setState({age: this.state.age + 1})
//       }}>
//         {this.props.children}
//       </MyContext.Provider>
//     )
//   }
// }

const MyProvider = props => {
  const [state, setState] = useState({
    name: 'Marc',
    age: 18
  })
  return (
    <MyContext.Provider value={{
      state,
      birthdayTime: (somethingVariable) => setState({ ...state, [somethingVariable]: state[somethingVariable] + 1 })
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyProvider;