import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import quran from "../assets/holy-quran.webp"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="border-b pb-4 flex justify-between items-center pt-4 px-10">
        <div className="flex items-center gap-2">
          <img src={quran} alt="quran" width={100} />
          <h1 className="text-2xl font-semibold">Tafseer ul Quran</h1>
        </div>
        <nav className="space-x-6 hidden md:inline">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/tafseer-ul-quran" className="text-blue-600 hover:underline">Tafseer Ul Quran</Link>
          <Link to="/majmooa-hidayat" className="text-blue-600 hover:underline">Majmooa Hidayat</Link>
          <Link to="/alhayaalakhlaq" className="text-blue-600 hover:underline">Al Haya Al Akhlaq</Link>
          <Link to="/about" className='cursor-pointer text-blue-600 hover:underline'>About the Author</Link>
          <Link to="/contact" className='cursor-pointer text-blue-600 hover:underline'>Contact Us</Link>
        </nav>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-1 hidden md:inline"
          />
          <button className="menu-toggle md:hidden text-2xl z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>&#9776;</button>
        </div>


        {
          isMenuOpen &&
          <div className='flex justify-center bg-gray-200 absolute top-30 w-full py-2 z-10
          '>
            <ul className='flex flex-col gap-3'>
              <li>
                <Link to={"/"} className='cursor-pointer'>Home</Link>
              </li>
              <li>
                <Link to={"/tafseer-ul-quran"} className='cursor-pointer'>Tafseer Ul Quran</Link>
              </li>
              <li>
                <Link to={"/majmooa-hidayat"} className='cursor-pointer'>Majmooa Hidayat</Link>
              </li>
              <li>
                <Link to={"/alhayaalakhlaq"} className='cursor-pointer'>Al Haya Al Akhlaq</Link>
              </li>
              <li>
                <Link to={"/about"} className='cursor-pointer'>About the Author</Link>
              </li>
              <li>
                <Link to={"/contact"} className='cursor-pointer hover:underline'>Contact Us</Link>
              </li>

            </ul>
          </div>
        }
      </header>

    </>
  )
}
