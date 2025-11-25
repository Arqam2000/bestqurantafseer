import React from 'react'
import { Navbar } from '../components/Navbar'
import aboutAuthor from "../assets/aboutAuthor.jpg"

export const AboutTheAuthor = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center'>
            <img src={aboutAuthor} alt="about author" className='w-3xl md:h-[400px]'/>

            </div>
            <section className={`mb-8 text-center max-w-3xl mx-auto px-4`} > 
                <h2 className="text-xl font-bold">About the Author</h2>
                <p className="mb-4 text-justify max-w-3xl mx-auto px-4">
                    Muhammad Shoaib Bin Hafiz Muslim was a distinguished Muslim scholar and educator in India,
                    renowned for his contributions to Arabic literature and education in the early 19th Century.
                    He authored three notable books, reflecting his deep understanding of Islamic teachings
                    and Arabic linguistics.
                </p>
                <p className="mb-4 text-justify max-w-3xl mx-auto px-4">
                    <strong>1. Tafseer Ul Quran</strong><br />
                    <strong>2. Majmooa Hidayat</strong><br />
                    <strong>3. Al Haya Al Akhlaq</strong><br />
                </p>
                <p className="mb-4 text-justify max-w-3xl mx-auto px-4">
                    As a grand daughter I have tried my level best to put all as it was but since it was written in 1938 so the pages were damaged.
                    May Allah bless his soul and accept his working.
                </p>
                <p className="mb-4 text-justify max-w-3xl mx-auto px-4">
                    Zareen Sharaf Fatima
                </p>

            </section>
        </div>
    )
}
