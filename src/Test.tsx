import React from 'react'
import useCounterStore from './stores/store'

const Test = () => {

 const {counter} = useCounterStore();

  return (
    <div>
        <h1>{counter}</h1>
    </div>
  )
}

export default Test