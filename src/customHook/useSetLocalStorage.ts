interface setType {
    spinach: number,
    onion: number,
    steak: number,
    tomato: number
}
export const useSetLocalStorage = (props: setType) => {
    const { spinach, onion, steak, tomato } = props
    localStorage.setItem('spinach', JSON.stringify(spinach));
    localStorage.setItem('onion', JSON.stringify(onion));
    localStorage.setItem('steak', JSON.stringify(steak));
    localStorage.setItem('tomato', JSON.stringify(tomato))
    return {
        spinach,
        onion,
        steak,
        tomato
    };
}