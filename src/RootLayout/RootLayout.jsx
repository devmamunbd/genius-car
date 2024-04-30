import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'

const RootLayout = () => {
  return (
    <div>
      <div className='w-[1160px] mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet>
      
    </div>
    <div>
    <Footer></Footer>
    </div>
    </div>
    
  )
}

export default RootLayout