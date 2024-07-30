import Burger from "./components/Burger"
import { useEffect, useState } from 'react'
import { useAddItem } from "./customHook/useAddItem"
import { useRemoveItem } from "./customHook/useRemoveItem"
import { useGetLocalStorage } from "./customHook/useGetLocalStorage"
import { useSetLocalStorage } from "./customHook/useSetLocalStorage"
import Chef from "./components/Chef"

const App: React.FC = () => {
  const [spinach, setSpinach] = useState<number>(useGetLocalStorage('spinach'));
  const [onion, setOnion] = useState<number>(useGetLocalStorage('onion'));
  const [steak, setSteak] = useState<number>(useGetLocalStorage('steak'));
  const [tomato, setTomato] = useState<number>(useGetLocalStorage('tomato'));
  const [message, setMessage] = useState<string>('Add the Recipes as you wish')
  console.log(message)
  useEffect(() => {
    useSetLocalStorage({ spinach, onion, steak, tomato })
  }, [spinach, onion, steak, tomato])

  return (
    <>
      <main className="h-screen w-full ImageBackground bg-center relative ">
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2">
          <Burger
            spinach={spinach}
            onion={onion}
            steak={steak}
            tomato={tomato}
          />
        </div>
        <div className="ButtonDiv pt-2">
          <button className="bg-green-700 ItemButton" onClick={() => useAddItem('Spinach', spinach, setSpinach, setMessage)}>Add Spinach</button>
          <button className="bg-purple-700 ItemButton" onClick={() => useAddItem('Onion', onion, setOnion, setMessage)}>Add Onion</button>
          <button className="bg-pink-700 ItemButton" onClick={() => useAddItem('Steak', steak, setSteak, setMessage)}>Add Steak</button>
          <button className="bg-red-700 ItemButton" onClick={() => useAddItem('Tomato', tomato, setTomato, setMessage)}>Add Tomato</button>
        </div><br></br>
        <div className="ButtonDiv">
          <button className="bg-green-900 ItemButton" onClick={() => useRemoveItem('Spinach', spinach, setSpinach, setMessage)}>Remove Spinach</button>
          <button className="bg-purple-900 ItemButton" onClick={() => useRemoveItem('Onion', onion, setOnion, setMessage)}>Remove Onion</button>
          <button className="bg-pink-900 ItemButton" onClick={() => useRemoveItem('Steak', steak, setSteak, setMessage)}>Remove Steak</button>
          <button className="bg-red-900 ItemButton" onClick={() => useRemoveItem('Tomato', tomato, setTomato, setMessage)}>Remove Tomato</button>
        </div>
        <div className="absolute right-5 bottom-[30%]">
          <Chef message={message} />
        </div>
      </main>
    </>
  )
}

export default App