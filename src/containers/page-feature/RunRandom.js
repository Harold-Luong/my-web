import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";

const RunRandom = () => {
  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0]);
  const [isCleared, setClear] = useState(false);
  const bars = useRef([]);

  useEffect(() => {
    numbers.forEach((number, index) => {
      console.log(number);
      const elem = bars.current[index];
      let width = 0;
      const id = setInterval(frame, number);

      function frame() {
        if (width >= number) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = `${width}%`;
          elem.innerHTML = `${width}%`;
        }
      }
      return () => clearInterval(id);
    });
  }, [numbers, isCleared]);

  const handleRandomClick = () => {
    const newNumbers = [];
    const upperLimit = 20;
    const lowerLimit = 10;

    while (newNumbers.length < 5) {
      const randomNumber =
        Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }

    setNumbers(newNumbers);
  };
  const handleClear = () => {
    setNumbers([0, 0, 0, 0, 0]);
    setClear(true);
  };

  return (
    <Container>
      <Row>
        <h2>Run random</h2>
        <div>
          <button onClick={handleRandomClick}>Random</button>
          {numbers.length > 0 && (
            <div>
              <ul>
                {numbers.map((number, index) => (
                  <li key={index}>
                    <div
                      ref={(el) => (bars.current[index] = el)}
                      className="w3-container w3-gray w3-center"
                      style={{ width: "0%" }}
                    >
                      {number}%
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={handleClear}>Clear</button>
        </div>
      </Row>
    </Container>
  );
};

export default RunRandom;
