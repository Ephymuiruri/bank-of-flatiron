import React, { useState } from "react";
import BankData from "../data/data ";
import { render } from "@testing-library/react";
// display BankData based on what is searched for if empty display everything
// change key to sth other than index
function Table ({searchedData}){
const [display,setDisplay]=useState(null)

searchedData.length === 0 ? { currentObj =[...Bankdata]
  setDisplay(currentObj)}:console.log(searchedData)
console.log(display)
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
        <tbody>
          {BankData.map((info,index) =>
    <tr key={index}>
    <td>{info.Date}</td>
    <td>{info.Description}</td>
    <td>{info.Category}</td>
    <td>{info.Amount}</td>
    </tr>)
    }
    </tbody>
    </table>
 )
}
export default Table