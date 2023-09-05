import React from 'react'
import Link from "next/link"


export default function Navbar() {
    return (
    <nav className="nav">
      
      <div className="navbar-logo">
        <img
          src="./llama1.png" // Replace with the path to your llama image
          alt="Llama"
          width="10" // Adjust the width as needed
          height="10" // Adjust the height as needed
        />
        </div>
      <div className='flex justify-end w-full'>
        <ul>
        <li className="active">
        <Link href='/'>
             Home
         </Link>
        </li>
        <li>
        <Link href='/about'>
            About
         </Link>        
        </li>
      </ul>
</div>




    </nav>
    )
 }