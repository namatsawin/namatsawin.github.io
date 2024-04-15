interface Props extends React.PropsWithChildren {
    stories: {
        date: string;
        title: string;
        description: string;
        additional?: string;
    }[]
}

export function Timeline({ stories = [] }: Props) {
    return (
        <div className="grid gap-3">
            {stories.map((story, index) => {
                return (
                    <div className="flex gap-4 min-h-[100px] w-full" key={index}>
                        <p className="w-[90px] font-bold text-base">
                            {story.date}
                        </p>
                        <div className="flex flex-col gap-1 items-center mt-3">
                            <span 
                                className={`min-w-2 min-h-2 rounded-[50%] bg-yellow-300`}
                                style={{boxShadow: `0 0 5px 5px yellow` }}
                            >
                            </span>
                            <span className="h-full w-1 bg-neutral-300">
                            </span>
                        </div>
                        <div>
                            <h1 className="font-bold text-lg">
                                {story.title}
                            </h1>
                            <p className="text-sm">
                                {story.description}
                            </p>
                            {
                            story.additional && 
                                <p className="text-sm">
                                    {story.additional}
                                </p>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Timeline;