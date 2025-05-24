import WideButton from '../components/WideButton'
import FigureList from '../components/FigureList'
import seriesData from '../../series.json'

export default function Series(props) {
    let seriesIndex = props.chosenSeriesIndex;
    const specificSeries = seriesData[seriesIndex];

    return (
        <div className="flex items-center">
            <div className="p-8">
                <img
                    src={specificSeries['image']}
                    alt="Series Box"
                    className="w-96 h-auto"
                />
            </div>
            <div className="flex flex-col gap-[4vh]">
                <btn className="lexend-deca-regular text-base" onClick={() => props.setCurrentPage('store')}>&lt; back to boxes</btn>
                <h1 className="lexend-deca-bold text-6xl">{specificSeries['name']}</h1>
                <p className="gaegu-regular text-2xl">{specificSeries['description']}</p>
                <FigureList specificSeries={specificSeries} />
                <WideButton text={"OPEN BOX"} clickFunction={"function-that-will-open-boxes"} />
            </div>
        </div>
    );
}