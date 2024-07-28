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
  const itemHeight = 22;
  const totalHeight = totalItems * itemHeight;
  return (
    <>
      <div className=''>
        <div className='Head'>
          <Head className='l-g:w-12' />
        </div>
        <div className='BurgerItemDiv'
          style={{ height: `${totalHeight}px` }}>
          <div className=''>
            {
              Array.from({ length: tomato }).map((_, index) => (
                <div key={index} className='BurgerItem'>
                  <img src={Tomato} className=''></img>
                </div>
              ))
            }
          </div>
          <div className=''>
            {
              Array.from({ length: spinach }).map((_, index) => (
                <div key={index} className='BurgerItem'>
                  <img src={Spinach} className=''></img>
                </div>
              ))
            }
          </div>
          <div className=''>
            {
              Array.from({ length: onion }).map((_, index) => (
                <div key={index} className='BurgerItem'>
                  <img src={Onion}></img>
                </div>
              ))
            }
          </div>
          <div className=''>
            {
              Array.from({ length: steak }).map((_, index) => (
                <div key={index} className='BurgerItem'>
                  <img src={Steak}></img>
                </div>
              ))
            }
          </div>
        </div>
        <div className='Tail'>
          <img src={Tail} width='230px'></img>
        </div>
        <div>
        </div>
      </div>

    </>
  )
}

export default Burger