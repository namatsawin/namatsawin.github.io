import Modal from "./Modal";

interface Props extends React.PropsWithChildren {
    isOpen: boolean,
    source: string;
    onClose?: React.MouseEventHandler<HTMLDivElement>
}

export function UIShowcase({ isOpen, source, onClose }: Props) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} bodyClass="rounded-xl flex justify-center items-center !p-0 !overflow-hidden">
            <video controls={true} src={source} autoPlay={true} className="rounded-xl aspect-video bg-neutral-900" />
        </Modal>
    )
}

export default UIShowcase;