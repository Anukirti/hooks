import React, {useContext} from 'react'
import {UserContext, ChannelContext} from '../../App'
import ComponentC from './ComponentC'

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
      <ComponentC/>
      {user} - {channel}
    </div>
  )
}

export default ComponentE
