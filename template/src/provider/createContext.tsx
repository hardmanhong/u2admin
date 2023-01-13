import React, { useContext, useEffect, useState } from 'react'

function createCtx(initialValue: any) {
  const storeContext = React.createContext(undefined)
  const dispatchContext = React.createContext(undefined)
  const useStore = () => {
    const context = useContext(storeContext)
    if (context === undefined) {
      throw new Error('useStore')
    }
    return context
  }

  const useDispatch = () => {
    const context = useContext(dispatchContext)
    if (context === undefined) {
      throw new Error('useDispatch')
    }
    return context
  }

  const ContextProvider = ({ children }) => {
    const [state, dispatch] = useState(initialValue)

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={state}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    )
  }

  return [ContextProvider, useStore, useDispatch]
}
export default createCtx
