import React from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom'

function NotFound({ name = '' }: { name?: string }) {
    return (
        <>
            <Banner />
            <div className='w-full h-[400px] flex items-center justify-center flex-col'>
                <div className='text-2xl'>{name.replaceAll('_', ' ')} Not Found </div>
                <Link to='/' className='text-primary underline '>
                    Click here to go back
                </Link>
            </div></>
    )
}

export default NotFound