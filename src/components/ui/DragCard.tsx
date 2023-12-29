import React, { useState } from "react";

const DraggableComponent = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

const handleDragEnter = (e) => {
    e.preventDefault();

    if (e.target.id === "machine1") {
      alert("Entered target 1");
    }
};

    return (
        <>
        <div
            id="target1"
            onDragEnter={handleDragEnter}
            onDragOver={(e) => e.preventDefault()}
            className={`m-2 h-16 flex justify-center items-center border-2 border-black bg-${isDragging ? "lightblue" : "white"}`}
        >
            Target 1
        </div>
        <div
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            style={{
                border: "1px solid #000",
                padding: "8px",
                cursor: "grab",
            }}
        >
            Draggable Component
        </div>
        </>
    );
};

export default DraggableComponent;
