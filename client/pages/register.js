import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { SyncOutlined } from '@ant-design/icons'
import Link from 'next/link'

const Register = () => {
  const [name, setName] = useState('mahdi')
  const [email, setEmail] = useState('mahdi@gmail.com')
  const [password, setPassword] = useState('qwerty')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const { data } = await axios.post(`api/register`, { name, email, password })
      // console.log('REGISTER RESPONSE', data)
      toast.success('Registration successful.')

      setLoading(false)
    } catch (err) {
      toast.error(err.response.data)

      setLoading(false)
    }
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

          <button 
            type='submit' 
            className='btn btn-block btn-primary'
            disabled={!name || !email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : 'Submit'}
          </button>
        </form>

        <p className='text-center p-3'>
          Already registerd?{' '}
          <Link href='/login'>
            <a>
              Login
            </a>
          </Link>
        </p>
      </div>
    </>
  )
}

export default Register