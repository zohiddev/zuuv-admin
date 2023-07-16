import { useEffect, useState } from "react";

function useDebounce(value: string, wait: number = 500) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, wait);
        return () => clearTimeout(timer); // cleanup when unmounted
    }, [value, wait]);

    return debounceValue;
}

export default useDebounce;
