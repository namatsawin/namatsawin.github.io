import { useState } from "react";

import Modal from "./components/Modal";

import Badge from "./components/Badge";
import UIShowcase from "./components/UIShowcase";

import MobileOrderUI from './assets/images/mobile-order-ui.webp'
import OnlineOrderUI from './assets/images/online-order-ui.webp'
import NigiwaiGoodWealthUI from './assets/images/nigiwai-good-wealth-ui.webp'
import NigiwaiGoodWealthBackOfficeUI from './assets/images/nigiwai-good-wealth-backoffice-ui.webp'
import NipaCloudUI from './assets/images/nipa-cloud-ui.webp'
import ParkingLotSystemUI from './assets/images/parking-lot-system-ui.webp'
import MicroserviceEcommerceUI from './assets/images/microservice-ecommerce-ui.webp'
import MovieWebUI from './assets/images/movie-web-ui.webp'
import TodoListUI from './assets/images/todo-list-ui.webp'
import TicTacToeUI from './assets/images/tictactoe-ui.webp'
import POSBackofficeUI from './assets/images/pos-backoffice-ui.webp'

import MobileOrderUIShowcase from './assets/ui-showcases/mobile-order.mp4'
import OnlineOrderUIShowcase from './assets/ui-showcases/online-order.mp4'
import NigiwaiGoodWealthUIShowcase from './assets/ui-showcases/nigiwai-good-wealth.mp4'
import NigiwaiGoodWealthBackOfficeUIShowcase from './assets/ui-showcases/nigiwai-good-wealth-admin.mp4'
import POSBackOfficeUIShowcase from './assets/ui-showcases/pos-backoffice-uishowcase.mp4'

interface Props extends React.PropsWithChildren {
    isOpen: boolean,
    onClose?: React.MouseEventHandler<HTMLDivElement>
}

interface IWork {
    preview: string;
    title: string
    description: string;
    technologies: string[]
    repository: string;
    showcase?: string
    endpoint?: string
}

