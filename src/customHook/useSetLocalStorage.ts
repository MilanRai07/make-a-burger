interface setType {
    spinach: number,
    onion: number,
    steak: number
}
export const useSetLocalStorage = (props: setType) => {
    const { spinach, onion, steak } = props
    localStorage.setItem('spinach', JSON.stringify(spinach));
    localStorage.setItem('onion', JSON.stringify(onion));
    localStorage.setItem('steak', JSON.stringify(steak));

    return {
        spinach,
        onion,
        steak
    };
}