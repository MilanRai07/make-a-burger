import Burger from "./components/Burger"
import { useEffect, useState } from 'react'
import { useAddItem } from "./customHook/useAddItem"
import { useRemoveItem } from "./customHook/useRemoveItem"
import { useGetLocalStorage } from "./customHook/useGetLocalStorage"
import { useSetLocalStorage } from "./customHook/useSetLocalStorage"

const App: React.FC = () => {
  const [spinach, setSpinach] = useState<number>(useGetLocalStorage('spinach'));
  const [onion, setOnion] = useState<number>(useGetLocalStorage('onion'));
  const [steak, setSteak] = useState<number>(useGetLocalStorage('steak'));
  const [message, setMessage] = useState<string>('Add the Recipes as you wish')
  console.log(message)

  useEffect(() => {
    useSetLocalStorage({ spinach, onion, steak })
  }, [spinach, onion, steak])

  return (
    <>
      <main className="h-screen w-full ImageBackground bg-center relative ">
        <div className="absolute bottom-[36%] left-1/2 -translate-x-1/2">
          <Burger
            spinach={spinach}
            onion={onion}
            steak={steak}
          />
        </div>
        <div className="flex gap-4">
          <button onClick={() => useAddItem('Spinach', spinach, setSpinach, setMessage)}>Add Spinach</button>
          <button onClick={() => useAddItem('Onion', onion, setOnion, setMessage)}>Add Onion</button>
          <button onClick={() => useAddItem('Steak', steak, setSteak, setMessage)}>Add Steak</button>
        </div><br></br>
        <div className="flex gap-4">
          <button onClick={() => useRemoveItem('Spinach', spinach, setSpinach, setMessage)}>Remove Spinach</button>
          <button onClick={() => useRemoveItem('Onion', onion, setOnion, setMessage)}>Remove Onion</button>
          <button onClick={() => useRemoveItem('Steak', steak, setSteak, setMessage)}>Remove Steak</button>
        </div>
      </main>
    </>
  )
}

export default App