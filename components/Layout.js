import Nav from './Nav'

const Layout = ({ children }) => {
    return (
        <div>
            <main className='min-h-screen bg-custom-background'>
                <Nav />
                {children}
            </main>
        </div>
    )
}

export default Layout