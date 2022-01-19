import Nav from './Nav'

const Layout = ({ children }) => {
    return (
        <div>
            <main>
                <Nav />
                {children}
            </main>
        </div>
    )
}

export default Layout