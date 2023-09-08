import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <Link href='/carhacks' passHref>
            <div className='container'>
              <h1 className='text-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Carolina Hacks</h1>
              <img src="./car_hacks.png" alt="logo" className="w-full sm:w-1/5 md:w-1/4 lg:w-1/3 xl:w-1/2" />
            </div>
          </Link>
        <Link href='/hackclub' passHref>
          <div className="container2">
            <h1 className='text-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Hack Club Leader</h1>
            <img src='./proj2.png' alt="logo2" className="w-full sm:w-1/5 md:w-1/4 lg:w-1/3 xl:w-1/2"/>
          </div>
        </Link>
        <Link href='/reactproj' passHref>
        <div className="container3">
            <h1 className='text-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Portfolio Website</h1>
            <img src='./proj3.png' alt="logo" className="w-full sm:w-1/5 md:w-1/4 lg:w-1/3 xl:w-1/2"/>                                              
        </div>
        </Link>
        <div className="container4">
            <h1 className='text-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Future Projects</h1>
            <img src='./tbd.jpg' alt="logo2" className="w-full sm:w-1/5 md:w-1/4 lg:w-1/3 xl:w-1/2" />
        </div>
        </div>
    </main>
  )
}
