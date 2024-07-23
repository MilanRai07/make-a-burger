import { ReactComponent as Head } from '../assets/head.svg'
import { ReactComponent as Tail } from '../assets/tail.svg'

interface BurgerProps {
  spinach: number;
  onion: number;
  steak: number;

}
const Burger = (props: BurgerProps) => {
  const { spinach, onion, steak } = props
  return (
    <>
      <div className=''>
        <div className='h-24 FlexCenter'>
          <Head className='l-g:w-12' />
        </div>
        <div className='BurgerItemDiv'>
          {
            Array.from({ length: spinach }).map((_, index) => (
              <div key={index} className='BurgerItem bg-green-500'>Spinach</div>
            ))
          }
        </div>
        <div className='BurgerItemDiv'>
          {
            Array.from({ length: onion }).map((_, index) => (
              <div key={index} className='BurgerItem bg-indigo-600'>Onion</div>
            ))
          }
        </div>
        <div className='BurgerItemDiv'>
          {
            Array.from({ length: steak }).map((_, index) => (
              <div key={index} className='BurgerItem bg-red-600'>Steak</div>
            ))
          }
        </div>
        <div className='h-16 FlexCenter justify-center'>
          <Tail className='' />
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default Burger