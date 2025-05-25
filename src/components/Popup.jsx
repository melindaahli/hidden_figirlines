import { useState } from 'react';

export default function Popup(props) {
  const status = {
    closedBox: 0,
    openedBox: 1,
    figureShown: 2,
  };

  const [modalImage, setModalImage] = useState(props.closedBox);
  const [modalStatus, setModalStatus] = useState(status.closedBox);
  const [openBoxStatus, setOpenBoxStatus] = useState(false);
  const [flipped, setFlipped] = useState(false);

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
        break;
      default:
        setOpenBoxStatus(false);
        setModalStatus(status.closedBox);
        setModalImage(props.closedBox);
        props.closeModal();
    }
  };

  const { pulledFigure } = props;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      {modalStatus !== status.figureShown ? (
        <div className="p-4">
          <img
            src={modalImage}
            alt="Blind Box"
            className={`object-contain transition-all duration-300 ${
              openBoxStatus ? 'mt-[-90px] mr-[-30px]' : ''
            }`}
            onClick={updateModalStatus}
            style={{ width: openBoxStatus ? '740px' : '600px' }}
          />
        </div>
      ) : (
        // Final state/>
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={props.closeModal}
        >
          <div
            className="relative flex bg-transparent rounded-xl items-center justify-center gap-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enlarged Figure Image */}
            <div className="w-[400px] flex items-center justify-center">
              <img
                src={pulledFigure.image}
                alt={pulledFigure.name}
                className="h-[400px] rounded-xl"
              />
            </div>

            {/* Flip Card */}
            <div
              className="w-[300px] flex items-center justify-center perspective cursor-pointer"
              onClick={() => setFlipped(!flipped)}
            >
              <div
                className={`relative w-[300px] h-[419px] transition-transform duration-500 transform-style-preserve-3d ${
                  flipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Back of card (non-flipped) */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden">
                  <img
                    src={pulledFigure.back}
                    alt={`${pulledFigure.name} back`}
                    className="h-full w-full object-contain rounded"
                  />
                </div>

                {/* Front of card (flipped) */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden">
                  <img
                    src={pulledFigure.front}
                    alt={`${pulledFigure.name} front`}
                    className="h-full w-full object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
