import React from "react";
import "../sass/sip.scss";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const ResultTable = (props) => {
  return (
    <>
      <div className="sipCalculator">
        <h2>Result</h2>
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Interest Year</th>
              <th>Total interest</th>
              <th>Invested capital</th>
              <th>Amount Total</th>
            </tr>
          </thead>

          <tbody>
            {props.data.map((yearlyData) => (
              <tr key={yearlyData.year}>
                <td>{yearlyData.year}</td>
                <td>{formatter.format(yearlyData.yearlyInterest)}</td>
                <td>
                  {formatter.format(
                    yearlyData.savingEndOfYear -
                      props.initialInvestment -
                      yearlyData.yearlyContribution * yearlyData.year
                  )}
                </td>
                <td>
                  {formatter.format(
                    props.initialInvestment +
                      yearlyData.yearlyContribution * yearlyData.year
                  )}
                </td>
                <td>{formatter.format(yearlyData.savingEndOfYear)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ResultTable;
