import React, { useEffect, useRef, useState } from "react";
import { useLatest } from "react-use";
import Layout from "../../components/Layout";
import { getMarineAnimals } from "../../services/api";
import style from "./index.module.css";
import CatchResultDialog from "./dialogs/CatchResult";

var height = 580; //地面以下
var width = 610; //左右范围
var horizontalPlaneTop = 220;
var animalSize = {
  width: 200,
  height: 200,
};
var animalMaxNum = 10;

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isCollision = (a, b) => {
  return (
    a.left < b.left + b.width &&
    a.left + a.width > b.left &&
    a.top < b.top + b.height &&
    a.top + a.height > b.top
  );
};

// 生成UUID
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const createElementData = ({ type, size, image, data }) => {
  return {
    type,
    id: uuidv4(),
    ...size,
    left: randomNum(0, 2 * 610 - 100),
    top: randomNum(horizontalPlaneTop, 600 - 100),
    image,
    isVisible: true,
    data,
  };
};

const getRandomAnimalsData = (data, num) => {
  const result = {};
  num = Math.min(num, data.length);
  while (num) {
    const randomIndex = randomNum(0, data.length - 1);
    const animal = data[randomIndex];

    if (animal.id in result) continue;
    const item = createElementData({
      type: "animal",
      size: animalSize,
      image: animal.animal_img,
      data: animal,
    });

    if (Object.values(result).some((value) => isCollision(value, item)))
      continue;

    result[animal.id] = item;

    num--;
  }
  return Object.entries(result).map(([_, value]) => value);
};

const Game = () => {
  const [degree, setDegree] = useState(11);
  const degreeLatest = useLatest(degree);
  const directionLatest = useRef(1);
  const [ropeLength, setRopeLength] = useState(60);
  const [elements, setElements] = useState([]);
  const timer = useRef();
  const hookRef = useRef();
  const containerRef = useRef();
  const [openResultProps, setOpenResultProps] = React.useState({
    open: false,
    desc: "",
  });

  const fetchElement = async () => {
    const res = await getMarineAnimals();
    const animalsData = getRandomAnimalsData(res.data, animalMaxNum);
    setElements(animalsData);
  };

  useEffect(() => {
    fetchElement();
  }, []);

  useEffect(() => {
    // createBottles();
    timer.current = setInterval(() => swing(), 20);
    return () => clearInterval(timer.current);
  }, []);

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.keyCode === 32) {
  //       catchBottle();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => document.removeEventListener("keydown", handleKeyDown);
  // }, [degree, ropeLength, bottles]);

  const handleHook = () => {
    catchElement();
  };

  const swing = () => {
    setDegree((prevDegree) => {
      let newDegree = prevDegree + directionLatest.current;
      if (newDegree >= 170 || newDegree <= 10) {
        directionLatest.current *= -1;
      }
      return newDegree;
    });
  };

  const getHookPosition = () => {
    const conatinerRect = containerRef.current.getBoundingClientRect();
    const hookRect = hookRef.current.getBoundingClientRect();
    return {
      top: hookRect.top - conatinerRect.top,
      left: hookRect.left - conatinerRect.left,
    };
  };

  const catchElement = () => {
    clearInterval(timer.current);
    const arc = (degreeLatest.current * Math.PI) / 180;
    const r = height / Math.sin(arc);
    const len = Math.abs(width / Math.cos(arc));
    const maxLength = r > len ? len : r;

    const checkCollision = (hookPosition) => {
      const { left, top } = hookPosition;

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (
          left > element.left &&
          left < element.left + element.width &&
          top > element.top &&
          top < element.top + element.height
        ) {
          return i;
        }
      }
      return -1;
    };

    const lengthen = () => {
      setRopeLength((prevRopeLength) => {
        const newRopeLength = prevRopeLength + 5;
        if (newRopeLength >= maxLength) {
          clearInterval(timer.current);
          timer.current = setInterval(() => shorten(-1), 20);
          return newRopeLength;
        }

        const hookPositionOrigin = getHookPosition();
        const hookPosition = {
          left:
            hookPositionOrigin.left + 35 * Math.sin((degree * Math.PI) / 180),
          top: hookPositionOrigin.top + 5,
        };

        const elementIndex = checkCollision(hookPosition);

        if (elementIndex >= 0) {
          clearInterval(timer.current);
          timer.current = setInterval(() => shorten(elementIndex), 20);
        }

        return newRopeLength;
      });
    };

    const shorten = (catchIndex) => {
      setRopeLength((prevRopeLength) => {
        const newRopeLength = prevRopeLength - 5;
        if (newRopeLength <= 60) {
          catchIndex >= 0 && handleCatched(catchIndex);
          clearInterval(timer.current);
          if (catchIndex >= 0) {
            setElements((prev) =>
              prev.map((item, index) =>
                index === catchIndex
                  ? { ...item, left: 9999, top: 9999, isVisible: false }
                  : item
              )
            );
          }
          timer.current = setInterval(swing, 20);
          return newRopeLength;
        }

        if (catchIndex >= 0) {
          setElements((prev) =>
            prev.map((item, index) => {
              if (index === catchIndex) {
                const hookPositionOrigin = getHookPosition();
                return {
                  ...item,
                  left:
                    hookPositionOrigin.left +
                    (35 - item.width / 2) * Math.sin((degree * Math.PI) / 180),
                  top: hookPositionOrigin.top + 5,
                };
              }
              return item;
            })
          );
        }

        return newRopeLength;
      });
    };

    timer.current = setInterval(lengthen, 20);
  };

  const handleCatched = (elementIndex) => {
    const descFieldMaps = {
      animal: "animal_comment",
    };
    const element = elements[elementIndex];
    console.log(element.data[descFieldMaps[element.type]]);
    setOpenResultProps({
      open: true,
      desc: element.data[descFieldMaps[element.type]],
    });
  };

  return (
    <Layout>
      <div className={style.container} ref={containerRef}>
        <button className={style.hookbutton} onClick={handleHook}>
          Hook
        </button>
        <div
          className={style.rope}
          style={{
            transform: `rotate(${degree}deg)`,
            width: `${ropeLength}px`,
          }}
        >
          <img
            ref={hookRef}
            src={require("./images/hookClose.png")}
            className={style.hook}
            alt="hook"
          />
        </div>
        <div className={style.bottleLayer}>
          {elements.map(
            ({ image, left, top, width, height, isVisible }, index) => {
              if (isVisible) {
                return (
                  <img
                    key={index}
                    src={image}
                    className={style.bottle}
                    style={{
                      top: `${top}px`,
                      left: `${left}px`,
                      width,
                      height,
                    }}
                    alt="bottle"
                  />
                );
              } else {
                return <div key={index}></div>;
              }
            }
          )}
        </div>
      </div>
      <CatchResultDialog
        {...openResultProps}
        onClose={() => setOpenResultProps((prev) => ({ ...prev, open: false }))}
      />
    </Layout>
  );
};

export default Game;
