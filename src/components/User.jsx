import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user}) => {
  return (
    <div className='user'> 
      <h1> Name  : {user.name} </h1>
      <h3> Email : {user.username} </h3>
      <button className=""><Link to={`/users/${user.id}`                                                                        }> View More </Link> </button>
    </div>
  )
}

export default User