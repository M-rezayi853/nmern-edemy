import { useContext } from 'react'

import { Context } from '../../context/index'
import UserRoute from '../../components/routes/UserRoute'

const UserIndex = () => {
  const { state: { user } } = useContext(Context)

  return (
    <UserRoute>
      <h1 className='jumbotron text-center square'>
        <pre>{JSON.stringify(user, null, 4)}</pre>
      </h1>
    </UserRoute>
  )
}

export default UserIndex