
export const useRemoveItem = (
    item: 'Spinach' | 'Onion' | 'Steak' | 'Tomato',
    itemValue: number,
    setItem: React.Dispatch<React.SetStateAction<number>>,
    setItemMessage: React.Dispatch<React.SetStateAction<string>>

) => {

    if (itemValue > 0) {
        setItem(itemValue - 1)
        setItemMessage(`${item} removed successfully`)
    } else {
        setItemMessage(`There is no ${item} left to remove`)
    }
};
