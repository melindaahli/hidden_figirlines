import { useState } from 'react';
import LeftButton from '../components/LeftButton.jsx';
import RightButton from '../components/RightButton.jsx';
import seriesData from '../../seriesData.json'

const series = seriesData;

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + series.length) % series.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % series.length);
  };

  const getItem = (offset) => {
    const index = (currentIndex + offset + series.length) % series.length;
    return series[index];
  };

  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="flex items-center justify-center space-x-6">
        <LeftButton onClick={prev} />

        {[ -1, 0, 1 ].map((offset) => {
          const item = getItem(offset);
          const isCenter = offset === 0;

          return (
            <div key={item.id} className="flex flex-col items-center">
              <div
                className={`${
                  isCenter ? 'w-[250px] h-[250px] opacity-100 scale-105 z-10'
                           : 'w-[170px] h-[170px] opacity-50 scale-95 z-0'
                } bg-gray-200 rounded-[10px] flex items-center justify-center`}
              >
                {/* Replace with real images */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <span
                className={`mt-2 text-xs ${
                  isCenter ? 'font-semibold text-[#744B3D]' : 'text-[#C4AFA6]'
                }`}
              >
                {item.name}
              </span>
            </div>
          );
        })}

        <RightButton onClick={next} />
      </div>
    </div>
  );
}

export default Carousel;