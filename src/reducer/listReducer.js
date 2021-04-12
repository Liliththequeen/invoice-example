let listReducer = (state, action) => {
    switch (action.type) {
      case 'addList':
        return [...state]
      default:
        return state
    }
  }

  export default listReducer;