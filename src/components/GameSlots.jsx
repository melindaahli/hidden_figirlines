import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import events from '../../events.json'

const getRandomEvents = (events, count = 5) => {
    const shuffled = [...events].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const GameSlots = () => {
    // Pick 5 random events once on mount
    const [initialCards, setInitialCards] = useState([]);
    const [answerKey, setAnswerKey] = useState([]);

    useEffect(() => {
        const selected = getRandomEvents(events, 5);
        setInitialCards(selected);

        // Assuming events in JSON are already ordered chronologically,
        // sort selected events by their index in original events array for answer key
        const sortedAnswerKey = [...selected].sort(
            (a, b) => events.findIndex(e => e.id === a.id) - events.findIndex(e => e.id === b.id)
        );
        setAnswerKey(sortedAnswerKey);
    }, []);

    const [timeline, setTimeline] = useState([null, null, null, null, null]);
    const [bank, setBank] = useState([]);

    // When initialCards changes, set bank accordingly (all cards start in the bank)
    useEffect(() => {
        setBank(initialCards);
    }, [initialCards]);

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
        // Check if timeline order matches answerKey order
        // Both timeline and answerKey are arrays of objects
        // Check if all IDs match in order
        const isCorrect = timeline.every((card, idx) => card && card.id === answerKey[idx].id);
        console.log("Timeline:", timeline);
        console.log("Answer Key:", answerKey);
        alert(isCorrect ? "Correct order!" : "Incorrect order, try again!");
    };

    return (
        <div className="p-8">
            <h1 className="text-center text-2xl mb-4 font-bold">Timeline</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex justify-center gap-4 mb-6">
                    {timeline.map((card, idx) => (
                        <Droppable droppableId={`slot-${idx}`} key={idx}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className="w-40 h-24 border-2 shadow-md border-red-200 rounded-xl flex items-center justify-center"
                                >
                                    {card ? (
                                        <Draggable draggableId={card.id} index={idx} key={card.id}>
                                            {(provided) => (
                                                <div
                                                    className="p-2 bg-white shadow-md rounded w-40 h-24 flex items-center justify-center text-center"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {card.name}
                                                </div>
                                            )}
                                        </Draggable>
                                    ) : null}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>

                <Droppable droppableId="bank" direction="horizontal">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="flex gap-4 justify-center mb-6"
                        >
                            {bank.map((card, index) => (
                                <Draggable draggableId={card.id} index={index} key={card.id}>
                                    {(provided) => (
                                        <div
                                            className="p-2 bg-white shadow-md rounded w-40 h-24 flex items-center justify-center text-center"
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
            <div className="text-center" style={{ display: "flex", justifyContent: "center" }}>
                <button
                    onClick={handleSubmit}
                    className="btn btn-wide btn-primary rounded-4xl lexend-deca-bold flex flex-col space-y-4 mt-4 text-2xl gaegu-regular"
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
};

export default GameSlots;
