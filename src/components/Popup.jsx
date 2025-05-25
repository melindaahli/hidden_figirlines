import { useState } from 'react'

export default function Popup(props) {
    const status = {
        'closedBox': 0,
        'openedBox': 1,
        'figureShown': 2
      };

    const [modalImage, setModalImage] = useState(props.closedBox);
    const [modalStatus, setModalStatus] = useState(status.closedBox);
    const [openBoxStatus, setOpenBoxStatus] = useState(false);

    const updateModalStatus = () => {
        switch (modalStatus) {
            case status.closedBox:
                setModalStatus(status.openedBox);
                setModalImage(props.openedBox);
                setOpenBoxStatus(true);
                break;
            case status.openedBox:
                setOpenBoxStatus(false);
                setModalStatus(status.figureShown);
                setModalImage(props.pulledFigure.image);
                break;
            default:
                setOpenBoxStatus(false);
                setModalStatus(status.closedBox);
                setModalImage(props.closedBox);
                props.closeModal();
        }

    };

    const isOpenedBox = openBoxStatus;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
                <div className="p-4">
                    <img src={modalImage} alt="Blind Box" 
                        className={`object-contain ${isOpenedBox ? 'mt-[-90px] mr-[-30px]' : ''}`}  
                        onClick={() => updateModalStatus()}
                        style={{width: isOpenedBox ? '700px' : '450px'}}
                    />
                </div>
        </div>
    );
}