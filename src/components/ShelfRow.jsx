import Figure from './Figure';

export default function ShelfRow({ series, collectedFigures }) {
    return (
        <div className="bg-[#9B6A59] p-4 rounded">
            <h2 className="gaegu-regular text-white mb-4 text-lg font-semibold">{series.name}</h2>
            <div className="flex space-x-4 overflow-x-auto justify-between p-2">
                {series.options.map((option, idx) => {
                    const isCollected = collectedFigures.includes(option);
                    // console.log(collectedFigures, option.name, isCollected);
                    return (
                        <Figure
                            key={idx}
                            image={option.image}
                            name={option.name}
                            description={option.description}
                            front={option.front}
                            back={option.back}
                            collected={isCollected}
                        />
                    );
                })}
            </div>
        </div>
    );
}
