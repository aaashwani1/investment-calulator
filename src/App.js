import { useState } from "react";
import Header from "./components/Header/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = [];

  if (userInput) {
    let currentSaving = userInput["current-saving"];
    const yearlyContribution = userInput["yearly-contribution"] * 12;
    const expectedReturn = userInput["expected-interest"] / 100;
    const duration = userInput["investment-duration"];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSaving * expectedReturn;
      currentSaving += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingEndOfYear: currentSaving,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}> No investment calculation yet </p>
      )}
      {userInput && (
        <ResultTable
          data={yearlyData}
          initialInvestment={userInput["current-saving"]}
        />
      )}
    </>
  );
}

export default App;
