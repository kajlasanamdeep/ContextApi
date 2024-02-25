import { useEffect, useState } from "react"

function useAddition(...args) {
    const [sum, setSum] = useState("");
    useEffect(() => {
        // eslint-disable-next-line no-eval
        try {
            setSum(eval(args.join("+")))
        } catch (error) {

        }
    }, [args])
    return sum
}

export default useAddition
