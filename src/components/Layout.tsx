import { Outlet } from 'react-router'
import Header from './Header'
import { ScrollRestoration } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <ScrollRestoration />
            <Header />
            <div >
                <Outlet />
            </div>
            <div className='w-full text-black text-center py-4 border-t border-primary border-solid'>Recipe Generator</div>
        </div>
    )
}

export default Layout