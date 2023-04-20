import { useState } from "react";
import style from "./index.module.css";

const rows = 3;
const columns = 3;

const imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

const Puzzle = () => {
  const [turns, setTurns] = useState(0);
  const [otherTile, setOtherTile] = useState(null);
  let currTile;
  // let otherTile;

  const dragStart = (e) => {
    currTile = e.target;
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
    // otherTile = e.target;
    setOtherTile(e.target);
  };

  const dragLeave = () => {
    // otherTile = null;
    setOtherTile(null);
  };

  const dragDrop = (e) => {
    e.preventDefault();
  };

  const dragEnd = () => {
    // if (!otherTile.src.includes("3.jpg")) {
    //   return;
    // }
    if (!otherTile || !otherTile.src.includes("3.jpg")) {
      return;
    }
    

    const currCoords = currTile.id.split("-");
    const r = parseInt(currCoords[0]);
    const c = parseInt(currCoords[1]);

    const otherCoords = otherTile.id.split("-");
    const r2 = parseInt(otherCoords[0]);
    const c2 = parseInt(otherCoords[1]);

    const moveLeft = r === r2 && c2 === c - 1;
    const moveRight = r === r2 && c2 === c + 1;
    const moveUp = c === c2 && r2 === r - 1;
    const moveDown = c === c2 && r2 === r + 1;

    const isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
      const currImg = currTile.src;
      const otherImg = otherTile.src;

      currTile.src = otherImg;
      otherTile.src = currImg;

      setTurns((prevTurns) => prevTurns + 1);
    }
  };

  return (
    <div>
      <div className={style.board}>
        {[...Array(rows * columns)].map((_, i) => {
          const r = Math.floor(i / columns);
          const c = i % columns;
          // const tileId = `${r}-${c}`;
          // const tileSrc = `${imgOrder.shift()}.jpg`;

          return (
            <img
            key={`${r}-${c}`}
            id={`${r}-${c}`}
              // src={tileSrc}
            src={require(`./${imgOrder[i]}.jpg`)}
          
              draggable="true"
              onDragStart={dragStart}
              onDragOver={dragOver}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              onDrop={dragDrop}
              onDragEnd={dragEnd}
            />
          );
        })}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default Puzzle;
