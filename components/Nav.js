// library
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className='p-5 pb-10 items-center justify-between bg-custom-background text-custom-cool-extraLight'>
            <div className='flex justify-center'>
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
