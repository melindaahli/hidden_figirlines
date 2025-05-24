import { useState } from 'react';

export default function Figure({ image, name, description, real_image, collected }) {
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
      <div
        className={`w-24 flex-shrink-0 text-center text-white ${
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

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-transparent"
          onClick={closePopup}
        >
          <div
            className="relative flex bg-transparent rounded-xl items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-[280px] flex items-center justify-center">
              <img
                src={image}
                alt={name}
                className="h-[280px] rounded-xl shadow-md"
              />
            </div>

            <div
              className="w-[220px] flex items-center justify-center perspective cursor-pointer"
              onClick={() => setFlipped(!flipped)}
            >
              <div
                className={`relative w-[220px] h-[280px] transition-transform duration-500 transform-style-preserve-3d ${
                  flipped ? 'rotate-y-180' : ''
                }`}
              >
                <div className="absolute w-full h-full backface-hidden bg-[#794F41] rounded-lg p-4 shadow-md flex flex-col justify-center items-center text-center">
                  <h3 className="text-lg font-bold mb-2 gaegu-regular text-[#FCC8BA]">
                    {name}
                  </h3>
                  <p className="text-sm text-[#F2F0E5]">{description}</p>
                </div>

                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden">
                  <img
                    src={real_image}
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
