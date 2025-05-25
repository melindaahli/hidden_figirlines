import { useState } from 'react'

export default function Popup(props) {
    const status = {
        'closedBox': 0,
        'openedBox': 1,
        'figureShown': 2
      };

    const closedBoxImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdowN2auc5iU1bQtp0LETw2G21A52RRcb17w&s";
    const openedBoxImage = "https://cdn-icons-png.flaticon.com/512/869/869027.png"

    const [modalImage, setModalImage] = useState(closedBoxImage);
    const [modalStatus, setModalStatus] = useState(status.closedBox);

    const updateModalStatus = () => {
        switch (modalStatus) {
            case status.closedBox:
                setModalStatus(status.openedBox);
                setModalImage(openedBoxImage);
                break;
            case status.openedBox:
                setModalStatus(status.figureShown);
                setModalImage(props.pulledFigure.image);
                break;
            default:
                setModalStatus(status.closedBox);
                setModalImage(closedBoxImage);
                props.closeModal();
        }

    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
                <div className="p-4">
                    <img src={modalImage} alt="Blind Box" className="object-contain max-h-[50vh]" onClick={() => updateModalStatus()}/>
                </div>
        </div>
    );
}