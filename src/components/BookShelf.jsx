import ShelfRow from './ShelfRow';

export default function BookShelf({ data, collectedFigures }) {
    return (
        <div className="bg-[#794F41] p-4 space-y-6">
            {data.map((series, index) => (
                <ShelfRow key={index} series={series} collectedFigures={collectedFigures}/>
            ))}
        </div>
    );
}
