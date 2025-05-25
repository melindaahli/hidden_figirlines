import WideButton from '../components/WideButton';

export default function Info({ setCurrentPage }) {
  return (
    <div className="flex items-center justify-center p-12 gap-16">
      {/* Left: Rectangular screen-like image */}
      <div className="bg-[#794F41] p-3 rounded-lg shadow-lg">
        <img
          src="./public/timeline.gif"
          alt="Mock Game Screen"
          className="w-[720px] h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Right: Instructions */}
      <div className="flex flex-col gap-6 max-w-md">

        <h1 className="text-4xl font-bold text-[#794F41] lexend-deca-regular">How to Play</h1>

        <p className="text-[#794F41] text-lg gaegu-regular">
          ~ Five historical events will be displayed. <br />
          ~ Drag and drop to place them on the timeline. <br />
          ~ If correct, earn 50 coins!!! <br />
          ~ Can you sort all events in chronological order?
        </p>

        <div className="mt-4">
          <WideButton
            text="PLAY"
            clickFunction={() => setCurrentPage('game')}
          />
        </div>
      </div>
    </div>
  );
}
