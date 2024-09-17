import React, { useEffect, useMemo, useRef, useState } from "react";
import { generate } from "random-words";
import UpperMenu from "./upperMenu";
import { useTestMode } from "../context/testModeContext";
import Stats from "./Stats";

const TypingBox = () => {
  const { testTime } = useTestMode();
  const [wordsArray, setWordsArray] = useState(() => generate(50));
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [currCharIndex, setCurrCharIndex] = useState(0);
  const [countDown, setCountDown] = useState(testTime);
  const [startTest, setStartTest] = useState(false);
  const [testEnd, setTestEnd] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [correctChars, setCorrectChars] = useState(0);
  const [inCorrectChars, setInCorrectChars] = useState(0);
  const [missedChars, setMissedChars] = useState(0);
  const [extraChars, setExtraChars] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [graphData, setGraphData] = useState([]);

  const inputRef = useRef(null);

  const wordsSpanRef = useMemo(() => {
    return Array(wordsArray.length)
      .fill(0)
      .map(() => React.createRef());
  }, [wordsArray]);

  const startTimer = () => {
    const intervalId = setInterval(timer, 1000);
    setIntervalId(intervalId);
    function timer() {
      setCountDown((prevCountDown) => {
        setCorrectChars((correctChars) => {
          setGraphData((graphData) => {
            return [
              ...graphData,
              [
                testTime - prevCountDown + 1,
                (correctChars / 5) / ((testTime - prevCountDown + 1) / 60),
              ],
            ];
          });
          return correctChars;
        });
        if (prevCountDown === 1) {
          setTestEnd(true);
          clearInterval(intervalId);
          return 0;
        }
        return prevCountDown - 1;
      });
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    setCountDown(testTime);
    setWordsArray(generate(50));
    setCurrWordIndex(0);
    setCurrCharIndex(0);
    setStartTest(false);
    setTestEnd(false);
    setCorrectChars(0);
    setInCorrectChars(0);
    setMissedChars(0);
    setExtraChars(0);
    setCorrectWords(0);
    setGraphData([]);
    resetWordsSpanRef();
    focusInput();
  };

  const resetWordsSpanRef = () => {
    wordsSpanRef.forEach((ref) => {
      if (ref.current) {
        ref.current.childNodes.forEach((node) => {
          node.className = "";
        });
      }
    });
    wordsSpanRef[0].current.childNodes[0].className = "current";
  };

  const handleUserInput = (e) => {
    if (!startTest) {
      startTimer();
      setStartTest(true);
    }
    const currentWord = wordsSpanRef[currWordIndex].current;
    const allCurrChars = currentWord.childNodes;

    if (e.keyCode === 32) {
      // Space key
      let correctCharsInWord = currentWord.querySelectorAll(".correct");
      if (correctCharsInWord.length === allCurrChars.length) {
        setCorrectWords((prev) => prev + 1);
      }

      if (allCurrChars.length <= currCharIndex) {
        allCurrChars[currCharIndex - 1].classList.remove("current-right");
      } else {
        allCurrChars[currCharIndex].classList.remove("current");
        setMissedChars((prev) => prev + (allCurrChars.length - currCharIndex));
      }
      wordsSpanRef[currWordIndex + 1].current.childNodes[0].className =
        "current";
      setCurrWordIndex((prev) => prev + 1);
      setCurrCharIndex(0);
      return;
    }

    if (e.keyCode === 8) {
      // Backspace key
      if (currCharIndex !== 0) {
        if (allCurrChars.length === currCharIndex) {
          if (allCurrChars[currCharIndex - 1].className.includes("extra")) {
            allCurrChars[currCharIndex - 1].remove();
            allCurrChars[currCharIndex - 2].className += " current-right";
          } else {
            allCurrChars[currCharIndex - 1].className = "current";
          }
          setCurrCharIndex((prev) => prev - 1);
          return;
        }
        allCurrChars[currCharIndex].className = "";
        allCurrChars[currCharIndex - 1].className = "current";
        setCurrCharIndex((prev) => prev - 1);
      }
      return;
    }

    if (currCharIndex === allCurrChars.length) {
      let newSpan = document.createElement("span");
      newSpan.innerText = e.key;
      newSpan.className = "incorrect extra current-right";
      allCurrChars[currCharIndex - 1].classList.remove("current-right");
      wordsSpanRef[currWordIndex].current.append(newSpan);
      setCurrCharIndex((prev) => prev + 1);
      setExtraChars((prev) => prev + 1);
      return;
    }

    if (e.key === allCurrChars[currCharIndex].innerText) {
      allCurrChars[currCharIndex].className = "correct";
      setCorrectChars((prev) => prev + 1);
    } else {
      allCurrChars[currCharIndex].className = "incorrect";
      setInCorrectChars((prev) => prev + 1);
    }

    if (currCharIndex + 1 === allCurrChars.length) {
      allCurrChars[currCharIndex].className += " current-right";
    } else {
      allCurrChars[currCharIndex].classList.remove("current");
      allCurrChars[currCharIndex + 1].className = "current";
    }

    setCurrCharIndex((prev) => prev + 1);
  };

  const calculateWPM = () => {
    return Math.round((correctChars / 5) / (testTime / 60));
  };

  const calculateAcc = () => {
    return currWordIndex === 0 ? 0 : Math.round((correctWords / currWordIndex) * 100);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    reset();
  }, [testTime]);

  useEffect(() => {
    focusInput();
    wordsSpanRef[0].current.childNodes[0].className = "current";
  }, []);

  return (
    <div>
      <UpperMenu countDown={countDown} />
      {testEnd ? (
        <Stats
          wpm={calculateWPM()}
          accuracy={calculateAcc()}
          correctChars={correctChars}
          inCorrectChars={inCorrectChars}
          missedChars={missedChars}
          extraChars={extraChars}
          graphData={graphData}
          testTime={testTime}
        />
      ) : (
        <div className="type-box" onClick={focusInput}>
          <div className="words">
            {wordsArray.map((word, wordIndex) => (
              <span key={wordIndex} className="word" ref={wordsSpanRef[wordIndex]}>
                {word.split("").map((char, charIndex) => (
                  <span key={charIndex}>{char}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      )}

      <input
        type="text"
        ref={inputRef}
        className="hidden-input"
        onKeyDown={handleUserInput}
      />
    </div>
  );
};

export default TypingBox;