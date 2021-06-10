import { ToastContainer, toast } from 'react-toastify'

import TopNav from '../components/TopNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import '../public/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position='top-right' />
      <TopNav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp