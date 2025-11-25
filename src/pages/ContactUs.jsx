import React from 'react'
import ContactForm from '../components/ContactForm.jsx'

const ContactUs = () => {
    return (
        <div className='flex-1 lg:justify-center items-center gap-3 '>
            <div className=' w-full flex flex-col items-center justify-center gap-5 '>
                <ContactForm />
                {/* <div className=' lg:w-[66%] h-full'>
                    {/* <div className='w-full'><iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=karachi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">calculer la population sur la carte</a></iframe></div> */}
                    {/* <div className='w-full'><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=53%20high%20ash%20Avenue%20%20LS178RS+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">Carte démographique</a></iframe></div> 
                </div> */}
            </div>
        </div>
    )
}

export default ContactUs
