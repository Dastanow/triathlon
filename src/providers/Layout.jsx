import { Outlet } from 'react-router-dom'
import { Footer, Header } from '@sections';

const Layout = () => {
    return (
        <>
            <Header />
            <main id="body">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default Layout