import React from "react";

interface Props extends React.PropsWithChildren {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({ children, onClick }: Props) {
    return (
        <button 
            className="py-4 px-8 rounded-3xl shadow-md shadow-yellow-500 text-yellow-500"
            style={{ boxShadow: '0 0 0 1px #facc15'}}
            onClick={onClick}
        >
            {children}
        </button>
        
    )
}

export default Button;