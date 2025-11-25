import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
// import { sendEmail } from '../sendEmail/sendEmail';
import axios from "axios"

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
    const form = useRef();

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm('service_b5goitk', 'template_hgv2psm', form.current, {
        publicKey: 'E_MzcYWYs4xQiSxwN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Form submitted successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Cannot submit the form")
        },
      );
    setLoading(false)
  }

    return (
        <div className='lg:w-[66%] h-full  flex flex-col items-center mt-4 bg-[#00000005]'>
            <ToastContainer />
            <h1 className='text-3xl font-semibold my-2'>Send us a message</h1>
            <form ref={form} onSubmit={sendMail} className='flex flex-col gap-3 p-4 items-center sm:w-[100%] md:w-[60%] w-full '>
                <input type="text" placeholder='Name' className='w-full outline p-1 px-3 bg-gray-100' name='Name'/>
                <input type="email" placeholder='Email' className='w-full outline p-1 px-3 bg-gray-100' name='Email'/>
                <input type="tel" placeholder='Phone' className='w-full outline p-1 px-3 bg-gray-100' />
                <textarea placeholder='Message' rows="4" cols="50" className='w-full outline p-1 px-3 bg-gray-100' name='Message'></textarea>
                {/* <button type='submit' className='bg-[#A64166] py-1 px-3 rounded text-white cursor-pointer'>{loading? "Loading...": "Submit"}</button> */}
                <input type="submit" value={loading? "Loading...": "Submit"} className='bg-[#A64166] py-1 px-3 rounded text-white cursor-pointer'/>
            </form>
        </div>
    )
}

export default ContactForm
