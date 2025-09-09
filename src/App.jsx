import { useState, useEffect } from "react";
import BreedCreate from "./components/BreedCreate";
import BreedEdit from "./components/BreedEdit";
import BreedList from "./components/BreedList";
import BreedShow from "./components/BreedShow";

export default function App() {
  const [breeds, setBreeds] = useState(() => {
    const storedBreeds = localStorage.getItem("dogBreeds");
    return storedBreeds ? JSON.parse(storedBreeds) : [];
  });
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [editBreed, setEditBreed] = useState(null);


  useEffect(() => {
    localStorage.setItem("dogBreeds", JSON.stringify(breeds));
  }, [breeds]);

  // create
  const addBreed = (breed) => {
    setBreeds([...breeds, { id: Date.now(), ...breed }]);
  };

  // update
  const updateBreed = (id, updatedBreed) => {
    setBreeds(breeds.map((b) => (b.id === id ? { ...b, ...updatedBreed } : b)));
    setEditBreed(null);
  };

  // delete
  const deleteBreed = (id) => {
    setBreeds(breeds.filter((b) => b.id !== id));
    setSelectedBreed(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Pet Dog Breed Management
      </h1>

     
      <BreedCreate onCreate={addBreed} />

  
      <BreedList
        breeds={breeds}
        onSelect={setSelectedBreed}
        onEdit={setEditBreed}
        onDelete={deleteBreed}
      />

      {/* showdetails */}
      {selectedBreed && <BreedShow breed={selectedBreed} />}

      {/* editform */}
      {editBreed && (
        <BreedEdit
          breed={editBreed}
          onUpdate={updateBreed}
          onCancel={() => setEditBreed(null)}
        />
      )}
    </div>
  );
}
