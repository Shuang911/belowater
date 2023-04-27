import { useState } from "react";
import style from "./index.module.css";
import Header from "../../../../components/Header";
import NavigationContainer from "../../../../components/NavigationContainer";
import CertificatePage from "../CertificatePage";
import succes from "./success_icon_194168.png";

const rows = 3;
const columns = 3;

// const imgOrder = ["1", "3", "2", "4", "5", "6", "7", "8", "9"];
const imgOrder = ["1", "3", "2", "7", "9", "5", "4", "6", "8"];

const Puzzle = () => {
  const [turns, setTurns] = useState(0);
  const [otherTile, setOtherTile] = useState(null);
  const [currTile, setCurrTile] = useState(null);
  const [ImgOrder, setImgOrder] = useState(imgOrder);

  const dragStart = (e) => {
    setCurrTile(e.target);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();

    setOtherTile(e.target);
  };

  const dragLeave = () => {};

  const dragDrop = (e) => {
    e.preventDefault();
    setOtherTile(document.getElementById(otherTile.id));
  };

  const dragEnd = () => {
    // console.log(currTile);
    // console.log("123");
    // console.log(otherTile.src);

    // if (!otherTile || !otherTile.src.includes("9j")) {
    //   return;
    // }

    if (!otherTile) {
      return;
    }

    const currCoords = currTile.id.split("-");
    const r = parseInt(currCoords[0]);
    const c = parseInt(currCoords[1]);
    // console.log(currCoords);

    const otherCoords = otherTile.id.split("-");
    const r2 = parseInt(otherCoords[0]);
    const c2 = parseInt(otherCoords[1]);
    // console.log(otherCoords);

    const temp = imgOrder[r * columns + c];
    imgOrder[r * columns + c] = imgOrder[r2 * columns + c2];
    imgOrder[r2 * columns + c2] = temp;

    const moveLeft = r === r2 && c2 === c - 1;
    const moveRight = r === r2 && c2 === c + 1;
    const moveUp = c === c2 && r2 === r - 1;
    const moveDown = c === c2 && r2 === r + 1;

    const isAdjacent = moveLeft || moveRight || moveUp || moveDown;
    // console.log("isAdjacent", isAdjacent);
    // console.log("123");
    if (isAdjacent) {
      let currImg = currTile.src;
      let otherImg = otherTile.src;

      currTile.src = otherImg;
      otherTile.src = currImg;

      setTurns((prevTurns) => prevTurns + 1);

      // console.log(currTile.src);
      // console.log(currTile);

      setImgOrder(imgOrder.slice());
    }
  };

  const isSolved = imgOrder.join("") === "123456789";
  // console.log("isSolved",isSolved,"123456789");

  return (
    <div className="relative bg-ghostwhite w-full overflow-hidden flex flex-col py-[4.13rem] px-[0.69rem] box-border items-center justify-start gap-[3.13rem] text-left text-[1.75rem] text-indigo_900 font-catamaran">
      <Header />
      <div>
        <div className={style.board}>
          <p>
            Welcome to our puzzle game ! Piece together a cute seal lounging on
            the beach, let's see how many turns you need !
          </p>

          {[...Array(rows * columns)].map((_, i) => {
            const r = Math.floor(i / columns);
            const c = i % columns;

            const src = `./${imgOrder[i]}.jpg`;

            return (
              <img
                key={`${r}-${c}`}
                id={`${r}-${c}`}
                src={src}
                // onError={() => console.log("Failed to load image")}

                // src={require(`./image/${imgOrder[i]}.jpg`)}
                // onLoad={() => console.log(src)}

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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className={style.turns}>Turns: {turns}</p>
        {isSolved && (
          <div>
            <br></br>
            {/* <p className={style.suc}>Success!</p>
          <img src={succes} alt=""></img> */}
            <br></br>
            <CertificatePage />
          </div>
        )}
      </div>
      <NavigationContainer
        dimensionsText="/vector-11.svg"
        dimensionsText2="/path2.svg"
        dimensionsText3="/path3.svg"
        dimensionsText4="/ellipse-11.svg"
        dimensionsText5="/vector-21.svg"
        dimensionsText6="/vector-31.svg"
        dimensionsText7="/vector-41.svg"
        dimensionsText8="/vector-51.svg"
        dimensionsText9="/vector-61.svg"
        dimensionsText10="/vector-71.svg"
        dimensionsText11="/vector-81.svg"
        propPosition="relative"
        propFlexShrink="0"
        propTop="unset"
        propLeft="unset"
        //onFAQsTextClick={onFAQsTextClick}
      />
    </div>
  );
};

export default Puzzle;
