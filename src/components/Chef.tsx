import React from 'react';
import { ReactComponent as Man } from '../assets/chef.svg';
import Dialogue from '/images/speechbox.png';

interface propType {
    message: string
}
const Chef: React.FC<propType> = ({ message }) => {
    return (
        <>
            <section className='flex lg:items-center'>
                <div className='relative'>
                    <img src={Dialogue} className='xl:w-64 xl:h-24 lg:max-w-52 lg:max-h-20 xs:max-h-11 xs:!w-48 1xs:!w-44'></img>
                    <p className='ChefMessage'>{message}</p>
                </div>
                <Man className='xl:w-20 lg:max-w-14 xs:!h-14 1xs:!w-11' />
            </section>
        </>
    )
}

export default Chef