import Modal from "./components/Modal";
import TitlePeriodic from "./components/TitlePeriodic";

interface Props extends React.PropsWithChildren {
    isOpen: boolean,
    onClose?: React.MouseEventHandler<HTMLDivElement>
}

export function Portfolio({ isOpen, onClose }: Props) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-8">
                <TitlePeriodic text="Inprogress..." className="justify-center" />
            </div>
        </Modal>
    )
}

export default Portfolio;