import { useState } from "react";

export default function BreedEdit({ breed, onUpdate, onCancel }) {
  const [name, setName] = useState(breed.name);
  const [origin, setOrigin] = useState(breed.origin);
  const [size, setSize] = useState(breed.size);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(breed.id, { name, origin, size });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-yellow-50 p-4 shadow-md rounded-lg mt-6 max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Edit Breed</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}