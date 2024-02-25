import { useMemo, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    const fetchData = () => {
        console.log(pageNumber, "pageNumber");
        setFetching(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                let pageData = data?.slice(((pageNumber - 1) * 10), (pageNumber * 10))
                setData(pageData)
            }).finally(() => {
                setFetching(false)
            });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useMemo(() => fetchData(), [url, pageNumber]);

    const paginate = (page) => {
        setPageNumber(page)
    }
    return [data, fetching, paginate];
}

export default useFetch
