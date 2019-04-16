import React, { useState, useReducer } from 'react'
import * as Reducer from './store/hooksState/hooksReducer'
import * as UserReducer from './store/hooksState/userInputHooksReducer'
import * as ACTIONS  from './store/actions/actions'
import Routes from './routes'
import Context from './utils/context'

const App = () => {
  const [ stateGlobal, setStateGlobal] = useState(0)

  const [ stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  const [ stateUser, dispatchUser ] = useReducer(UserReducer.UserReducer, UserReducer.initialState)

  const incrementGlobalState = () => {
    setStateGlobal(stateGlobal + 1)
  }

  const decrementGlobalState = () => {
    setStateGlobal(stateGlobal -1)
  }

  const handleContextDispatchTrue = () => {
    // dispatch(ACTIONS.SUCCCESS)
    //dispatch(type: SUCCESS)
    dispatchContextGlobal(ACTIONS.success())
  }

  const handleContextDispatchFalse = () => {
    dispatchContextGlobal(ACTIONS.failure())
  }

  const handleUseContextChange = () => {
    // dispatch(ACTIONS.SUCCCESS)
    //dispatch(type: SUCCESS)
    dispatchUser(ACTIONS.user_input_change())
  }

  const handleUseContextSubmit = (event) => {
    event.preventDefault()
    event.persist()
    dispatchUser(ACTIONS.user_input_submit(event.target.useContext.value))
  }

  return (
    <div>
      React
      <Context.Provider value={ {
        valueGlobal: stateGlobal,
        addGlobalValue: () => incrementGlobalState(),
        decGlobalValue: () => decrementGlobalState(),

        reducerGlobalState: stateContextGlobal.stateprop2,
        dispatchContextTrue: () => handleContextDispatchTrue(),
        dispatchContextFalse: () => handleContextDispatchFalse(),

        useContextChange: stateUser.user_input_change,
        useContextSubmit: stateUser.user_input_submit,
        useContextHandleChange: (event) => handleUseContextChange(),
        useContextHandleSubmit: (event) => handleUseContextSubmit(),
        } }
      >
        <Routes />
      </Context.Provider>
    </div>
  )
}

export default App
