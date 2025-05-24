export default function ShelfRow({ series }) {
    return (
        <div className="bg-[#9B6A59] p-4 rounded">
            <h2 className="gaegu-regular text-white mb-4 text-lg font-semibold">{series.name}</h2>
            <div className="flex space-x-4 overflow-x-auto">
                {series.options.map((option, idx) => (
                    <div key={idx} className="w-24 flex-shrink-0 text-center text-white">
                        <img 
                            src={option.image} 
                            alt={option.name} 
                            className="w-full h-32 object-cover rounded" 
                        />
                        <p className="mt-2 text-sm gaegu-regular">{option.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
