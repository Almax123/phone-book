import React from 'react'

const Avatar = ({ava}) => {
  return (
    <div>
      <span>
          {ava.fName.charAt(0)+ava.lName.charAt(0)}
      </span>
    </div>
  )
}

export default Avatar