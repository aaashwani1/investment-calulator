import React, { useState } from "react";
import "../sass/sip.scss";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
const UserInput = (props) => {
  const initialUserInput = {
    "current-saving": 10000,
    "yearly-contribution": 1200,
    "expected-interest": 7,
    "investment-duration": 10,
  };
  const [userInput, setUserInput] = useState(initialUserInput);
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("submitted");
    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    setUserInput(initialUserInput);
  };
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };
  return (
    <>
      <div className="sipCalculator">
        <div className="bg">
          <h2>Please Input your plan</h2>
          <form onSubmit={submitHandler} className="sip-input-form">
            <div className="d-fx">
              <div>
                <label htmlFor="current-saving">
                  Current Amount{" "}
                  <b> {formatter.format(userInput["current-saving"])}</b>
                </label>

                <input
                  min="0"
                  max="100000"
                  type="range"
                  onChange={(event) =>
                    inputChangeHandler("current-saving", event.target.value)
                  }
                  value={userInput["current-saving"]}
                  id="current-saving"
                />
              </div>
              <div>
                <label htmlFor="yearly-contribution">
                  Monthly Contribution{" "}
                  <b>{formatter.format(userInput["yearly-contribution"])}</b>
                </label>
                <input
                  onChange={(event) =>
                    inputChangeHandler(
                      "yearly-contribution",
                      event.target.value
                    )
                  }
                  min="0"
                  max="100000"
                  type="range"
                  value={userInput["yearly-contribution"]}
                  id="yearly-contribution"
                />
              </div>
              <div>
                <label htmlFor="expected-interest">
                  Expected interest (yearly)
                  <b> {userInput["expected-interest"]}%</b>
                </label>
                <input
                  onChange={(event) =>
                    inputChangeHandler("expected-interest", event.target.value)
                  }
                  min="4"
                  max="30"
                  type="range"
                  value={userInput["expected-interest"]}
                  id="expected-interest"
                />
              </div>
              <div>
                <label htmlFor="investment-duration">
                  Investment duration
                  <b> {userInput["investment-duration"]} Years</b>
                </label>
                <input
                  value={userInput["investment-duration"]}
                  onChange={(event) =>
                    inputChangeHandler(
                      "investment-duration",
                      event.target.value
                    )
                  }
                  min="4"
                  max="50"
                  type="range"
                  id="investment-duration"
                />
              </div>
              <div className="btn-container">
                <div>
                  <input
                    onClick={resetHandler}
                    className="reset"
                    type="reset"
                    value="Reset"
                  ></input>
                </div>
                <div>
                  <input
                    className="submit"
                    type="submit"
                    value="Submit"
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default UserInput;
