import React,{useState} from 'react';
import '../App.css';
import Form from './Form';
import Header from './Header'
import Search from './Search'
import Table from "./Table"

// should contain BankData && OnSubmit to pass it to Table 

function App() {
 const [search,setSearch]=useState("")

  return (
    <div className="App">
    <Header />
    <Search setSearch={setSearch} />
    <Form />
    <Table  searchedData={search}/>
    </div>
  );
}

export default App;
