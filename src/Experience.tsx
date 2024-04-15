import Modal from "./components/Modal";

interface Props extends React.PropsWithChildren {
    isOpen: boolean,
    onClose?: React.MouseEventHandler<HTMLDivElement>
}

export function Experience({ isOpen, onClose }: Props) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col gap-6 bg-black">
                <h1 className="text-xl text-yellow-500">
                    Experience
                </h1>
            </div>
        </Modal>
    )
}

export default Experience;