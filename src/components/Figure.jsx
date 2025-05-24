export default function Figure({ image, name }) {
    return (
        <div className="w-24 flex-shrink-0 text-center text-white">
            <img 
                src={image} 
                alt={name} 
                className="w-full h-32 object-cover rounded" 
            />
            <p className="mt-2 text-sm gaegu-regular">{name}</p>
        </div>
    );
}
