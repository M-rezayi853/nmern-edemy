import { ToastContainer } from 'react-toastify'

import TopNav from '../components/TopNav'
import { Provider } from '../context/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import '../public/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ToastContainer position='top-right' />
      <TopNav />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp