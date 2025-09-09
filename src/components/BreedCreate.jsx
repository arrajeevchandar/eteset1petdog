import { useState } from "react";

export default function BreedCreate({ onCreate }) {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onCreate({ name, origin, size });
    setName("");
    setOrigin("");
    setSize("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow-md rounded-lg mb-6 max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Add Dog Breed</h2>
      <input
        type="text"
        placeholder="Breed Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Size (Small/Medium/Large)"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Breed
      </button>
    </form>
  );
}