export default function BreedShow({ breed }) {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg mt-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-center">{breed.name}</h2>
      <p className="text-center"><span className="font-semibold ">Origin:</span> {breed.origin}</p>
      <p className="text-center"><span className="font-semibold">Size:</span> {breed.size}</p>
    </div>
  );
}