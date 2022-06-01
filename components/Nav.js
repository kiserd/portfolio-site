// library
import Link from 'next/link'
// component
import SocialIcon from './SocialIcon'

const Nav = () => {
    return (
        <nav className='grid grid-rows-3 p-5 pb-7 bg-custom-background'>
            <div className='pb-1 row-span-1 flex justify-center text-4xl font-semibold text-custom-text-primary'>
                D. LOGAN KISER
            </div>
            <div className='pb-1 row-span-1 flex justify-center text-xl font-light text-custom-text-secondary'>
                <div className='mr-5'>
                    <Link href='/'>
                        <a className="text-xl">Portfolio</a>
                    </Link>
                </div>
                <div className='mr-5'>
                    <Link href='/education'>
                        <a className="text-xl">Education</a>
                    </Link>
                </div>
                <div className=''>
                    <Link href='/personal'>
                        <a className="text-xl">About</a>
                    </Link>
                </div>
            </div>
            <div className='row-span-1 flex justify-center text-xl font-light'>
                <div className='mr-1'>
                        <a href='https://www.linkedin.com/in/logan-kiser-6a103b92/' className="text-xl">
                            <SocialIcon source='/icons/linkedin.png' />
                        </a>
                </div>
                <div className='mr-1'>
                        <a href='https://github.com/kiserd' className="text-xl">
                            <SocialIcon source='/icons/github.png' />
                        </a>
                </div>
                <div className=''>
                        <a href='/resume/resume.pdf' className="text-xl">
                            <SocialIcon source='/icons/pdf.png' />
                        </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav
