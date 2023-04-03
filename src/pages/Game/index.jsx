import React, { useEffect, useRef, useState } from "react";
import { useLatest } from "react-use";
import Layout from "../../components/Layout";
import style from "./index.module.css";

var height = 580; //地面以下
var width = 610; //左右范围

const Game = () => {
  const [degree, setDegree] = useState(11);
  const degreeLatest = useLatest(degree);
  // const [direction, setDirection] = useState(1);
  const directionLatest = useRef(1);
  const [ropeLength, setRopeLength] = useState(60);
  const [bottles, setBottles] = useState([]);
  const timer = useRef();
  const hookRef = useRef();

  const data = [
    [216, 99],
    [117, 156],
    [90, 170],
  ];

  useEffect(() => {
    createBottles();
    timer.current = setInterval(() => swing(), 20);
    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 32) {
        catchBottle();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [degree, ropeLength, bottles]);

  const swing = () => {
    setDegree((prevDegree) => {
      let newDegree = prevDegree + directionLatest.current;
      if (newDegree >= 170 || newDegree <= 10) {
        directionLatest.current *= -1;
      }
      return newDegree;
    });
  };

  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const createBottles = () => {
    const newBottles = data.map(([width, height]) => {
      const left = randomNum(40, 2 * 610 - width);
      const top = randomNum(200, 600 - height);
      return { left, top, width, height, isVisible: true };
    });
    setBottles(newBottles);
  };

  const catchBottle = () => {
    clearInterval(timer.current);
    const arc = (degreeLatest.current * Math.PI) / 180;
    const r = height / Math.sin(arc);
    const len = Math.abs(width / Math.cos(arc));
    const maxLength = r > len ? len : r;

    const checkBottleCollision = (hookPosition) => {
      const { left, top } = hookPosition;

      for (let i = 0; i < bottles.length; i++) {
        const bottle = bottles[i];
        if (
          left > bottle.left &&
          left < bottle.left + bottle.width &&
          top > bottle.top &&
          top < bottle.top + bottle.height
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

        const hookRect = hookRef.current.getBoundingClientRect();
        const hookPosition = {
          left: hookRect.left + 35 * Math.sin((degree * Math.PI) / 180),
          top: hookRect.top + 5,
        };

        const bottleIndex = checkBottleCollision(hookPosition);

        if (bottleIndex >= 0) {
          clearInterval(timer.current);
          timer.current = setInterval(() => shorten(bottleIndex), 20);
        }

        return newRopeLength;
      });
    };

    const shorten = (bottleIndex) => {
      setRopeLength((prevRopeLength) => {
        const newRopeLength = prevRopeLength - 5;
        if (newRopeLength <= 60) {
          clearInterval(timer.current);
          if (bottleIndex >= 0) {
            setBottles((prevBottles) =>
              prevBottles.map((bottle, index) =>
                index === bottleIndex
                  ? { ...bottle, left: 9999, top: 9999, isVisible: false }
                  : bottle
              )
            );
          }
          timer.current = setInterval(swing, 20);
          return newRopeLength;
        }

        if (bottleIndex >= 0) {
          setBottles((prevBottles) =>
            prevBottles.map((bottle, index) => {
              if (index === bottleIndex) {
                const hookRect = hookRef.current.getBoundingClientRect();
                return {
                  ...bottle,
                  left:
                    hookRect.left +
                    (35 - bottle.width / 2) *
                      Math.sin((degree * Math.PI) / 180),
                  top: hookRect.top + 5,
                };
              }
              return bottle;
            })
          );
        }

        return newRopeLength;
      });
    };

    timer.current = setInterval(lengthen, 20);
  };

  return (
    <Layout>
      <div className={style.container}>
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
        {bottles.map(({ left, top, width, height, isVisible }, index) => {
          if (isVisible) {
            return (
              <img
                key={index}
                src={require(`./images/${index}.png`)}
                className={style.bottle}
                style={{ top: `${top}px`, left: `${left}px` }}
                alt="bottle"
              />
            );
          } else {
            return <></>;
          }
        })}
      </div>
    </Layout>
  );
};

export default Game;