export function Portfolio({ isOpen, onClose }: Props) {
    const [uiShowcase, setUIShowcase] = useState({ open: false, source: '' })

    const works: IWork[] = [
        {
            preview: MobileOrderUI,
            title: 'Mobile Order',
            description: `I was a core team member responsible for rebuilding a web application from the ground up 
            and continued to make significant contributions by developing upcoming features. 
            This application allows customers to place orders easily by scanning a QR code with their mobile device. 
            The system offers two QR code options: dynamic and static. Dynamic QR codes require a new code to be printed each time, 
            while static codes can be used indefinitely. Additionally, 
            owners can customize the mobile ordering experience to fit their brand by setting themes and preferred payment methods, 
            along with their choice of QR code type.
            `,
            technologies: ['Typescript', 'Vue3', 'Tailwind', 'NestJS', 'Postgresql', 'TypeORM', 'Firebase Realtime Database', 'Elastic Beanstalk', 'S3'],
            repository: 'Private',
            endpoint: 'https://mobile-order-v2.foodstory.co',
            showcase: MobileOrderUIShowcase
        },
        {
            preview: POSBackofficeUI,
            title: "Web Owner",
            description: `A web application that allows owners to view their reports and manage aspects relevant to their restaurant, 
            such as menus, inventory, promotions, mobile orders, online orders, etc. I was responsible for maintaining, fixing bugs, 
            and adding features related to my work.`,
            technologies: ['Javascript', 'Vue2', 'Element-UI', 'ExpressJS', 'PHP', 'Laravel', 'Postgresql', 'Elastic Beanstalk', 'S3'],
            repository: 'Private',
            endpoint: 'https://owner.foodstory.co',
            showcase: POSBackOfficeUIShowcase,
        },
        {
            preview: OnlineOrderUI,
            title: "Online Order",
            description: `The food delivery platform is accessed primarily through LINE, a popular messaging app. 
            It functions as a web application where users can order food for pickup or delivery, 
            similar to other delivery services.  Additionally, it integrates seamlessly with FoodStory's POS system, 
            ensuring accurate tracking of restaurant inventory.  In this project, 
            I was solely responsible for a complete overhaul of the user interface (UI) to modernize its look and feel while maintaining full functionality. 
            `,
            technologies: ['Javascript', 'Vue2', 'Element-UI', 'ExpressJS', 'Postgresql', 'Elastic Beanstalk', 'S3', 'Firebase Authentication'],
            repository: 'Private',
            endpoint: 'https://order.foodstory.co',
            showcase: OnlineOrderUIShowcase,
        },
        {
            preview: NigiwaiGoodWealthUI,
            title: "Nigiwai Good Wealth",
            description: `I collaborated on developing a web application from the ground up that allows franchisees to conveniently purchase ingredients for restocking their inventory. 
            As a core team member, I focused on frontend development. This involved setting up the project, 
            creating reusable components according to the design specifications, and establishing CI/CD for automated deployment. 
            Additionally, I standardized the folder structure and coding practices to ensure project maintainability and provided clear instructions for other team members.
            I also occasionally assisted with backend development tasks.
            `,
            technologies: ['Typescript', 'Vue3', 'Element-UI', 'NestJS', 'DocumentDB', 'Elastic Beanstalk', 'S3'],
            repository: 'Private',
            endpoint: 'https://www.ngwfood.com',
            showcase: NigiwaiGoodWealthUIShowcase,
        },
        {
            preview: NigiwaiGoodWealthBackOfficeUI,
            title: "Nigiwai Good Wealth - Back Office",
            description: `The administrative center of Nigiwai Good Wealth gives administrators the tools they need to handle orders, accounts, franchisees, and products. 
            Like the customer web, it's crafted with the latest tech and coding standards, making it a seamless part of operations. 
            With its user-friendly design and full range of features, it's a breeze for administrators to keep everything running smoothly and make smart decisions to boost the business.
            `,
            technologies: ['Typescript', 'Vue3', 'Element-UI', 'NestJS', 'DocumentDB', 'Elastic Beanstalk', 'S3'],
            repository: 'Private',
            endpoint: '-',
            showcase: NigiwaiGoodWealthBackOfficeUIShowcase
        },
        {
            preview: NipaCloudUI,
            title: "Nipa Cloud",
            description: `This is a local cloud provider designed for businesses in Thailand. While its functionalities are similar to other platforms, 
            it integrates seamlessly with OpenStack for comprehensive cloud service management. During my time here,
            I was responsible for developing and maintaining the web application, including both the frontend and backend.`,
            technologies: ['Typescript', 'Vue3', 'Vuetify', 'Koa', 'TypeStack', 'MySQL', 'KnexJS', 'MongoDB', 'NATs'],
            repository: 'Private',
            endpoint: 'https://portal.nipa.cloud',
        },
        {
            preview: ParkingLotSystemUI,
            title: 'Simple APIs with Parking Lot System',
            description: `This is one of my personal projects. During a company test, 
            I was given an assignment to demonstrate my backend development skills by bulding simple APIs for a parking lot system.`,
            technologies: ['NestJS', 'PogresQL', "Prisma"],
            repository: 'https://github.com/namatsawin/parking-lot-system',
            endpoint: '-'
        },
        {
            preview: MicroserviceEcommerceUI,
            title: 'Simple Microservice with E-commerce System',
            description: `This is one of my personal projects. During a company test, 
            I was given an assignment to demonstrate my backend development skills by building simple microservice for an e-commerce system.`,
            technologies: ['NestJS', 'PogresQL', "TypeORM"],
            repository: 'https://github.com/namatsawin/ecommerce-microservice',
            endpoint: '-'
        },
        {
            preview: MovieWebUI,
            title: 'Movie Shop',
            description: `This is one of my personal projects. During a company test, 
            I was given an assignment to demonstrate my frontend development skills by building a simple e-commerce system for movies. 
            The system retrieves movie information from a third-party API (themoviedb.org)`,
            technologies: ['ReactJS', 'Redux', 'Styled Components'],
            repository: 'https://github.com/namatsawin/Movie-web',
            endpoint: 'https://5f39efd4ad43c49d76a78a2b--pedantic-pasteur-becb03.netlify.app/'
        },
        {
            preview: TicTacToeUI,
            title: 'Tic Tac Toe',
            description: `Tic Tac Toe! It's a personal project I was writing for fun`,
            technologies: ['ReactJS', 'Redux'],
            repository: 'https://github.com/namatsawin/tictoc',
            endpoint: 'https://5f348ae085c4c4ec25a89763--friendly-golick-0a6986.netlify.app'
        },
        {
            preview: TodoListUI,
            title: 'TODO List',
            description: `TODO List! It's a personal project I was writing for fun`,
            technologies: ['ReactJS', 'Redux', 'Styled Components'],
            repository: 'https://github.com/namatsawin/Todolist',
            endpoint: 'https://5f35d949e1449d1ebd8e5631--musing-brattain-95ba1e.netlify.app/'
        }
    ]

    const isValidUrl = (urlString?: string) => {
        if (!urlString) return false
            var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
        '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
        return !!urlPattern.test(urlString);
    }

    const ButtonAction = ({ children, ...rest }: React.PropsWithChildren<React.ButtonHTMLAttributes<any>>) => {
        return (
            <button className="border-neutral-700 border-2 py-1 px-4 hover:bg-neutral-900 font-bold" { ...rest }>
                {children} 
            </button>
        )
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-12">
                {/* <TitlePeriodic text="Work"/> */}
                {works.map((work, index) => {
                    return (
                        <section
                            key={index}
                            className={`flex flex-col lg:grid gap-10 border-b-[2px] pb-10 border-neutral-700 last:border-none ${index % 2 ? 'lg:grid-cols-[1fr_auto]' : 'lg:grid-cols-[auto_1fr]'}`}
                        >
                            <div className={`
                                flex justify-center items-center ${index % 2 ? 'order-first lg:order-last' : 'order-first'}
                            `}>
                                <img 
                                    src={work.preview} 
                                    width={500} 
                                    height={400} 
                                    className="rounded-xl group-hover:blur transition-all"   
                                />
                            </div>  
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-xl text-yellow-500'>     
                                    {work.title}
                                </h1>

                                <div>
                                    <p>
                                        Endpoint: {
                                            isValidUrl(work.endpoint) ? 
                                                <a href={work.endpoint} target="_blank" className="hover:underline">{work.endpoint}</a> : 
                                                work.endpoint
                                        }
                                    </p>
                                    <p>
                                        Repository: {
                                            isValidUrl(work.repository) ? 
                                                <a href={work.repository} target="_blank" className="hover:underline">{work.repository}</a> : 
                                                work.repository
                                        }
                                    </p>
                                </div>

                                <p className='text-sm'>
                                    {work.description}
                                </p>

                                <div className="flex gap-2 flex-wrap">
                                    {
                                        work.technologies.map((technology, techIndex) => <Badge key={techIndex}>{technology}</Badge>)
                                    }
                                </div>
                                {
                                    work.showcase ?
                                    <div className="flex gap-2 mt-4">
                                        <ButtonAction onClick={() => work.showcase && setUIShowcase({ open: true, source: work.showcase })}>
                                            See UI Showcase
                                        </ButtonAction>
                                    </div> : ''
                                }
                            </div>
                        </section>
                    )
                })}
            </div>

            <UIShowcase isOpen={uiShowcase.open} onClose={() => setUIShowcase({ open: false, source: '' })} source={uiShowcase.source} />
        </Modal>
    )
}

export default Portfolio;