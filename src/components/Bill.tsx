import Spinach from '/images/spinach.png';
import Steak from '/images/steak.png';
import Onion from '/images/onion.png'
import Tomato from '/images/tomato.png'
import React, { useEffect, useState } from 'react';

interface propType {
    spinach: number,
    steak: number,
    onion: number,
    tomato: number,
    setState: React.Dispatch<React.SetStateAction<boolean>>
}
interface items {
    spinach: number,
    steak: number,
    onion: number,
    tomato: number,
}
const Bill: React.FC<propType> = ({ spinach, steak, onion, tomato, setState }) => {
    const [totalPrice, setTotalPrice] = useState<number>();

    const rate: items = {
        spinach: 70,
        tomato: 50,
        steak: 200,
        onion: 50
    }
    const number: items = {
        spinach: spinach,
        tomato: tomato,
        steak: steak,
        onion: onion
    }
    useEffect(() => {
        const total: number = (Object.keys(rate) as (keyof items)[]).reduce((accumulator, item) => {
            return accumulator + (rate[item] * number[item]);
        }, 0);
        setTotalPrice(total);
    }, [rate, number]);
    return (
        <>
            <section>
                <h1 className="mb-6 text-center text-xl text-white font-bold sm-d:text-lg">Your Burger Price</h1>
                <div className="text-white   bg-[rgba(0,0,0,0.7)] rounded">
                    <div className="BillDiv mb-7 border-b-2 border-white font-semibold sm-d:text-sm">
                        <div className="BillItem">Items</div>
                        <div className="BillItem">No. of item</div>
                        <div className="BillItem">Price</div>
                    </div>
                    {tomato !== 0 && (
                        <div className="BillDiv">
                            <div className="BillItem">
                                <img src={Tomato}></img>
                            </div>
                            <div className="BillItem">{tomato}</div>
                            <div className="BillItem">{tomato * rate.tomato}</div>
                        </div>
                    )
                    }
                    {spinach !== 0 && (
                        <div className="BillDiv">
                            <div className="BillItem">
                                <img src={Spinach}></img>
                            </div>
                            <div className="BillItem">{spinach}</div>
                            <div className="BillItem">{spinach * rate.spinach}</div>
                        </div>
                    )
                    }
                    {onion !== 0 && (
                        <div className="BillDiv">
                            <div className="BillItem">
                                <img src={Onion}></img>
                            </div>
                            <div className="BillItem">{onion}</div>
                            <div className="BillItem">{onion * rate.onion}</div>
                        </div>
                    )
                    }
                    {steak !== 0 && (
                        <div className="BillDiv">
                            <div className="BillItem">
                                <img src={Steak}></img>
                            </div>
                            <div className="BillItem">{steak}</div>
                            <div className="BillItem">{steak * rate.steak}</div>
                        </div>
                    )
                    }
                    <div className='BillDiv font-semibold'>
                        <h2 className='BillItem grow'>Total</h2>
                        <p className='BillItem underline'>{totalPrice}</p>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='PriceButton' onClick={() => setState(false)}>
                        Go back to kitchen
                    </button>
                </div>
            </section>
        </>
    )
}

export default Bill