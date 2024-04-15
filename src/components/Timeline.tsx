interface Props extends React.PropsWithChildren {
    stories: {
        date: string;
        title: string;
        description: string;
        icon?: React.ReactNode;
        additional?: string;
    }[],
}

export function Timeline({ stories = [] }: Props) {
    return (
        <div className="grid gap-3">
            {stories.map((story, index) => {
                return (
                    <div className="flex gap-4 min-h-[100px] w-full" key={index}>
                        <div className="flex flex-col gap-1 items-center mt-3">
                            <span 
                                className={`min-w-2 min-h-2 rounded-[50%] bg-yellow-300`}
                                style={{boxShadow: `0 0 5px 5px yellow` }}
                            >
                            </span>
                            <span className="h-full w-1 bg-neutral-300">
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-base text-yellow-200">
                                {story.date}
                            </h3>
                            <div className="flex gap-3 items-center">
                                { story.icon && story.icon }
                                <h1 className="font-bold text-lg">
                                    {story.title}
                                </h1>
                                
                            </div>
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