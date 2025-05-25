import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable, } from "@hello-pangea/dnd";
import events from '../../events.json'
import WideButton from "./WideButton";

// to do: randomize events every click
const getRandomEvents = (events, count = 5) => {
    const shuffled = [...events].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

let initialCards = getRandomEvents(events);

export default function GameSlots() {
    const [bank, setBank] = useState(initialCards);
    const [timeline, setTimeline] = useState([null, null, null, null, null]);

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;
        if (!destination) return;

        const fromBank = source.droppableId === "bank";
        const toBank = destination.droppableId === "bank";
        const fromSlot = source.droppableId.startsWith("slot");
        const toSlot = destination.droppableId.startsWith("slot");

        if (fromBank && toSlot) {
            const card = bank.find((c) => c.id === draggableId);
            const newBank = bank.filter((c) => c.id !== draggableId);
            const slotIndex = parseInt(destination.droppableId.split("-")[1], 10);
            const newTimeline = [...timeline];

            // If the target slot is already filled, move it back to the bank
            const replacedCard = newTimeline[slotIndex];
            if (replacedCard) {
                newBank.push(replacedCard);
            }

            newTimeline[slotIndex] = card;
            setBank(newBank);
            setTimeline(newTimeline);
        }

        else if (fromSlot && toBank) {
            const slotIndex = parseInt(source.droppableId.split("-")[1], 10);
            const card = timeline[slotIndex];
            if (!card) return;
            const newTimeline = [...timeline];
            newTimeline[slotIndex] = null;
            setTimeline(newTimeline);
            setBank([...bank, card]);
        }

        else if (fromSlot && toSlot) {
            const fromIndex = parseInt(source.droppableId.split("-")[1], 10);
            const toIndex = parseInt(destination.droppableId.split("-")[1], 10);
            const newTimeline = [...timeline];

            // Swap the cards
            const temp = newTimeline[fromIndex];
            newTimeline[fromIndex] = newTimeline[toIndex];
            newTimeline[toIndex] = temp;

            setTimeline(newTimeline);
        }
    };

    const handleSubmit = () => {
        console.log("Submitted Timeline:", timeline);

        let isCorrect = true;

        let pastDate = 0;
        for (let i = 0; i < timeline.length; i++) {
            let event = timeline[i];
            let date = event.date;
            console.log(date); // Access element at index i
            if (date < pastDate) { isCorrect = false; }
            pastDate = date;
        }

        alert(isCorrect ? "Correct order!" : "Incorrect order, try again!");

    };

    return (
        <div className="p-6">
            <h1 className="text-center text-2xl font-bold mb-4">Timeline</h1>

            <DragDropContext onDragEnd={onDragEnd}>



                <div className="flex justify-center space-x-4 mb-6">
                    {timeline.map((card, index) => (
                        <Droppable droppableId={`slot-${index}`} key={index}>
                            {(provided) => (
                                <div
                                    className="w-40 h-24 border-2 border-red-300 rounded flex items-center justify-center bg-gray-50"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {card ? (
                                        <Draggable draggableId={card.id} index={0}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="p-2 bg-white shadow-md rounded"
                                                >
                                                    {card.name}
                                                </div>
                                            )}
                                        </Draggable>
                                    ) : (<></>)}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>

                <Droppable droppableId="bank" direction="horizontal">
                    {(provided) => (
                        <div
                            className="flex space-x-4 justify-center"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {bank.map((card, index) => (
                                <Draggable draggableId={card.id} index={index} key={card.id}>
                                    {(provided) => (
                                        <div
                                            className="p-2 bg-white border shadow-md rounded w-40 h-24 flex items-center justify-center text-center"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {card.name}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            <div className="text-center mt-6 flex justify-center">
                <WideButton clickFunction={() => handleSubmit()} text={"SUBMIT"} />
            </div>

        </div>
    );
}
