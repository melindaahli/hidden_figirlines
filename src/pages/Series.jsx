import { useState } from 'react'

import WideButton from '../components/WideButton'
import FigureList from '../components/FigureList'
import seriesData from '../../seriesData.json'
import Popup from '../components/Popup'

export default function Series(props) {
    

    const seriesIndex = props.chosenSeriesIndex;
    const specificSeries = seriesData[seriesIndex];

    const [modalOpen, setModalOpen] = useState(false);

    

    const [pulledFigure, setPulledFigure] = useState('');
    // add pulledFigure to a state set in app of all collected figures

    const openModal = (imgUrl) => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const openBox = (specificSeries) => {
        const figureIndex = Math.floor(Math.random() * specificSeries.options.length);
        const selectedFigure = specificSeries.options[figureIndex];
        setPulledFigure(selectedFigure);
        openModal(selectedFigure.image);
    };


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
                <div className="flex justify-start w-full">
                    <button className="lexend-deca-regular text-base" onClick={() => props.setCurrentPage('store')}>&lt; back to boxes</button>
                </div>
                <h1 className="lexend-deca-bold text-6xl">{specificSeries['name']}</h1>
                <div className="max-w-lg">
                    <p className="gaegu-regular text-2xl text-pretty">{specificSeries['description']}</p>
                </div>
                <FigureList specificSeries={specificSeries} />
                <WideButton text={"OPEN BOX"} clickFunction={() => openBox(specificSeries)} />
            </div>
            { modalOpen && (<Popup pulledFigure={pulledFigure} openModal={openModal} closeModal={closeModal} />) }
        </div>

    );
}

//modalImage={modalImage} setModalImage={setModalImage} status={status} modalStatus={modalStatus} setModalStatus={setModalStatus} 