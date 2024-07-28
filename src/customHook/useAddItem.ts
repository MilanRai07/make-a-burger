//The below coding approach is one way that enhance reusability and easy maintainance of coding.
//There is another approach I will use it in removing the item, which is good for small piece of code, where code are repeated. 

const maxItem = { //these are the threshold values (maximum number of each items we can add in burger)
    spinach: 2,
    onion: 2,
    steak: 2,
    tomato: 2
}

const thresholdMessages = { //these messages are shown when the threshold values reaches while adding items
    spinach: 'Too much spinach makes the taste diluted',
    onion: 'Too much onion makes the burger more spicy',
    steak: 'Too much steak is quite unhealthy',
    tomato: 'Too much tomato dilute the taste'
}

const updateState = ( //it is a function that is called when we are using switch case conditonal rendering  

    //these are 5 parameters coming from switch case from main function below
    state: number,
    setState: React.Dispatch<React.SetStateAction<number>>,
    message: string,
    maxItem: number,
    item: string,
    setItemMessage: React.Dispatch<React.SetStateAction<string>>

) => {
    if (state >= maxItem) {
        setItemMessage(message)
    } else {
        setState(state + 1)
        setItemMessage(`${item} added successfully`)
    }
}

//main customHook function
export const useAddItem = (
    //these 4 parematers are coming when we use add items button from app.tsx file
    item: 'Spinach' | 'Onion' | 'Steak' | 'Tomato',
    itemValue: number,
    setItem: React.Dispatch<React.SetStateAction<number>>,
    setItemMessage: React.Dispatch<React.SetStateAction<string>>
) => {


    switch (item) {
        case 'Spinach':
            updateState(itemValue, setItem, thresholdMessages.spinach, maxItem.spinach, item, setItemMessage);
            break;
        case 'Onion':
            updateState(itemValue, setItem, thresholdMessages.onion, maxItem.onion, item, setItemMessage);
            break;
        case 'Steak':
            updateState(itemValue, setItem, thresholdMessages.steak, maxItem.steak, item, setItemMessage);
            break;
        case 'Tomato':
            updateState(itemValue, setItem, thresholdMessages.tomato, maxItem.tomato, item, setItemMessage);
            break;
        default:
            break;
    }
}