import Modal from "./components/Modal";

interface Props extends React.PropsWithChildren {
    isOpen: boolean,
    onClose?: React.MouseEventHandler<HTMLDivElement>
}

export function Resume({ isOpen, onClose }: Props) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} bodyClass="w-full h-full">
            <iframe
            loading="lazy"
            style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
            src="https://www.canva.com/design/DAEEVi7HALY/view?embed"
            allowFullScreen
            title="Canva Design"
            ></iframe>
        </Modal>
    )
}

export default Resume