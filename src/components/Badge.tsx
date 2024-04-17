export function Badge({ children }: React.PropsWithChildren) {
    return (
        <div className="
            text-sm shadow px-4 w-fit rounded-3xl rounded shadow-sm shadow-yellow-300 cursor-default
        ">
            {children}
        </div>
    )
}

export default Badge;