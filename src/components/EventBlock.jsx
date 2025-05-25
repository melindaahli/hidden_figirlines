import overlayImage from '../assets/logooo.png';

// change the card and overlayImage part
export default function EventBlock() {
    const card = {
        name: "Inspiring Woman",
        description: "A powerful figure who made a lasting impact through her achievements."
    };

    return (
        <div className="p-5 flex flex-col text-center bg-white shadow-md rounded-2xl w-60 h-[70vh] justify-center items-center">
            <img 
                src={overlayImage} 
                alt="Card Visual" 
                className="w-32 h-32 object-contain mb-4" 
            />
            <h1 className="text-sm lexend-deca-regular mb-2">{card.name}</h1>
            <p className="text-[10px] lexend-deca-regular">{card.description}</p>
        </div>
    );
}
