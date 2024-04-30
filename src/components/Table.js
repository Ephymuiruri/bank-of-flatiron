import React from "react";

function Table({ searchedData, BankData }) {
  function displayData() {
    if (searchedData.length === 0) {
      console.log(BankData)
      return BankData.map((info, index) => (
        <tr key={index}>
          <td>{info.Date}</td>
          <td>{info.Description}</td>
          <td>{info.Category}</td>
          <td>{info.Amount}</td>
        </tr>
      ));
    } else {
      const filter = BankData.filter(info =>
        info.Description.trim().toLowerCase().includes(searchedData.trim().toLowerCase())
      );
      console.log(filter);
      return filter.map((info, index) => (
        <tr key={index}>
          <td>{info.Date}</td>
          <td>{info.Description}</td>
          <td>{info.Category}</td>
          <td>{info.Amount}</td>
        </tr>
      ));
    }
  }

  return (
    <table id="dataDisplay">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{displayData()}</tbody>
    </table>
  );
}
export default Table