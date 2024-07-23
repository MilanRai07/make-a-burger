import Burger from "./components/Burger"
import { useState } from 'react'

const App: React.FC = () => {
  const [spinach, setSpinach] = useState<number>(1)
  const [onion,setOnion]=useState<number>(1)
  const [steak,setSteak]=useState<number>(1)

  const add=(item:string)=>{
    if(item=='spinach'){
      setSpinach(spinach+1)
    }else if(item=='onion'){
      setOnion(onion+1)
    }else if(item=='steak'){
      setSteak(steak+1)
    }
  }
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
          <button onClick={()=>add('spinach')}>Add Spinach</button>
          <button onClick={()=>add('onion')}>Add Onion</button>
          <button onClick={()=>add('steak')}>Add Steak</button>
        </div><br></br>
        <div className="flex gap-4">
          <button>Remove Spinach</button>
          <button>Remove Onion</button>
          <button>Remove Steak</button>
        </div>
      </main>
    </>
  )
}

export default App