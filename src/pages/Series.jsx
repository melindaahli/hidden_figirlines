import { useState } from 'react'

import WideButton from '../components/WideButton'
import FigureList from '../components/FigureList'
import seriesData from '../../seriesData.json'
import Popup from '../components/Popup'

export default function Series(props) {
    const boxCost = 150;

    const seriesIndex = props.chosenSeriesIndex;
    const specificSeries = seriesData[seriesIndex];

    const [modalOpen, setModalOpen] = useState(false);

    const[closedBox, setClosedBox] = useState(specificSeries.image);
    const[openedBox, setOpenedBox] = useState(specificSeries.open_box);

    const [pulledFigure, setPulledFigure] = useState('');

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const openBox = (specificSeries) => {
        if (props.currency < boxCost) {
            props.setAlertMessage("Not enough coins!");
            props.setAlertType("error");
            props.setShowAlert(true);
        }
        else {
            const figureIndex = Math.floor(Math.random() * specificSeries.options.length);
            const selectedFigure = specificSeries.options[figureIndex];
            setPulledFigure(selectedFigure);
            openModal();
            props.setCurrency(props.currency - 150);

            props.setCollectedFigures(prevFigures => {
                const alreadyCollected = prevFigures.some(fig => fig.name === selectedFigure.name);
                if (!alreadyCollected) {
                    return [...prevFigures, selectedFigure];
                }
                return prevFigures;
            });
        }

        // console.log(props.collectedFigures)
        
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
                <WideButton text={"PURCHASE for 150"} clickFunction={() => openBox(specificSeries)} />
            </div>
            { modalOpen && (<Popup pulledFigure={pulledFigure} openModal={openModal} closeModal={closeModal} closedBox={closedBox} openedBox={openedBox}/>) }
        </div>

    );
}