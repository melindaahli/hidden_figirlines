import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable, } from "@hello-pangea/dnd";
import events from '../../events.json'
import WideButton from "./WideButton";

const prizeMoney = 50;

const getRandomEvents = (events, count = 5) => {
    const shuffled = [...events].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

export default function GameSlots({ currency, setCurrency }) {
    const [initialCards, setInitialCards] = useState(getRandomEvents(events));

    const [bank, setBank] = useState(initialCards);

    const resetEvents = () => {
        const selected = getRandomEvents(events);
        setInitialCards(selected);
        setBank(initialCards);
    };

    useEffect(() => {
        resetEvents();
    }, []);

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;
    
        const newBank = [...bank];
        const [movedItem] = newBank.splice(source.index, 1);
        newBank.splice(destination.index, 0, movedItem);
    
        setBank(newBank);
    };

    const handleSubmit = () => {
        let isCorrect = true;
        let pastDate = 0;
        for (let i = 0; i < bank.length; i++) {
            let date = bank[i].date;
            console.log(date);
            if (date < pastDate) { isCorrect = false; }
            pastDate = date;
        }

        alert(isCorrect ? "Correct order!" : "Incorrect order, try again!");
        if (isCorrect) { 
            setCurrency(currency + prizeMoney); 
            resetEvents();
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-center text-4xl font-bold mb-8">Timeline</h1>

            <div className="flex flex-row items-center">
            <p className="lexend-deca-bold">oldest</p>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="bank" direction="horizontal">
                    {(provided) => (
                        <div
                            className="flex space-x-4 justify-center m-4"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {bank.map((card, index) => (
                                <Draggable draggableId={card.id} index={index} key={card.id}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <div className="p-5 flex flex-col text-center bg-white shadow-md rounded-2xl w-60 h-50 justify-center items-center">
                                                <h1 className="text-sm lexend-deca-regular mb-2">{card.name}</h1>
                                                <p className="text-[10px] lexend-deca-regular">{card.description}</p>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <p className="lexend-deca-bold">latest</p>
            </div>

            <div className="text-center mt-6 flex justify-center">
                <WideButton clickFunction={() => handleSubmit()} text={"SUBMIT"} />
            </div>

        </div>
    );
}
