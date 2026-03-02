import Header from '../components/furnitureEnquiry/Header'
import { Outlet } from 'react-router-dom'

const FurnitureEnquiryLayout = () => {
  return (
    <>
       {/* header  */}
          <Header />
    
          {/* child components  */}
          <Outlet />
    </>
  )
}

export default FurnitureEnquiryLayout