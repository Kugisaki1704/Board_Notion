import React, { useState } from 'react';
import ProjectBoard from './ProjectBoard';


function StartingPage() {
  const [boardCreated, setBoardCreated] = useState(false);

  const handleCreateBoard = () => {
    setBoardCreated(true);
  };

  return (
    <div className="container mx-auto mt-4">
      {!boardCreated ? (
        <div className="text-center">
          <p className="text-lg mb-2 borser border-gray-100 rounded">No Boards created yet</p>
          <button onClick={handleCreateBoard} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Board
          </button>
        </div>
      ) : (
        <ProjectBoard listType="New Board" />
      )}
    </div>
  );
}

export default StartingPage;
