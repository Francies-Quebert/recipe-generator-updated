import { type } from 'os'
import React from 'react'

type Props = {
    btnname: string,
    btnClassName?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}


function Button({ btnname, btnClassName = '', type = 'button', onClick }: Props) {
    return (
        <button type={type} className={`bg-primary font-bold hover:bg-primary/50 text-white h-10 w-full rounded-sm mt-5 outline-none focus-visible:bg-primary/50 ${btnClassName}`} onClick={onClick}>
            {btnname}
        </button>
    )
}

export default Button