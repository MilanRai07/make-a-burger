import Burger from "./components/Burger"
import { useEffect, useState } from 'react'
import { useAddItem } from "./customHook/useAddItem"
import { useRemoveItem } from "./customHook/useRemoveItem"
import { useGetLocalStorage } from "./customHook/useGetLocalStorage"
import { useSetLocalStorage } from "./customHook/useSetLocalStorage"
import Chef from "./components/Chef"
import Bill from "./components/Bill"

const App: React.FC = () => {
  const [spinach, setSpinach] = useState<number>(useGetLocalStorage('spinach'));
  const [onion, setOnion] = useState<number>(useGetLocalStorage('onion'));
  const [steak, setSteak] = useState<number>(useGetLocalStorage('steak'));
  const [tomato, setTomato] = useState<number>(useGetLocalStorage('tomato'));
  const [message, setMessage] = useState<string>('Add the Recipes as you wish');
  const [showPricing, setShowPricing] = useState<boolean>(false)
  console.log(message)
  useEffect(() => {
    useSetLocalStorage({ spinach, onion, steak, tomato })
  }, [spinach, onion, steak, tomato])

  return (
    <>
      <main className="h-screen w-full bg-background-image bg-center md:bg-contain xs:bg-cover relative ">
        {showPricing ?
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" >
            <Bill
              spinach={spinach}
              onion={onion}
              steak={steak}
              tomato={tomato}
              setState={setShowPricing}
            />
          </div>
          :
          <div>
            <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 xl:bottom-16 mlg:bottom-[11%] 
            md:left-[20%] md:!bottom-1/4 sm-d:left-[30%] xs:left-1/2 ">
              <Burger
                spinach={spinach}
                onion={onion}
                steak={steak}
                tomato={tomato}
              />
            </div>
            <div className="ButtonDiv pt-2">
              <button className="bg-red-700 ItemButton" onClick={() => useAddItem('Tomato', tomato, setTomato, setMessage)}>Add Tomato</button>
              <button className="bg-green-700 ItemButton" onClick={() => useAddItem('Spinach', spinach, setSpinach, setMessage)}>Add Spinach</button>
              <button className="bg-purple-700 ItemButton" onClick={() => useAddItem('Onion', onion, setOnion, setMessage)}>Add Onion</button>
              <button className="bg-pink-700 ItemButton" onClick={() => useAddItem('Steak', steak, setSteak, setMessage)}>Add Steak</button>
            </div><br></br>
            <div className="ButtonDiv">
              <button className="bg-red-900 ItemButton" onClick={() => useRemoveItem('Tomato', tomato, setTomato, setMessage)}>Remove Tomato</button>
              <button className="bg-green-900 ItemButton" onClick={() => useRemoveItem('Spinach', spinach, setSpinach, setMessage)}>Remove Spinach</button>
              <button className="bg-purple-900 ItemButton" onClick={() => useRemoveItem('Onion', onion, setOnion, setMessage)}>Remove Onion</button>
              <button className="bg-pink-900 ItemButton" onClick={() => useRemoveItem('Steak', steak, setSteak, setMessage)}>Remove Steak</button>
            </div>
            <div className="absolute right-5 bottom-[30%] sm-d:bottom-[50%] xs:bottom-[65%]">
              <Chef message={message} />
            </div>
            <div className="absolute left-5 bottom-[30%] md:left-1/2 md:-translate-x-1/2 md:bottom-10 ">
              <button className="PriceButton" onClick={() => setShowPricing(true)}>Burger Pricing</button>
            </div>
          </div>
        }
      </main>
    </>
  )
}

export default App