// change the card and overlayImage part
export default function EventBlock({ card }) {

    return (
        <div className="p-5 grid-rows-3 text-center bg-white shadow-md rounded-2xl w-60 h-[50vh] justify-between items-center">
            <img 
                src={card.picture} 
                alt="Card Visual" 
                className="object-cover row-start-0 row-span-1" 
            />
            <h1 className="text-xl/5 mt-4 mb-2 lexend-deca-regular">{card.name}</h1>
            <p className="text-base/5 tracking-tight gaegu-regular">{card.description}</p>
        </div>
    );
}
