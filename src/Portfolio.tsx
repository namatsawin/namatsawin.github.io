import Modal from "./components/Modal";
import TitlePeriodic from "./components/TitlePeriodic";


import OnlineOrderUI from './assets/images/online-order-ui.webp'
import NigiwaiGoodWealthUI from './assets/images/nigiwai-good-wealth-ui.webp'
import NigiwaiGoodWealthBackOfficeUI from './assets/images/nigiwai-good-wealth-backoffice-ui.webp'
import Badge from "./components/Badge";

interface Props extends React.PropsWithChildren {
    isOpen: boolean,
    onClose?: React.MouseEventHandler<HTMLDivElement>
}


export function Portfolio({ isOpen, onClose }: Props) {
    const works = [
        {
            preview: OnlineOrderUI,
            title: "Online Order",
            description: `The food delivery platform is primarily accessed through LINE, a messaging application.
            It's a web application where you can order food for pickup or delivery. similar to other delivery platforms.
            It also connects smoothly with FoodStory's POS system, keeping track of restaurant stock. 
            In my assignment, I was solely responsible for completely overhauling the UI to give it a more modern look while ensuring its functionality works properly. 
            `,
            technologies: ['Javascript', 'Vue2', 'Element-UI', 'ExpressJS', 'Postgresql', 'Elastic Beanstalk', 'S3', 'Firebase Authentication']
        },
        {
            preview: NigiwaiGoodWealthUI,
            title: "Nigiwai Good Wealth",
            description: `A web application that allows their franchisees to purchase ingredients for inventory restocking.
            It's one of the projects I collaborated on developing from scratch. 
            In my role on this project, I worked as a core team member responsible for frontend development. 
            This included setting up the project, creating reusable components according to the design specifications, 
            establishing CI/CD for automated deployment, standardizing folder structure and coding practices, 
            and providing instructions to team members. Additionally, I occasionally lent a hand on the backend side.
            `,
            technologies: ['Typescript', 'Vue3', 'Element-UI', 'NestJS', 'DocumentDB', 'TypeORM', 'Elastic Beanstalk', 'S3']
        },
        {
            preview: NigiwaiGoodWealthBackOfficeUI,
            title: "Nigiwai Good Wealth - Back Office",
            description: `The administrative center of Nigiwai Good Wealth gives administrators the tools they need to handle orders, accounts, franchisees, and products. 
            Like the customer web, it's crafted with the latest tech and coding standards, making it a seamless part of operations. 
            With its user-friendly design and full range of features, it's a breeze for administrators to keep everything running smoothly and make smart decisions to boost the business.
            `,
            technologies: ['Typescript', 'Vue3', 'Element-UI', 'NestJS', 'DocumentDB', 'TypeORM', 'Elastic Beanstalk', 'S3']
        }
    ]
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-12">
                <TitlePeriodic text="Portfolio"/>
                {works.map((work, index) => {
                    return (
                        <section 
                            key={index}
                            className={`flex flex-col lg:grid gap-10 border-b-[2px] pb-10 border-neutral-700 last:border-none ${index % 2 ? 'lg:grid-cols-[1fr_auto]' : 'lg:grid-cols-[auto_1fr]'}`}
                        >
                            <div className={`flex justify-center items-center ${index % 2 ? 'order-first lg:order-last' : 'order-first'}`}>
                                <img src={work.preview} width={500} height={400} className="rounded-xl" />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-xl text-yellow-200'>     
                                    {work.title}
                                </h1>
                                <p className='text-sm'>
                                    {work.description}
                                </p>

                                <div className="flex gap-2 flex-wrap">
                                    {
                                        work.technologies.map((technology, techIndex) => <Badge key={techIndex}>{technology}</Badge>)
                                    }
                                </div>
                            </div>
                        </section>
                    )
                })}
                

                {/* <section className='flex flex-col lg:grid lg:grid-cols-[1fr_auto] gap-4'>
                    <div className='flex flex-col gap-2 order-last lg:order-first'>
                        <h1 className='text-xl'>    
                            Nigiwai Good Wealth
                        </h1>
                        <p className='text-sm'>
                            A web application that allows their franchisees to purchase ingredients for inventory restocking. It's one of the projects I collaborated on developing from scratch.
                            In my role on this project, I worked as a core team member responsible for frontend development. This included setting up the project, creating reusable components according to the design specifications, establishing CI/CD for automated deployment, standardizing folder structure and coding practices, and providing instructions to team members. Additionally, I occasionally lent a hand on the backend side.
                        </p>

                        <p className='text-sm'>
                            Technologies: Typescript, Vue3 + Vite, Element-UI, NestJS, DocumentDB, TypeORM, Docker, Elastic Beanstalk, S3.
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={NigiwaiGoodWealthUI} width={500} height={400} />
                    </div>
                </section> */}
            </div>
        </Modal>
    )
}

export default Portfolio;