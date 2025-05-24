import Figure from './Figure';

export default function ShelfRow({ series }) {
    return (
        <div className="bg-[#9B6A59] p-4 rounded">
            <h2 className="gaegu-regular text-white mb-4 text-lg font-semibold">{series.name}</h2>
            <div className="flex space-x-4 overflow-x-auto">
                {series.options.map((option, idx) => (
                    <Figure key={idx} image={option.image} name={option.name} />
                ))}
            </div>
        </div>
    );
}

