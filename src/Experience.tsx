import Modal from "./components/Modal";
import Timeline from "./components/Timeline";

import NipaIcon from './assets/images/nipa.webp'
import LivingMobileIcon from './assets/images/livingmobile.webp'
import InterfaceIcon from './assets/images/interface.webp'
import TitlePeriodic from "./components/TitlePeriodic";

interface Props extends React.PropsWithChildren {
    isOpen: boolean,
    onClose?: React.MouseEventHandler<HTMLDivElement>
}

export function Experience({ isOpen, onClose }: Props) {
    const experienceStories = [
        {
            date: 'JUL 2021 - FEB 2024',
            title: 'Full Stack Developer at Living Mobile Co., Ltd.',
            icon: <img src={LivingMobileIcon} width={40} height={40} className="mx-2" />,
            description: `
            To face different challenges, I decided to move to a company that provides restaurant solutions to enhance efficiency and quality in the restaurant business. 
            Initially, I wasn't assigned to a specific team but was tasked with revamping the entire UI of the web application called 'Online Order' 
            a food delivery platform similar to Grab or Uber Eats. After completing this assignment, I joined the market team to develop and maintain 
            a website called 'Foodstory Market' that allows restaurant owners to purchase ingredients to restock their inventory. 
            I also developed the web application 'Nigiwai Good Wealth' from scratch, a platform that supports franchisees in inventory restocking and franchise management.
            After the release of Nigiwai Good Wealth, the market team was disbanded due to business reasons, and I was transferred to the core team. There,
            I undertook the task of entirely revamping the web application 'Mobile Order' a platform that allows customers visiting 
            a restaurant to place orders via the web application. However, it involved more than just UI revamping due to its legacy code. 
            So, I opted to rebuild it from the ground up using modern technologies to ensure higher quality, maintainability, and performance.
            Following this, the company merged with LINE MAN Wongnai, giving me the chance to work closely with their developers on 
            the 'Mobile Order' project to develop and improve upcoming and existing features.
            `,
        },
        {
            date: 'SEP 2020 - JUL 2021',
            title: 'Full Stack Developer at NIPA Technology Co., Ltd.',
            icon: <img src={NipaIcon} width={60} height={60}/>,
            description: `
                In my first official job, I worked in the cloud development team to develop and maintain a public cloud platform. 
                During my time here, I encountered several technologies such as VueJS, Vuetify, NodeJS, Koa, TypeStack, KnexJS, k8s, argocd, MongoDB, MySQL, and NATs. 
                In my role, I mainly focused on frontend and backend development using Typescript and practiced Object-Oriented Programming. 
                We worked in an agile methodology and had strict code review, retrospective, and daily scrum, just like everywhere else.
            `
        },
        {
            date: 'JUN 2019 - DEC 2019',
            title: 'Intern at Interface Systech Co. Ltd.',
            icon: <img src={InterfaceIcon}width={60} height={60}/>,
            description: `
                At Interface, we create solutions for a variety of industries spanning a wide range of technologies, from automated factory systems to testing machines for laboratories. 
                I worked as a technician for a couple of months, responsible for wiring and assembling automatic industrial machines according to design specifications. 
                Additionally, I had the opportunity to assist the R&D department in developing a WinForm Application with .NET Framework for use in machines, 
                I also had the chance to travel to Fukuoka in Japan and stay there for 3-4 weeks to fix bugs, maintain the application, and provide instruction to clients.
            `
        }
    ]
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-8">
                <TitlePeriodic text="Experience" className="justify-center" />
                <Timeline stories={experienceStories} />
            </div>
        </Modal>
    )
}

export default Experience;