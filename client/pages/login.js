import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { SyncOutlined } from '@ant-design/icons'
import Link from 'next/link'

const Login = () => {
  const [email, setEmail] = useState('mahdi@gmail.com')
  const [password, setPassword] = useState('qwerty')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const { data } = await axios.post(`api/login`, { email, password })
      console.log('LOGIN RESPONSE', data)
      // toast.success('Registration successful.')

      // setLoading(false)
    } catch (err) {
      toast.error(err.response.data)

      setLoading(false)
    }
  }

  return (
    <>
      <h1 className='jumbotron text-center bg-primary square'>Login</h1>
      
      <div className='container col-md-4 offset-md-4 pb-5'>
        <form onSubmit={handleSubmit}>
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

          <button 
            type='submit' 
            className='btn btn-block btn-primary'
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : 'Submit'}
          </button>
        </form>

        <p className='text-center p-3'>
          Not yet registerd?{' '}
          <Link href='/register'>
            <a>
              Register
            </a>
          </Link>
        </p>
      </div>
    </>
  )
}

export default Login