import { ReactComponent as Head } from '../assets/head.svg'
import Spinach from '/images/spinach.png';
import Tail from '/images/tail.png'
import Steak from '/images/steak.png'
import Onion from '/images/onion.png'
import Tomato from '/images/tomato.png'

interface BurgerProps {
  spinach: number;
  onion: number;
  steak: number;
  tomato: number
}

const Burger = (props: BurgerProps) => {
  const { spinach, onion, steak, tomato } = props
  const totalItems = spinach + onion + steak + tomato;
  return (
    <>
      <div className=''>
        <div className='Head'>
          <Head className='mlg:w-48 mlg:h-44 md:!h-36 xs:w-32 xs:!h-28' />
        </div>
        <div className='BurgerItemDiv'
          style={{ height: `calc(var(--item-height) * ${totalItems})` }}>
          <div>
            {
              Array.from({ length: tomato }).map((_, index) => (
                <div key={index} className='BurgerItem'>
                  <img src={Tomato} className='BurgerIcon'></img>
                </div>
              ))
            }
          </div>
          <div>
            {
              Array.from({ length: spinach }).map((_, index) => (
                <div key={index} className='BurgerItem'>
                  <img src={Spinach} className='BurgerIcon'></img>
                </div>
              ))
            }
          </div>
          <div>
            {
              Array.from({ length: onion }).map((_, index) => (
                <div key={index} className='BurgerItem'>
                  <img src={Onion} className='BurgerIcon'></img>
                </div>
              ))
            }
          </div>
          <div>
            {
              Array.from({ length: steak }).map((_, index) => (
                <div key={index} className='BurgerItem'>
                  <img src={Steak} className='BurgerIcon'></img>
                </div>
              ))
            }
          </div>
        </div>
        <div className='Tail'>
          <img src={Tail} width='230px' className='mlg:w-48 mlg:h-10 md:!h-9 xs:w-32 xs:!h-8'></img>
        </div>
        <div>
        </div>
      </div>

    </>
  )
}

export default Burger