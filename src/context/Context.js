// import React, { createContext, useReducer, useState } from 'react'
// import { node } from 'prop-types'
// import listReducer from '../reducer/listReducer';

// export const MainContext = createContext();
// // create Store
// function Store({ children }) {


// const [list, setlist] = useState([])
//   const [state, dispatch] = useReducer(listReducer, list);
//   const value = { state, dispatch };

//   return (
//     <MainContext.Provider value={value}>
//       {children}
//     </MainContext.Provider>
//   )
// }
// Store.defaultProps = {
//   children: null
// }
// Store.propTypes = {
//   children: node
// }
// export default Store;