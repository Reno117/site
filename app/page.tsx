import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <Link href='/carhacks' passHref>
            <div className='container'>
              <h1 className='text-3xl'>Carolina Hacks</h1>
              <img src="./car_hacks.png" alt="logo" />
            </div>
          </Link>
        <Link href='/hackclub' passHref>
          <div className="container2">
            <h1 className='text-3xl'>Hack Club Leader</h1>
            <img src='./proj2.png' alt="logo2" width="300px" />
          </div>
        </Link>
        <Link href='/reactproj' passHref>
        <div className="container3">
            <h1 className='text-3xl'>Portfolio Website</h1>
            <img src='./proj3.png' alt="logo" />
        </div>
        </Link>
        <div className="container4">
            <h1 className='text-3xl'>Future Projects</h1>
            <img src='./tbd.jpg' alt="logo2" width="300px" />
        </div>
        </div>
    </main>
  )
}
