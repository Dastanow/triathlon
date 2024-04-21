import { Outlet } from 'react-router-dom'
import { Footer, Header } from '@sections';
import { FloatingButtons } from '@components';

const Layout = () => {
    return (
        <>
            <Header />
            <main id="main">
                <Outlet />
            </main>
            <FloatingButtons />
            <Footer/>
        </>
    )
}

export default Layout