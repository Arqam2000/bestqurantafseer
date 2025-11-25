import React from 'react'
import { Link } from 'react-router-dom'
// import quran from "../assets/holy-quran.webp"
import quran from "../assets/holy-quran-fotor-bg-remover-20251125122046.png"

const Footer = () => {
  return (
    <div className='mt-3 bg-[#4B54AD] text-white'>
      <div className='flex flex-col md:flex-row justify-between items-center px-7 py-2 border-b border-b-white text-lg gap-4'>
        <div className='flex items-center'>
          <div className='self-start'>
            <img src={quran} alt="quran" width={100} />
          </div>
          <div>
            <h1 className='text-2xl font-semibold text'>Tafseer Ul Quran</h1>
            <p><span className='font-semibold'>Email:</span> kaysoftware@hotmail.com</p>
          </div>

        </div>
        <ul className='flex flex-col gap-3 md:flex-row md:gap-5'>
          <li>
            <Link to={"/"} className='cursor-pointer hover:underline'>Home</Link>
          </li>
          <li>
            <Link to={"/tafseer-ul-quran"} className='cursor-pointer hover:underline'>Tafseer Ul Quran</Link>
          </li>
          <li>
            <Link to={"#"} className='cursor-pointer hover:underline'>Majmooa Hidayat</Link>
          </li>
          <li>
            <Link to={"https://lamaesthetic.co.uk/uploads/surahs/book.pdf"} className='cursor-pointer hover:underline'>Al Haya Al Akhlaq</Link>
          </li>
          <li>
            <Link to={"/about"} className='cursor-pointer hover:underline'>About the Author</Link>
          </li>
          <li>
            <Link to={"/contact"} className='cursor-pointer hover:underline'>Contact Us</Link>
          </li>
        </ul>
        <div></div>
      </div>
      <div className='flex justify-center py-2'>
        <p className='text-lg'>© 2025, All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer