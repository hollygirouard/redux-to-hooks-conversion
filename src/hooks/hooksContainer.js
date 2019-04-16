import React, { useState, useEffect, useReducer, useContext } from 'react'
import * as Reducer from '../store/hooksState/hooksReducer'
import * as ACTIONS  from '../store/actions/actions'
import Context from '../utils/context'

const HooksContainer = () => {
  const context = useContext(Context)
  // const stateValue = useState(0)[0]
  // const setValue = useState(0)[1]

  const [ stateValue, setValue ] = useState(0)
  const [ useEffectValue, setUseEffectValue ] = useState('')

  const [ state, dispatch ] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  useEffect(() => {
    setTimeout(() => setUseEffectValue("Use Effect Worked"), 3000)
  })

  const incrementValue = () => {
    setValue(stateValue + 1)
  }

  const decrementValue = () => {
    setValue(stateValue -1)
  }

  const changeUseEffectValue = () => {
    setUseEffectValue('Some String')
  }

  const handleDispatchTrue = () => {
    // dispatch(ACTIONS.SUCCCESS)
    //dispatch(type: SUCCESS)
    dispatch(ACTIONS.success())
  }

  const handleDispatchFalse = () => {
    dispatch(ACTIONS.failure())
  }

  return (
    <div>
      React
      <br />
      <button onClick={ () => incrementValue() }>Inc Local State</button>
      <button onClick={ () => decrementValue() }>Dec Local State</button>
      <br />
      <button onClick={ () => changeUseEffectValue() }>Change Use Effect</button>
      <br />
      <button onClick={ () => handleDispatchTrue() }>Dispatch True</button>
      <button onClick={ () => handleDispatchFalse() }>Dispatch False </button>
      <br />
      <button onClick={ () => context.addGlobalValue() }>Inc Global State</button>
      <button onClick={ () => context.decGlobalValue() }>Dec Global State</button>
      <br />
      <button onClick={ () => context.dispatchContextTrue() }>Dispatch Context True</button>
      <button onClick={ () => context.dispatchContextFalse() }>Dispatch Context False</button>
      <br />
      <div>
        { useEffectValue ?
        <p>{ useEffectValue}</p>
        : <p>No Value</p>
        }
        <br />
        {
          state.stateprop1 ?
          <p> State Prop 1 True</p>
        :
          <p> State Prop 1 False</p>
        }
        <br />
        {
          state.stateprop2 ?
          <p> State Prop 2 True</p>
        :
          <p> State Prop 2 False</p> 
        }
        <p>Local State: { stateValue }</p>
        <br />
        <p>Global State: { context.valueGlobalState }</p>
      </div>
    </div>
  )
}

export default HooksContainer
