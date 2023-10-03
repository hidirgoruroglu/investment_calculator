import React from "react";
import "./ResultsTable.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = ({ results }) => {
  if (!results) {
    return <p style={{textAlign:"center"}}>No results available</p>;
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.savingsEndOfYear)}</td>
            <td>{formatter.format(result.yearlyInterest)}</td>
            <td>
              {formatter.format(
                result.savingsEndOfYear -
                  result.initialInvestment -
                  result.yearlyContribution * result.year
              )}
            </td>
            <td>
              {formatter.format(
                result.initialInvestment +
                  result.yearlyContribution * result.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
