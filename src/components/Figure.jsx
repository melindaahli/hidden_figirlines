import { useState } from 'react';

export default function Figure({ image, name, description, front, back, collected }) {
  const [selected, setSelected] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const closePopup = () => {
    setSelected(false);
    setFlipped(false);
  };

  const handleClick = () => {
    if (collected) {
      setSelected(true);
    }
  };

  return (
    <>
      {/* Bookshelf figure view */}
      <div
        className={`h-full flex-shrink-0 text-center text-white ${
          collected ? 'cursor-pointer' : 'cursor-not-allowed'
        }`}
        onClick={handleClick}
      >
        <img
          src={image}
          alt={name}
          className={`w-full h-32 object-cover rounded transition duration-300 ${
            collected ? '' : 'blur-sm brightness-50'
          }`}
        />
        <p className="mt-2 text-sm gaegu-regular">{name}</p>
      </div>

      {/* Popup display */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={closePopup}
        >
          <div
            className="relative flex bg-transparent rounded-xl items-center justify-center gap-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enlarged figure */}
            <div className="w-[400px] flex items-center justify-center">
              <img
                src={image}
                alt={name}
                className="h-[400px] rounded-xl"
              />
            </div>

            {/* Enlarged photocard with flip */}
            <div
              className="w-[300px] flex items-center justify-center perspective cursor-pointer"
              onClick={() => setFlipped(!flipped)}
            >
              <div
                className={`relative w-[300px] h-[419px] transition-transform duration-500 transform-style-preserve-3d ${
                  flipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT (shows back image) */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-lg flex items-center justify-center shadow-xl overflow-hidden">
                  <img
                    src={back}
                    alt={`${name} back`}
                    className="h-full w-full object-contain rounded"
                  />
                </div>

                {/* BACK (shows front image) */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg flex items-center justify-center shadow-xl overflow-hidden">
                  <img
                    src={front}
                    alt={`${name} real`}
                    className="h-full w-full object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
