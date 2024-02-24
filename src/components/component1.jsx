import React, { useContext } from 'react'
import UserContext from '../context'

function Component1() {
  const contextData = useContext(UserContext)
  console.log(contextData,"Component1");
  return (
    <div>
      {contextData?.userName}
    </div>
  )
}

export default Component1
