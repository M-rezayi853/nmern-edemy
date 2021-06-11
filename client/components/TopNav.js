import { useState, useEffect, useContext } from 'react'
import { Menu } from 'antd'
import Link from 'next/link'
import { AppstoreOutlined, LoginOutlined, UserAddOutlined, CoffeeOutlined } from '@ant-design/icons'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import { Context } from '../context/index'

const { Item, SubMenu, ItemGroup } = Menu

const TopNav = () => {
  const [current, setCurrent] = useState('')

  // state
  const { state, dispatch } = useContext(Context)
  const { user } = state

  // router
  const router = useRouter()

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])

  const logout = async () => {
    dispatch({ type: 'LOGOUT' })
    window.localStorage.removeItem('user')
    const { data } = await axios.get('/api/logout')
    toast.info(data.message)
    router.push('/login')
  }

  return (
    <Menu mode='horizontal' selectedKeys={[current]}>
      <Item 
        icon={<AppstoreOutlined />} 
        key='/'
        onClick={e => setCurrent(e.key)}
      >
        <Link href='/'>
          <a>App</a>
        </Link>
      </Item>

      {user === null && (
        <>
          <Item 
            icon={<LoginOutlined />} 
            key='/login'
            onClick={e => setCurrent(e.key)}
          >
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </Item>

          <Item 
            icon={<UserAddOutlined />} 
            key='/register'
            onClick={e => setCurrent(e.key)}
          >
            <Link href='/register'>
              <a>Register</a>
            </Link>
          </Item>
        </>
      )}
      
      {user !== null && (
        <SubMenu 
          icon={<CoffeeOutlined />}
          title={user && user.name}
          className='ml-auto float-right'
          key='subMenu'
        >
          <ItemGroup>
            <Item 
              key='dashboard'
            >
              <Link href='/user'>
                <a>
                  Dashboard
                </a>
              </Link>
            </Item>

            <Item 
              key='logout'
              onClick={logout}
            >
              Logout
            </Item>
          </ItemGroup>
        </SubMenu>
      )}
    </Menu>
  )
}

export default TopNav