import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header1 from './Header1/Header1'

const Layout = () => {
    return (
        <div>
            <Header1/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout