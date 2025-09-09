export default function BreedList({ breeds, onSelect, onEdit, onDelete }) {
  if (breeds.length === 0) {
    return <p className="text-center text-gray-500">No breeds added yet.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-center ">
      {breeds.map((breed) => (
        <div key={breed.id} className="bg-white p-4 shadow rounded-lg  ">
          <h3 className="text-lg font-bold">{breed.name}</h3>
          <div className="mt-2 flex gap-2 items-stretch ">
            <button
              className="px-3 py-1 bg-green-500 text-white rounded "
              onClick={() => onSelect(breed)}
            >
              View
            </button>
            <button
              className="px-3 py-1 bg-yellow-500 text-white rounded"
              onClick={() => onEdit(breed)}
            >
              Edit
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => onDelete(breed.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}