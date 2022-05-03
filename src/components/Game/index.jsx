import { useState } from "react";
import stageData from "./stageData";
import dog from "../../images/dog.png";
import food from "../../images/food.png";
import congrates from "../../images/congrates.gif";
import "./style.css";

export default function Game() {
  const [stageIndex, setStageIndex] = useState(0);
  const [targetStyle, setTargetStyle] = useState("");
  const [buttonIndex, setbuttonIndex] = useState(true);
  const [correctEffect, setCorrectEffect] = useState("none");

  function generateLineNumber() {
    const lineNumbers = [];
    for (let i = 1; i < 11; i++) lineNumbers.push(i);
    return lineNumbers;
  }

  const handleChange = ({ target: { value } }) => {
    setTargetStyle(value);
    let tmp = value.replace(/\s/gi, "");

    if (tmp === stageData[stageIndex].correctAnswer) {
      setCorrectEffect("block");
      btnActive();
    }
  };

  const moveNextLevel = () => {
    setCorrectEffect("none");
    btnDisabled();
    if (stageIndex >= stageData.length - 1) {
      setStageIndex(0);
      setTargetStyle("");
      return;
    }
    setStageIndex((pre) => ++pre);
    setTargetStyle("");
  };

  function btnActive() {
    const target = document.getElementById("next-stage-button");
    target.style.color = "white";
    target.style.backgroundColor = "darkorange";
    setbuttonIndex(false);
  }

  function btnDisabled() {
    const target = document.getElementById("next-stage-button");
    target.style.color = "rgba(255, 255, 255, 0.5)";
    target.style.backgroundColor = "rgb(126, 69, 0)";
    setbuttonIndex(true);
  }

  return (
    <>
      <main className="main" role="main">
        <style>{stageData[stageIndex].dogStyle}</style>
        <style>{stageData[stageIndex].initialStyle}</style>
        <style>{`.${stageData[stageIndex].targetTag} {${targetStyle}}`}</style>
        <section className="code-section">
          <div className="padding-container">
            <h1 className="main-title">CSS 기초를 잡아라!</h1>
            <p className="problem">{`${stageIndex + 1}번 문제: ${
              stageData[stageIndex].problem
            }`}</p>
            <p className="hint">힌트 : {stageData[stageIndex].hint}</p>
            <ul className="link-list">
              {stageData[stageIndex].links.map((link) => (
                <li className="link">
                  <a href={link.URL} target="_blank" rel="noreferrer">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="code-editor">
              <ol className="line-numbers">
                {generateLineNumber().map((number) => (
                  <li key={number} className="each-line-number">
                    {number}
                  </li>
                ))}
              </ol>
              <div className="code-block">
                <span className="code">{`.${stageData[stageIndex].targetTag} {`}</span>
                <textarea
                  type="text"
                  autoComplete="off"
                  className="code-input"
                  value={targetStyle}
                  onChange={handleChange}
                />
                <span className="third-line-code code">{"}"}</span>
              </div>
              <button
                id="next-stage-button"
                disabled={buttonIndex}
                onClick={moveNextLevel}
              >
                다음
              </button>
            </div>
          </div>
        </section>
        <section className="gameboard-section">
          <div id="board">
            <div id="gamebox" className="flex-ground">
              <div className="dog pulse">
                <img src={dog} width="100%" alt="dog" />
              </div>
            </div>
            <div id="gameboxBackground">
              <div className="food swing">
                <img src={food} width="100%" alt="food" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <div>
        <div className="correct" style={{ display: correctEffect }}>
          <p className="correctText">정 답 입 니 다 !</p>
          <img id="correct" src={congrates} alt="congrates" />
        </div>
      </div>
    </>
  );
}
