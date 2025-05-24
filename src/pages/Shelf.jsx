import BookShelf from '../components/BookShelf';
import data from '../../seriesData.json';

// function Shelf() {
//   return (
//     <div className="bg-[#FAF8F0] min-h-screen p-6">
//       <h1 className="text-[#794F41] text-4xl font-bold text-center mb-8">Bookshelf</h1>
//       <BookShelf data={data} />
//     </div>
//   );

function Shelf() {
  return (
    <div className="bg-[#FAF8F0] min-h-screen p-6">
      <h1 className="gaegu-regular text-[#794F41] text-4xl font-bold text-center mb-8">
        Bookshelf
      </h1>
      <BookShelf data={data} />
    </div>
  );
}

export default Shelf;
