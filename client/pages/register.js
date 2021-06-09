import { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState('mahdi')
  const [email, setEmail] = useState('mahdi@gmail.com')
  const [password, setPassword] = useState('qwerty')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // console.table({ name, email, password })
    const { data } = await axios.post(`http://localhost:8000/api/register`, { name, email, password })
    console.log('REGISTER RESPONSE', data)
  }

  return (
    <>
      <h1 className='jumbotron text-center bg-primary square'>Register</h1>
      
      <div className='container col-md-4 offset-md-4 pb-5'>
        <form onSubmit={handleSubmit}>
          <input 
            className='form-control mb-4 p-4'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Enter Name'
            required
          />

          <input 
            className='form-control mb-4 p-4'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Enter Email'
            required
          />

          <input 
            className='form-control mb-4 p-4'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Enter Password'
            required
          />

          <button type='submit' className='btn btn-block btn-primary'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Register