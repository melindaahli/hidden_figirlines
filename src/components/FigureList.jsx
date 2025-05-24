export default function FigureList(props) {

    const renderFigures = () => props.specificSeries.options.map((option, idx) => (
        <div key={idx} className="w-24 flex-shrink-0 text-center text-base-content">
            <img 
                src={option.image} 
                alt={option.name} 
                className="w-full h-32 object-cover rounded" 
            />
            <p className="mt-2 text-sm gaegu-regular">{option.name}</p>
        </div>
    ))

    return (
        <div>
            <div className="flex space-x-4 overflow-x-auto">
                {renderFigures()}
            </div>
        </div>
    );
}