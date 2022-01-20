// library
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className='p-5 items-center justify-between bg-custom-cool-dark text-custom-cool-extraLight'>
            <div className='flex'>
                <div className='mr-6'>
                    <Link href='/'>
                        <a className="text-xl">Home</a>
                    </Link>
                </div>
                <div className='mr-6'>
                    <Link href='/projects'>
                        <a className="text-xl">Projects</a>
                    </Link>
                </div>
                <div className='mr-6'>
                    <Link href='/personal'>
                        <a className="text-xl">Personal</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
