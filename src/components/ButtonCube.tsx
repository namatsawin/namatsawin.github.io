import React from "react";


export function ButtonCube({ children }: React.PropsWithChildren) {
    return (
        <button onClick={() => alert('In progress...')} className="rounded-md py-4 px-8 outline">
            {children}
        </button>
    )
}

export default ButtonCube;