"use client"

import React, { useEffect } from 'react'
import BackgroundImage from '../BackgroundImg'
import { Button } from '@mui/material'
import Link from 'next/link'
import Drinkoftheday from './Drinkoftheday'

export default function LandingPage() {


    return (
     
            <div className=' flex flex-col min-h-screen'>
                <div className='flex p-20 space-y-4 '>
                     <div className='lg:w-1/2'>
                        <Drinkoftheday/>
                    </div>
                </div>
            </div>
       

    )
}
