// library
import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <a className="text-xl">Home</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
