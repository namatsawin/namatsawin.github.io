interface Props extends React.PropsWithChildren {
    text: string;
    className?: string
}

export function TitlePeriodic({ text, className }: Props) {
    return (
        <div className={"flex gap-2 items-center " + className}>
            <span className='text-3xl text-yellow-500 px-4 border-4 border-double border-yellow-500 rounded shadow-md shadow-yellow-500'>
                {text.charAt(0)}
                <span className='text-xl'>{text.charAt(1)}</span>
            </span>
            <span className='text-xl text-yellow-500 text-center'>
                {text.slice(2)}
            </span>
        </div>
    )
}

export default TitlePeriodic