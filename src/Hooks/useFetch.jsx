import { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setFetching(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data)).finally(() => {
                setFetching(false)
            });
    }, [url, refresh]);

    const reload = () => {
        setRefresh(prev => !prev)
    }
    return [data, fetching, reload];
}

export default useFetch
