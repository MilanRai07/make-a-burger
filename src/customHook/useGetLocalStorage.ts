
export const useGetLocalStorage = (item: string): number => {
    return parseInt(localStorage.getItem(item) || '0', 10);
};