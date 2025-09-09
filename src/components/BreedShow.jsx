export default function BreedShow({ breed }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">{breed.name}</h2>
      <p><span className="font-semibold">Origin:</span> {breed.origin}</p>
      <p><span className="font-semibold">Size:</span> {breed.size}</p>
    </div>
  );
}