import { ReactNode } from "react"

const Error = ({children} : {children : ReactNode}) => {
    return (
        <p className="text-center text-white p-3 bg-red-600 my-3 font-bold uppercase text-sm">
            {children}
        </p>
    )
}

export default Error