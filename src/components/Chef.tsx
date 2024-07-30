import React from 'react';
import { ReactComponent as Man } from '../assets/chef.svg';
import Dialogue from '/images/speechbox.png';

interface propType {
    message: string
}
const Chef: React.FC<propType> = ({ message }) => {
    return (
        <>
            <section className='flex'>
                <div className='relative'>
                    <img src={Dialogue} className=''></img>
                    <p className='absolute left-1/2 -translate-x-1/2 top-[22%] text-center font-bold text-sm'>{message}</p>
                </div>
                <Man className='' />
            </section>
        </>
    )
}

export default Chef