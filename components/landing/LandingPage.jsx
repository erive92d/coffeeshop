"use client"

import React, { useEffect } from 'react'
import BackgroundImage from '../BackgroundImg'
import { Button } from '@mui/material'
import Link from 'next/link'

export default function LandingPage() {


    return (
        <BackgroundImage imageUrl={"/image/coffeebg.jpeg"}>
            <div className='flex flex-col justify-center min-h-screen'>
                <div className='lg:w-1/2 px-20 space-y-4'>
                    <p className='text-white font-serif lg:text-xl italic'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores expedita ab facilis reiciendis illo explicabo magnam beatae nostrum, soluta, quidem quisquam dolorum, sapiente laudantium blanditiis? Laborum recusandae aut impedit distinctio.
                    </p>
                    <Link href="/order" className='btn px-4 bg-green-700 text-white'>Order here</Link>
                </div>
            </div>
        </BackgroundImage>

    )
}
