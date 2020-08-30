import { useRef, useState } from 'react'

const useInitialValue = (value) => {
    const [state, setState] = useState(value)
    const ref = useRef()

    if (ref.current != null) {
        return [state, setState, ref.current]
    } else {
        ref.current = value
        return [state, setState, value]
    }
}

export default useInitialValue
